<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = '20';
  export let role: string = 'img';
  export let svgClass: string = 'text-gray-800 dark:text-white';
  let svgCls: string = twMerge(svgClass, $$props.class);
  export let strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | null | undefined = 'round';
  export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined = 'round';
  export let strokeWidth = '2';
  export let ariaLabel = 'share all outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill="none"
  {...$$restProps}
  class={svgCls}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 21 14"
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  <path
    stroke="currentColor"
    stroke-linecap={strokeLinecap}
    stroke-linejoin={strokeLinejoin}
    stroke-width={strokeWidth}
    d="m13.717 1.458 5.518 4.69a.998.998 0 0 1 .252.334.951.951 0 0 1 0 .802.998.998 0 0 1-.252.333l-5.612 4.822m-5.73-3.046v1.53a.86.86 0 0 0 .105.506.925.925 0 0 0 .38.37.994.994 0 0 0 1.04-.075l5.108-4.029c.116-.097.21-.218.273-.352a.997.997 0 0 0 0-.855 1.048 1.048 0 0 0-.273-.353L9.418 2.107a.994.994 0 0 0-1.04-.074.925.925 0 0 0-.38.369.86.86 0 0 0-.105.506V4.52c-3.312 0-6 2.823-6 6.306v1.26a.636.636 0 0 0 .112.457.7.7 0 0 0 .404.273c.165.041.34.023.493-.05a.678.678 0 0 0 .335-.346 4.966 4.966 0 0 1 1.853-2.166 5.371 5.371 0 0 1 2.799-.858l.004-.003Z"
  />
</svg>

<!--
  @component
  [Go to Document](https://shinokada.github.io/flowbite-svelte-icons/)

  ## Props
  @prop size = "20";
  @prop role = "img";
  @prop svgClass = "text-gray-800 dark:text-white";
  @prop strokeLinecap = "round";
  @prop strokeLinejoin = "round";
  @prop strokeWidth= "2";
  @prop ariaLabel = 'icon file name';
  - Use the `class` prop to overwrite `svgClass`.
  ## Event
  - on:click
  - on:keydown
  - on:keyup
  - on:focus
  - on:blur
  - on:mouseenter
  - on:mouseleave
  - on:mouseover
  - on:mouseout
-->
