<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = '20';
  export let role: string = 'img';
  export let svgClass: string = 'text-gray-800 dark:text-white';
  let svgCls: string = twMerge(svgClass, $$props.class);
  export let ariaLabel = 'user circle solid';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill="currentColor"
  {...$$restProps}
  class={svgCls}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 20 20"
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
    fill="currentColor"
    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.948 8.948 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
  />
</svg>

<!--
  @component
  [Go to Document](https://shinokada.github.io/flowbite-svelte-icons/)

  ## Props
  @prop size = "20";
  @prop role = "img";
  @prop svgClass = "text-gray-800 dark:text-white";
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
