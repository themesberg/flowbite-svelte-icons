<script>
  import { removeHyphensAndCapitalize } from './utils/helpers';
  const name = __NAME__;
  const version = __VERSION__;
  const githuburl = __GITHUBURL__;
  const svelteVersion = __SVELTEVERSION__;
  const svelteKitVersion = __SVELTEKITVERSION__;
  const viteVersion = __VITEVERSION__;
  const tailwindcssVersion =  __TAILWINDCSSVERSION__;
</script>

<h1>Flowbite Svelte Icons</h1>

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/flowbite-svelte-icons" alt="npm" ></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" ></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/flowbite-svelte-icons" alt="License" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/flowbite-svelte-icons.svg" alt="npm" ></a>
</div>

540+ SVG [Flowbite icons](https://github.com/themesberg/flowbite-icons) components for Svelte 3/4/5/Runes.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

<h2>Repo</h2>

[GitHub Repo](https://github.com/themesberg/flowbite-svelte-icons)

<h2>Requirements</h2>

<h3>v1</h3>
- Svelte 4/5 (No Runes)
- TailwindCSS

<h3>v2</h3>
- Svelte 5:Runes
- TailwindCSS

<h2>Installation</h2>

Install Svelte and TailwindCSS:

CODE codes/installation.md

<h3>Svelte 4/5:</h3>

CODE codes/svelte-4-5.md

<h3>Svelte 5 Runes</h3>
After installing Svelte-5 and updating `svelte.config.js` to enable `runes`:

CODE codes/svelte-5-runes.md

Replace `2.0.0-next.x` with the latest `v2` version.

Check the latest version at the [GitHub Releases](https://github.com/themesberg/flowbite-svelte-icons/releases).

To make sure the classes used by flowbite-svelte-icons are included by the Tailwindcss, add the following to tailwind.config.cjs.

CODE codes/svelte-5-runes-config.js

<h2>Usages</h2>

In a svelte file:

CODE codes/usage.md

<h2>Faster compiling</h2>

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

CODE codes/faster-compiling.md

<h2>Props</h2>

<h3>Outline</h3>

- @prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
- @prop export let role = ctx.role || 'img';
- @prop export let strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | null | undefined = ctx.strokeLinecap || 'round';
- @prop export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined = ctx.strokeLinejoin || 'round';
- @prop export let strokeWidth = ctx.strokeWidth || '2';
- @prop export let ariaLabel = 'zoom in outline';

<h3>Solid</h3>

- @prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
- @prop export let role = ctx.role || 'img';
- @prop export let ariaLabel = 'icon file name';

<h2>IDE support</h2>

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

<h2>Size</h2>

The following table provides details about the available sizes for icons:

|Size|	CSS Classes|
|--|--|
|xs|	'w-3 h-3'|
|sm	|'w-4 h-4'|
|md	|'w-5 h-6'|
|lg	|'w-6 h-6'|
|xl	|'w-8 h-8'|


To change the size of an icon, use the `size` prop and specify the desired size. For example:

CODE codes/size1.md

If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by including the desired classes in the `class` prop. For example:

CODE codes/size2.md

<h2>Setting Global Icon using setContext</h2>

You can establish global icon preferences in your Svelte application using `setContext`. This allows you to configure icon-related properties once and share them across multiple components.

In your `+layout.svelte` or `+page.svelte`, you can define and set global icon preferences as follows:

CODE codes/setting-global.md

The `size`, and `role` (for solid icons) and `size`, `role`, `strokeLinecap`, `strokeLinejoin`, `strokeWidth` (for outline icons) properties are optional, allowing you to fine-tune the appearance and accessibility of your icons as needed.
If you set `size`, icons can be customized with different color. For example:

CODE codes/setting-global-2.md

Remember that you can set one or more properties, allowing you to tailor icon settings to your specific design and accessibility requirements.

Feel free to mix and match these properties as needed to create visually appealing and accessible icons in your Svelte application.

<h2>Creating a Default Icon Setting</h2>

You can create a config file, `/src/lib/icon.config.json`.

The `IconSolid` and `IconOutline` components serve as a wrapper for svelte:component, allowing you to establish a global default setting or expand the capabilities of a component.

To create a default global icon setting, follow these steps:

<h3>Configuration File</h3>

Start by creating a configuration file named `/src/lib/icon.config.json` with the following structure:

CODE configuration-file.md

In this JSON file, you can define different configurations (config1 and config2 in this case) for your icons, specifying attributes like size, variation, and color.

<h3>Implementation</h3>

In your Svelte page file, make use of the configurations from the JSON file:

CODE codes/implementation.md

We import the configurations from the JSON file and assign them to config1 and config2. We then utilize the Icon component with the spread attributes '...config1' and ''...config2' to apply the respective configurations to each icon.

<h2>Custom Default Icon</h2>

If you wish to create a custom default icon, you can follow these steps:

Create a Svelte component named `src/lib/MyIcon.svelte`:

CODE codes/custom-default-icon.md

This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

<h3>Implementation in a Page</h3>

To use your custom default icon in a Svelte page, do the following:

CODE codes/implementation.md

Here, we import the `MyIcon` component and the `AngleLeftSolid` icon. By passing the `AngleLeftSolid` icon to the `icon` prop of MyIcon, you apply the default configuration to the icon.

<h2>Color</h2>

You can apply Tailwind CSS color directly to the icon component or its parent tag using the `class` prop.

CODE codes/color.md

<h2>CSS HEX Colors</h2>

Use the color attribute to change colors with HEX color code for Filled and Outlined components.

CODE codes/css-hex-colors.md

<h2>Dark mode</h2>

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

CODE codes/dark-mode.md

<h2>aria-label</h2>

All icons have aria-label. For example `BxAbacus` has `aria-label="bx abacus"`.
Use `ariaLabel` prop to modify the `aria-label` value.

CODE codes/aria-label.md

<h2>Unfocusable icon</h2>

If you want to make an icon unfocusable, add `tabindex="-1"`.

CODE codes/unfocusable-icon.md

<h2>Events for Svelte 4</h2>

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

<h2>Passing down other attributes</h2>

You can pass other attibutes as well.

CODE codes/passing-down-other-attributes.md

<h2>Using svelte:component</h2>

CODE codes/using-svelte-component.md

<h2>Using onMount</h2>

CODE codes/using-onmount.md

<h2>Import all</h2>

Use `import * as Icon from 'flowbite-svelte-icons`.

CODE codes/import-all.md

<h2>Other icons</h2>

- [Svelte-Icon-Sets](https://svelte-svg-icons.codewithshin.com/)

<h2>License</h2>

[Flowbite-Svelte-Icons License](https://github.com/themesberg/flowbite-svelte-icons/blob/main/LICENSE)

[Flowbite Icons License](https://github.com/themesberg/flowbite-icons/blob/main/LICENSE)

<h2>Original source</h2>

[themesberg/flowbite-icons](https://github.com/themesberg/flowbite-icons)

<h2>Technical information about this website</h2>

<ul class="m-4 list-disc p-4 text-left text-lg dark:text-gray-400">
  <li class="hover:text-red-700 hover:underline">
    <a
      href="{githuburl}"
      class="me-4 hover:underline md:me-6">{removeHyphensAndCapitalize(name)} : {version}</a
    >
  </li>
  <li class="hover:text-red-700 hover:underline">
    <a
      href="https://svelte.dev/"
      class="me-4 hover:underline md:me-6">Svelte: {svelteVersion}</a
    >
  </li>
  <li>
    <a href="https://kit.svelte.dev/docs/introduction" class="me-4 hover:underline md:me-6"
      >SvelteKit: {svelteKitVersion}</a
    >
  </li>
  <li class="hover:text-red-700 hover:underline">
    <a href="https://vitejs.dev/" class="hover:underline">Vite: {viteVersion}</a>
  </li>
  <li class="hover:text-red-700 hover:underline">
    <a href="https://tailwindcss.com/" class="hover:underline">TaiwindCSS: {tailwindcssVersion}</a>
  </li>
</ul>

