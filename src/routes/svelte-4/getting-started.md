---
layout: mainLayout
title: Flowbite Svelte Icons v1
subtitle: Getting started with v1
path: svelte-4/getting-started
description: Accessible SVG icons for your Svelte 4 and 5 projects.
---

<script>
  import { Banner } from 'flowbite-svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import { removeHyphensAndCapitalize } from '../utils/utils';
</script>

# Flowbite Svelte Icons: v1

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/flowbite-svelte-icons" alt="npm" ></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/flowbite-svelte-icons" alt="License" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/flowbite-svelte-icons.svg" alt="npm" ></a>
</div>

## Requirements

```markdown
- Svelte 4 or 5 (without Runes)
- TailwindCSS
- tailwind-merge
```

## Installation

Install Svelte and TailwindCSS:

```sh
npm create svelte@latest my-project
cd my-project
npx svelte-add@latest tailwindcss
pnpm i
pnpm i -D flowbite-svelte-icons
```

To make sure the classes used by flowbite-svelte-icons are included by the Tailwindcss, add the following to tailwind.config.cjs.

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

## A11y friendly 

Use `title`, `desc`, and `ariaLabel` props to make your icons accessible.

```html
<HeartSolid
  title={{ id: 'my-title', title: 'Red heart' }}
  desc={{ id: 'my-descrip', desc: 'The shape of a red heart' }}
  ariaLabel="red heart"
  color="red"
/>
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