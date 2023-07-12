# Flowbite Svelte Icons

<div class="flex justify-center gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" height="25" style="height: 25px !important;" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/flowbite-svelte-icons" alt="npm" height="25" style="height: 25px !important;" ></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;" ></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/flowbite-svelte-icons" alt="License" height="25" style="height: 25px !important;" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/flowbite-svelte-icons.svg" alt="npm" height="25" style="height: 25px !important;" ></a>
</div>


480+ SVG [Flowbite icons](https://github.com/themesberg/flowbite-icons) components for Svelte. 

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

## Repo

[GitHub Repo](https://github.com/themesberg/flowbite-svelte-icons)

## Installation

```sh
pnpm i -D flowbite-svelte-icons
```

## Usages

In a svelte file:

```html
<script>
  import { AddressCardSolid } from 'flowbite-svelte-icons';
</script>

<AddressCardSolid />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import AddressCardSolid from 'flowbite-svelte-icons/AddressCardSolid.svelte';
</script>

<AddressCardSolid />
```

If you are a TypeScript user, install **typescript version 5.0.0 or above**.

```sh
pnpm i -D typescript@latest
```

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  // more config
  "compilerOptions": {
    // more config
    "moduleResolution": "nodenext"
  }
}
```

## Props

### Outline

- size:  'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
- role: string = 'img';
- strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | null | undefined = 'round';
- strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined = 'round';
- strokeWidth = '2';
- ariaLabel = 'icon file name';

### Solid

- size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
- role: string = 'img';
- ariaLabel = 'icon file name';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

The following table provides details about the available sizes for icons:

|Size|	CSS Classes|
|--|--|
|xs|	'w-3 h-3'|
|sm	|'w-4 h-4'|
|md	|'w-5 h-6'|
|lg	|'w-6 h-6'|
|xl	|'w-8 h-8'|


To change the size of an icon, use the `size` prop and specify the desired size. For example:

```html
<AddressCardSolid size="md" />
```

If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by including the desired classes in the `class` prop. For example:

```html
<AddressCardSolid class="h-24 w-24 text-blue-700 mr-4" />
```

## Color

You can apply Tailwind CSS color directly to the icon component or its parent tag using the `class` prop.

```html
<AddressCardSolid size="md" class="text-red-700 dark:text-green-300 inline m-1"/>

<div class="text-red-700 dark:text-green-300 inline m-1">
  <AddressCardSolid size="md" />
</div>
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<AddressCardSolid class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `BxAbacus` has `aria-label="bx abacus"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<AddressCardSolid ariaLabel="address card solid" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<AddressCardSolid tabindex="-1" />
```

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

## Passing down other attributes

You can pass other attibutes as well.

```html
<AddressCardSolid tabindex="0" />
```

## Using svelte:component

```html
<script>
  import { AddressCardSolid } from 'flowbite-svelte-icons';
</script>

<svelte:component this="{AddressCardSolid}" />
```

## Using onMount

```html
<script>
  import { AddressCardSolid } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new AddressCardSolid({ target: document.body, props });
  });
</script>
```

## Import all

Use `import * as Icon from 'flowbite-svelte-icons`.

```html
<script>
  import * as Icon from 'flowbite-svelte-icons';
</script>

<Icon.AddressCardSolid />

<h1>Size</h1>
<Icon.AddressCardSolid size="30" />

<h1>Tailwind CSS</h1>
<Icon.AddressCardSolid class="text-blue-500" />
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

