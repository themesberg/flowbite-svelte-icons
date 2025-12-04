#!/usr/bin/env node

import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const srcLibPath = './src/lib';

async function fixFile(filePath) {
  let content = await readFile(filePath, 'utf-8');
  let wasFixed = false;
  
  // Pattern 1: Files with strokeWidth (Outline files)
  const pattern1 = /^(\s*)let ariaDescribedby = `\$\{title\?\.id \|\| ''\} \$\{desc\?\.id \|\| ''\}`\.trim\(\);\s*\n(\s*)const hasDescription = !!\(title\?\.id \|\| desc\?\.id\);\s*\n(\s*)const isLabeled = !!ariaLabel \|\| hasDescription;/m;
  
  // Pattern 2: Files without strokeWidth (Solid files)  
  const pattern2 = /^(\s*)let ariaDescribedby = `\$\{title\?\.id \|\| ''\} \$\{desc\?\.id \|\| ''\}`\.trim\(\);\s*\n(\s*)const hasDescription = !!\(title\?\.id \|\| desc\?\.id\);\s*\n(\s*)const isLabeled = !!ariaLabel \|\| hasDescription;/m;
  
  if (pattern1.test(content)) {
    content = content.replace(
      pattern1,
      (match, indent1, indent2, indent3) => 
        `${indent1}const ariaDescribedby = $derived(\`\${title?.id || ''} \${desc?.id || ''}\`.trim());\n` +
        `${indent2}const hasDescription = $derived(!!(title?.id || desc?.id));\n` +
        `${indent3}const isLabeled = $derived(!!ariaLabel || hasDescription);`
    );
    wasFixed = true;
  } else if (pattern2.test(content)) {
    content = content.replace(
      pattern2,
      (match, indent1, indent2, indent3) => 
        `${indent1}const ariaDescribedby = $derived(\`\${title?.id || ''} \${desc?.id || ''}\`.trim());\n` +
        `${indent2}const hasDescription = $derived(!!(title?.id || desc?.id));\n` +
        `${indent3}const isLabeled = $derived(!!ariaLabel || hasDescription);`
    );
    wasFixed = true;
  }
  
  if (wasFixed) {
    await writeFile(filePath, content, 'utf-8');
  }
  
  return wasFixed;
}

async function processDirectory() {
  const files = await readdir(srcLibPath);
  const svelteFiles = files.filter(file => file.endsWith('.svelte'));
  
  let fixedCount = 0;
  let totalFiles = 0;
  
  console.log('Processing files...\n');
  
  for (const file of svelteFiles) {
    const filePath = join(srcLibPath, file);
    totalFiles++;
    
    try {
      const wasFixed = await fixFile(filePath);
      if (wasFixed) {
        fixedCount++;
        console.log(`✓ Fixed: ${file}`);
      }
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\n${'='.repeat(50)}`);
  console.log(`Summary: ${fixedCount} of ${totalFiles} files fixed`);
  console.log(`${'='.repeat(50)}\n`);
}

processDirectory().catch(console.error);
