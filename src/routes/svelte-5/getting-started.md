---
layout: mainLayout
title: Flowbite Svelte Icons v2
subtitle: Getting Started with v2
path: svelte-5/getting-started
description: Get started with version 2 for your Svelte 5 Runes projects.
---

<script>
  import { Banner } from 'flowbite-svelte';
  import { removeHyphensAndCapitalize } from '../utils/utils';
</script>

# Flowbite Svelte Icons: v2

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/flowbite-svelte-icons/next" alt="npm" ></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/flowbite-svelte-icons" alt="License" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/flowbite-svelte-icons.svg" alt="npm" ></a>
</div>

## Requirements

```markdown
- Svelte 5:Runes
- TailwindCSS
- tailwind-merge
```

## Installation

Install Svelte and TailwindCSS:

```sh
// install Svelte 5
npm create svelte@latest my-project
cd my-project
npx svelte-add@latest tailwindcss
pnpm i
```

Install `flowbite-svelte-icons v2`:

```sh
pnpm i -D flowbite-svelte-icons@2.0.0-next.x
```

Replace `2.0.0-next.x` with the latest `v2` version.
Check the latest version at the [GitHub Releases](https://github.com/themesberg/flowbite-svelte-icons/releases).

Enable Runes in `svelte.config.js`:

```js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],
	compilerOptions: {
		runes: true
	},
	kit: {
		adapter: adapter()
	}
};

export default config;
```

To make sure the classes used by flowbite-svelte-icons are included by the Tailwindcss, add the following to `tailwind.config.cjs`.

```js
const config = {
  content: [
       // more lines
        "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",
    ],
    // more lines
}  
```

## Basic Usages

In a svelte file:

```html
<script>
  import { AddressBookOutline } from 'flowbite-svelte-icons';
</script>

<AddressBookOutline />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import AddressBookOutline from 'flowbite-svelte-icons/AddressBookOutline.svelte';
</script>

<AddressBookOutline />
```

## Passing down other attributes

Since all icons have `{...$$restProps}`, you can pass other attibutes as well.

```html
<AddressBookOutline id="my-svg" transform="rotate(45)"/>
```

## Using svelte:component

```html
<script>
  import { AddressBookOutline } from 'flowbite-svelte-icons';
</script>

<svelte:component this="{AddressBookOutline}" />
```

## Using onMount

```html
<script>
  import { AddressBookOutline } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new AddressBookOutline({ target: document.body, props });
  });
</script>
```

## Import all

Use `import * as Icon from 'flowbite-svelte-icons`.

```html
<script>
  import * as Icon from 'flowbite-svelte-icons';
</script>

<Icon.AddressBookOutline />

<h1>Size</h1>
<Icon.AddressBookOutline size="30" />

<h1>Tailwind CSS</h1>
<Icon.AddressBookOutline class="text-blue-500" />
```
