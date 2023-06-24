<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = '20';
  export let role: string = 'img';
  export let svgClass: string = 'text-gray-800 dark:text-white';
  let svgCls: string = twMerge(svgClass, $$props.class);
  export let ariaLabel = 'arrows repeat 1 solid';
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
  viewBox="0 0 20 19"
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
  <g fill="currentColor">
    <path
      d="M17 9a1 1 0 0 0-1 1v3H1a1 1 0 0 0-.706 1.708l3 3a1 1 0 1 0 1.414-1.414L3.414 15H17a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm2.923-4.618a1 1 0 0 0-.217-1.09l-3-3a1 1 0 0 0-1.414 1.414L16.586 3H3a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V5h15a1 1 0 0 0 .923-.618Z"
    />
    <path
      d="M11 12a1 1 0 0 0 1-1V7a1 1 0 0 0-1.447-.895l-2 1a1 1 0 1 0 .894 1.79L10 8.618V11a1 1 0 0 0 1 1Z"
    />
  </g>
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
