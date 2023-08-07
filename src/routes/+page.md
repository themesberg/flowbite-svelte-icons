# Flowbite Svelte Icons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25" style="height: 25px !important;" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/flowbite-svelte-icons" alt="npm" height="25" style="height: 25px !important;" ></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;" ></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/flowbite-svelte-icons" alt="License" height="25" style="height: 25px !important;" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/flowbite-svelte-icons.svg" alt="npm" height="25" style="height: 25px !important;" ></a>
</div>

510+ SVG [Flowbite icons](https://github.com/themesberg/flowbite-icons) components for Svelte. 

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

## Repo

[GitHub Repo](https://github.com/themesberg/flowbite-svelte-icons)

## Original source

[themesberg/flowbite-icons](https://github.com/themesberg/flowbite-icons)

## License

[Flowbite-Svelte-Icons License](https://github.com/themesberg/flowbite-svelte-icons/blob/main/LICENSE)

[Flowbite Icons License](https://github.com/themesberg/flowbite-icons/blob/main/LICENSE)

## Dependencies

- "svelte": "^3.54.0 || ^4.0.0",
- "tailwind-merge": "^1.13.2",
- "tailwindcss": "^3.3.2"

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
  import { Icon } from 'flowbite-svelte-icons';
</script>

<Icon name="address-card-solid" />
```

## Props

- @prop name;
- @prop size =  "xs" | "sm" | "md" | "lg" | "xl" = "md";
- @prop role = "img";
- @prop ariaLabel = 'icon file name';

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
<Icon name="address-card-solid" size="md" />
```

If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by including the desired classes in the `class` prop. For example:

```html
<Icon name="address-card-solid" class="h-24 w-24 text-blue-700 mr-4" />
```

## Color

You can apply Tailwind CSS color directly to the icon component or its parent tag using the `class` prop.

```html
<Icon name="address-card-solid" size="md" class="text-red-700 dark:text-green-300 inline m-1"/>

<div class="text-red-700 dark:text-green-300 inline m-1">
  <Icon name="address-card-solid" size="md" />
</div>
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<Icon name="address-card-solid" class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `address-card-solid` has `aria-label="address card solid"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Icon name="address-card-solid" class="text-red-700" ariaLabel="red address card solid" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Icon name="address-card-solid" tabindex="-1" />
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
<Icon name="address-card-solid" tabindex="0" />
```

## Using svelte:component

```html
<script>
  import { Icon } from 'flowbite-svelte-icons';
</script>

<svelte:component this="{Icon}" name="address-card-solid" />
```

## Using onMount

```html
<script>
  import { Icon } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';
  const props = {
    name: 'address-card-solid',
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Icon({ target: document.body, props });
  });
</script>
```

## Import all

Use `import {Icon, icons} from 'flowbite-svelte-icons`.

```html
<script>
  import {Icon, icons} from 'flowbite-svelte-icons';
</script>

<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">
  {#each Object.keys(icons) as name}
    <div class="flex gap-4 items-center text-lg inline">
      <Icon name={name} size="md" class="inline" />
      {name}
    </div>
  {/each}
</div>
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

