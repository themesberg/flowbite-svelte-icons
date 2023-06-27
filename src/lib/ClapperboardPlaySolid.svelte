<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = '20';
  export let role: string = 'img';
  export let svgClass: string = 'text-gray-800 dark:text-white';
  let svgCls: string = twMerge(svgClass, $$props.class);
  export let ariaLabel = 'clapperboard play solid';
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
    d="M2 2h4L3.75 5h2.5L8.5 2h1.715l-2.25 3h2.5l2.25-3h1.715l-2.25 3h2.5l2.25-3H18v3h2V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v4h2V2ZM0 7v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7H0Zm12.76 6.458-4.818 3.43A.593.593 0 0 1 7 16.429V9.571a.593.593 0 0 1 .942-.459l4.818 3.43a.557.557 0 0 1 0 .916Z"
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
