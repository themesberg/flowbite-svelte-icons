---
layout: mainLayout
---

# Flowbite Svelte Icons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25" style="height: 25px !important;" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/flowbite-svelte-icons" alt="npm" height="25" style="height: 25px !important;" ></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;" ></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/flowbite-svelte-icons" alt="License" height="25" style="height: 25px !important;" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/flowbite-svelte-icons.svg" alt="npm" height="25" style="height: 25px !important;" ></a>
</div>

480+ SVG [Flowbite icons](https://github.com/themesberg/flowbite-icons) components for Svelte. 

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

## Repo

[GitHub Repo](https://github.com/themesberg/flowbite-svelte-icons)

## Original source

[themesberg/flowbite-icons](https://github.com/themesberg/flowbite-icons)

## License

[Flowbite-Svelte-Icons License](https://github.com/themesberg/flowbite-svelte-icons/blob/main/LICENSE)

[Flowbite Icons License](https://github.com/themesberg/flowbite-icons/blob/main/LICENSE)

## Installation

```sh
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

## Props

### Outline

- @prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
- @prop export let role = ctx.role || 'img';
- @prop export let strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | null | undefined = ctx.strokeLinecap || 'round';
- @prop export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined = ctx.strokeLinejoin || 'round';
- @prop export let strokeWidth = ctx.strokeWidth || '2';
- @prop export let ariaLabel = 'zoom in outline';

### Solid

- @prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
- @prop export let role = ctx.role || 'img';
- @prop export let ariaLabel = 'icon file name';

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

## Setting Global Icon using setContext

You can establish global icon preferences in your Svelte application using `setContext`. This allows you to configure icon-related properties once and share them across multiple components.

In your `+layout.svelte` or `+page.svelte`, you can define and set global icon preferences as follows:

```html
<script>
  import { setContext } from 'svelte';

  // Define your global icon settings
  const iconCtx = {
    size: '100', // Icon size in pixels
  };
  setContext('iconCtx', iconCtx);
</script>
```

The `size`, and `role` (for solid icons) and `size`, `role`, `strokeLinecap`, `strokeLinejoin`, `strokeWidth` (for outline icons) properties are optional, allowing you to fine-tune the appearance and accessibility of your icons as needed.
If you set `size`, icons can be customized with different color. For example:

```html
<script>
  import { setContext } from 'svelte';
  import { AccountBookFilled } from 'svelte-ant-design-icons';
  const iconCtx = {
    size: '50'
  };
  setContext('iconCtx', iconCtx);
</script>

<AccountBookFilled color="#ff4488" />
```

Remember that you can set only one or more properties, allowing you to tailor icon settings to your specific design and accessibility requirements.

Feel free to mix and match these properties as needed to create visually appealing and accessible icons in your Svelte application.

## Creating a Default Icon Setting

You can create a config file, `/src/lib/icon.config.json`.

The `IconSolid` and `IconOutline` components serve as a wrapper for svelte:component, allowing you to establish a global default setting or expand the capabilities of a component.

To create a default global icon setting, follow these steps:

### Configuration File

Start by creating a configuration file named `/src/lib/icon.config.json` with the following structure:

```json
{
  "config1": {
    "size": 40,
    "color": "#FF5733"
  },
  "config2": {
    "size": 50,
    "color": "#445533"
  }
}
```

In this JSON file, you can define different configurations (config1 and config2 in this case) for your icons, specifying attributes like size, variation, and color.

### Implementation

In your Svelte page file, make use of the configurations from the JSON file:

```html
<script lang="ts">
  type IconConfig = {
    config1: {
      size: number;
      color: string;
    };
    config2: {
      size: number;
      color: string;
    };
  };
  import config from '$lib/icon.config.json';
  import { IconOutline, IconSolid, AngleLeftOutline, ArrowRightSolid } from 'flowbite-svelte-icons';
  const iconConfig: IconConfig = config;
  const config1 = iconConfig.config1;
  const config2 = iconConfig.config2;
</script>

<IconOutline {...config1} icon="{AngleLeftOutline}" />
<IconSolid {...config2} icon="{ArrowRightSolid}" />
```

We import the configurations from the JSON file and assign them to config1 and config2. We then utilize the Icon component with the spread attributes `{...config1}` and `{...config2}` to apply the respective configurations to each icon.

## Custom Default Icon

If you wish to create a custom default icon, you can follow these steps:

Create a Svelte component named `src/lib/MyIcon.svelte`:

```html
<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: 30,
    color: '#FF5733'
  };
  import { IconSolid } from 'flowbite-svelte-icons';
  export let icon: ComponentType;
</script>

<IconSolid {...config} {icon} />
```

This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

### Implementation in a Page

To use your custom default icon in a Svelte page, do the following:

```html
<script>
  import MyIcon from '$lib/MyIcon.svelte';
  import { AngleLeftSolid } from 'flowbite-svelte-icons';
</script>

<MyIcon icon="{AngleLeftSolid}" />
```

Here, we import the `MyIcon` component and the `AngleLeftSolid` icon. By passing the `AngleLeftSolid` icon to the `icon` prop of MyIcon, you apply the default configuration to the icon.

## Color

You can apply Tailwind CSS color directly to the icon component or its parent tag using the `class` prop.

```html
<AddressCardSolid size="md" class="text-red-700 dark:text-green-300 inline m-1"/>

<div class="text-red-700 dark:text-green-300 inline m-1">
  <AddressCardSolid size="md" />
</div>
```

## CSS HEX Colors

Use the color attribute to change colors with HEX color code for Filled and Outlined components.

```html
<AddressCardSolid color="#ff0000" size="md"/> 
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
