import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import pkg from './package.json' with { type: 'json' };
import sveltePackage from './node_modules/svelte/package.json' with { type: 'json' };
import svelteKitPackage from './node_modules/@sveltejs/kit/package.json' with { type: 'json' };
import vitePackage from './node_modules/vite/package.json' with { type: 'json' };
import svelterunehighlightPackage from './node_modules/svelte-rune-highlight/package.json' with { type: 'json' };
import Svelte5UiLibPackage from './node_modules/svelte-5-ui-lib/package.json' with { type: 'json' };
import runesmetatagsPackage from './node_modules/runes-meta-tags/package.json' with { type: 'json' };
import runaticsPackage from './node_modules/runatics/package.json' with { type: 'json' };
import tailwindcssPackage from './node_modules/tailwindcss/package.json' with { type: 'json' };

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	define: {
    __NAME__: JSON.stringify(pkg.name),
    __DESCRIPTION__: JSON.stringify(pkg.description),
    __VERSION__: JSON.stringify(pkg.version),
    __GITHUBURL__: JSON.stringify(pkg.repository.url),
    __ORIGINAL_SOURCE_NAME__: JSON.stringify(pkg.contributors[0].name),
    __ORIGINAL_SOURCE_URL__: JSON.stringify(pkg.contributors[0].url),
    __RUNATICS_VERSION__: JSON.stringify(runaticsPackage.version),
    __RUNES_METATAGS_VERSION__: JSON.stringify(runesmetatagsPackage.version),
    __SVELTE_VERSION__: JSON.stringify(sveltePackage.version),
    __SVELTEKIT_VERSION__: JSON.stringify(svelteKitPackage.version),
    __SVELTE_RUNE_HIGHLIGHT_VERSION__: JSON.stringify(svelterunehighlightPackage.version),
    __SVELTE_5_UI_LIB_VERSION__: JSON.stringify(Svelte5UiLibPackage.version),
		__VITE_VERSION__: JSON.stringify(vitePackage.version),
		__TAILWINDCSS_VERSION__: JSON.stringify(tailwindcssPackage.version)
  },
	test: {
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [svelteTesting()],

				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',

				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
