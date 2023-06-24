<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = '20';
  export let role: string = 'img';
  export let svgClass: string = 'text-gray-800 dark:text-white';
  let svgCls: string = twMerge(svgClass, $$props.class);
  export let ariaLabel = 'compress solid';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill="currentColor"
  class={svgCls}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 18 18"
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
    d="M13 18a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-1 1ZM5 6H1a1 1 0 0 1 0-2h3V1a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Zm0 12a1 1 0 0 1-1-1v-3H1a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1ZM17 6h-4a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v3h3a1 1 0 1 1 0 2Z"
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
