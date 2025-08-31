/**
 * Configuration for markdown-to-llm converter
 */
export default {
  // Source directory for markdown files
  srcDir: "./src/routes/docs",
  
  // Output directory for processed files
  outDir: "./static/llm",
  
  // Output file format
  format: "md",
  
  // Directory for component data
  dataDir: "./src/routes/component-data",
  
  // Sections to ignore (can be string or array)
  // ignore: [
  //   "Installation",
  //   "Setup"
  // ],
  
  // Strip this prefix from output paths
  stripPrefix: "docs",
  
  // Whether to completely clean the output directory (delete all files and subdirectories)
  // instead of just deleting files with matching format
  cleanOutDir: true,
  baseUrl: 'https://flowbite-svelte.com/llm/icons',
  repo: 'https://github.com/themesberg/flowbite-svelte-icons',
  
  // Order for concatenating files in context-full.txt
  // contextOrder: ['pages', 'components', 'forms', 'typography', 'extend', 'utilities'],

  docsDir: 'src/routes/guide',
  // examplesDir: 'src/routes/docs-examples',
  pkgName: 'Flowbite Svelte Icons',
};