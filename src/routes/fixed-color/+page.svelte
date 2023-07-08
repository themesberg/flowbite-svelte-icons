<script>
  import * as Icon from '$lib/index.js';
  import DarkMode from 'flowbite-svelte/DarkMode.svelte';
  const random_tailwind_color = () => {
    const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
    const shades = ['300', '400', '500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomShade = shades[Math.floor(Math.random() * shades.length)];
    return `text-${randomColor}-${randomShade} inline m-1`;
  };
</script>

<DarkMode />
<Icon.ZoomInOutline size="md" class="inline m-1" />
<Icon.MessagesSolid size="md" class={random_tailwind_color()} />
<Icon.OpenBookSolid size="md" class={random_tailwind_color()} />
<Icon.PapperClipSolid size="md" class={random_tailwind_color()} />
<Icon.PauseSolid size="md" class={random_tailwind_color()} />
<Icon.PenNibOutline size="md" class={random_tailwind_color()} />
<Icon.StoreOutline size="md" class={random_tailwind_color()} />
<Icon.TableRowOutline size="md" class={random_tailwind_color()} />
<Icon.TicketSolid size="md" class={random_tailwind_color()} />
<Icon.TruckSolid size="md" class={random_tailwind_color()} />
<Icon.UserSettingsOutline size="md" class={random_tailwind_color()} />
<Icon.WandMagicSparklesOutline size="md" class={random_tailwind_color()} />
<Icon.WindowOutline size="md" class={random_tailwind_color()} />

<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M12.555 5.11696L15.383 7.94496M14 16V20M12 18H16M3 5.99996V9.99996M1 7.99996H5M16.01 1.66113L18.8384 4.48956L3.98915 19.3388L1.16072 16.5104L16.01 1.66113Z"
    stroke="#111928"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path d="M17 12H15V14H17V12Z" fill="#111928" />
  <path d="M11 1H9V3H11V1Z" fill="#111928" />
  <path d="M8 3H6V5H8V3Z" fill="#111928" />
  <path d="M5 1H3V3H5V1Z" fill="#111928" />
  <path d="M20 9H18V11H20V9Z" fill="#111928" />
  <path d="M20 14H18V16H20V14Z" fill="#111928" />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  class="text-blue-300 inline m-1"
  role="img"
  aria-label="ticket solid"
  viewBox="0 0 20 14"
>
  <path
    style="fill-color: var(--tw-text-blue-300);"
    d="M18 14H2a2 2 0 0 1-2-2V9.5a1 1 0 0 1 1-1 1.5 1.5 0 0 0 0-3 1 1 0 0 1-1-1V2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.5a1 1 0 0 1-1 1 1.5 1.5 0 0 0 0 3 1 1 0 0 1 1 1V12a2 2 0 0 1-2 2Z"
  />
</svg>
