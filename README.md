# Flowbite Svelte Icons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/flowbite-svelte-icons" alt="npm" ></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" ></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/flowbite-svelte-icons" alt="License" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/flowbite-svelte-icons.svg" alt="npm" ></a>
</div>

480+ SVG [Flowbite icons](https://github.com/themesberg/flowbite-icons) components for Svelte 3/4/5/Runes.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

## Docs

Please see the [Flowbite Svelte Icons documentation](https://flowbite-svelte-icons.codewithshin.com/) for more details on using the icons in your Svelte application.

## Icons

- [Outline Icons](https://flowbite-svelte-icons.codewithshin.com/outline)
- [Solid Icons](https://flowbite-svelte-icons.codewithshin.com/solid)

## Repo

[GitHub Repo](https://github.com/themesberg/flowbite-svelte-icons)

## Original source

[themesberg/flowbite-icons](https://github.com/themesberg/flowbite-icons)

## Requirements

### v1 
- Svelte 4/5
- TailwindCSS

### v2
- Svelte 5:Runes
- TailwindCSS

## Installation


### Svelte 4/5

```sh
pnpm i -D flowbite-svelte-icons
```

### Svelte 5 Runes

```sh
pnpm i -D flowbite-svelte-icons@2.0.0-next.x
```

Replace `2.0.0-next.x` with the latest `v2` version.
Replace `x` with the latest release at [GitHub](https://github.com/themesberg/flowbite-svelte-icons/releases).

Add the following to tailwind.config.cjs.

```js
const config = {
  content: [
       // more lines
        "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",
    ],
    // more lines
}  
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.codewithshin.com/)

## License

[Flowbite-Svelte-Icons License](https://github.com/themesberg/flowbite-svelte-icons/blob/main/LICENSE)

[Flowbite Icons License](https://github.com/themesberg/flowbite-icons/blob/main/LICENSE)