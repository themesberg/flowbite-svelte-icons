/*
This script reads the files in the dist directory and creates a new exports object in the package.json file with the appropriate svelte and types paths for each Svelte component file found in the dist directory, except for index.js and index.d.ts.

The resulting exports object is structured as follows:
"exports": {
  ".": {
    "types": "./dist/index.d.ts",
    "svelte": "./dist/index.js"
  },
  "./<component-name>.svelte": {
    "types": "./dist/<component-name>.svelte.d.ts",
    "svelte": "./dist/<component-name>.svelte"
  },
  ...
}

where <component-name> represents the name of each Svelte component file found in the dist directory.
*/

// Import the 'fs' module to access the file system
import fs from 'fs';

// Read the list of files in the "./dist" directory and filter out non-.svelte and non-.js files.
const files = fs.readdirSync('./dist').filter((file) => file.endsWith('.svelte') || file.endsWith('.js'));

// Create the initial "exports" object with an entry for "./dist/index.*".
const exports = {
  '.': {
    types: './dist/index.d.ts',
    svelte: './dist/index.js'
  }
};

// Iterate over each ".svelte" or ".js" file in the "./dist" directory.
// For each ".svelte" file, add an entry to the "exports" object with the svelte and types paths updated.
// For each ".js" file, add an entry to the "exports" object with the js path updated.
// For any other files, add an entry to the "exports" object as is.
files.forEach((file) => {
  if (file !== 'index.js') {
    const name = file.replace(/\.svelte|\.js/, '');

    if (file.endsWith('.svelte')) {
      exports[`./${name}.svelte`] = {
        types: `./dist/${name}.svelte.d.ts`,
        svelte: `./dist/${name}.svelte`
      };
    } else if (file.endsWith('.js')) {
      exports[`./${name}.js`] = {
        types: `./dist/${name}.d.ts`,
        svelte: `./dist/${file}` // Point to the original JavaScript file
      };
    } else {
      exports[`./${file}`] = `./dist/${file}`;
    }
  }
});

// Read the package.json file, update the "exports" field, and write the file back out.
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
packageJson.exports = exports;

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
