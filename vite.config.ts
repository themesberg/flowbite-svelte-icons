import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import pkg from './package.json' assert { type: 'json' };
import flowbiteSveltePackage from './node_modules/flowbite-svelte/package.json' assert { type: 'json' };
import sveltePackage from 'svelte/package.json' assert { type: 'json' };
import svelteKitPackage from '@sveltejs/kit/package.json' assert { type: 'json' };
import vitePackage from 'vite/package.json' assert { type: 'json' };
import tailwindcssPackage from 'tailwindcss/package.json' assert { type: 'json' };

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  define: {
    __NAME__: `"${pkg.name}"`,
    __VERSION__: `"${pkg.version}"`,
    __GITHUBURL__: `"${pkg.repository.url}"`,
    __FLOWBITESVELTEVERSION__: `"${flowbiteSveltePackage.version}"`,
    __SVELTEVERSION__: `"${sveltePackage.version}"`,
    __SVELTEKITVERSION__: `"${svelteKitPackage.version}"`,
    __VITEVERSION__: `"${vitePackage.version}"`,
    __TAILWINDCSSVERSION__: `"${tailwindcssPackage.version}"`
  }
});
