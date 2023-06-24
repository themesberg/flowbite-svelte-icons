<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = '20';
  export let role: string = 'img';
  export let svgClass: string = 'text-gray-800 dark:text-white';
  let svgCls: string = twMerge(svgClass, $$props.class);
  export let strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | null | undefined = 'round';
  export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined = 'round';
  export let strokeWidth = '2';
  export let ariaLabel = 'reply all outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill="none"
  class={svgCls}
  {...$$restProps}
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
    d="M7.757 1.458 2.24 6.148a.998.998 0 0 0-.252.334.95.95 0 0 0 0 .802c.059.126.145.24.252.333l5.611 4.822m5.73-3.046v1.53a.86.86 0 0 1-.104.507.923.923 0 0 1-.38.369.992.992 0 0 1-1.04-.075L6.949 7.695a1.048 1.048 0 0 1-.273-.352.996.996 0 0 1 0-.855 1.04 1.04 0 0 1 .273-.353l5.108-4.028a.993.993 0 0 1 1.04-.073.925.925 0 0 1 .38.368.86.86 0 0 1 .104.506V4.52c3.312 0 6 2.823 6 6.306v1.26a.636.636 0 0 1-.11.46.7.7 0 0 1-.405.274.735.735 0 0 1-.495-.05.677.677 0 0 1-.335-.35 4.966 4.966 0 0 0-1.853-2.166 5.371 5.371 0 0 0-2.799-.858l-.003-.003Z"
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
