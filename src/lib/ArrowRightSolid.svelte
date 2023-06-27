<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = "20";
  export let role: string = "img";
  export let svgClass: string = "text-gray-800 dark:text-white";
  let svgCls: string = twMerge(
    svgClass,
    $$props.class
  )
export let ariaLabel="arrow right solid" </script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill="currentColor"
  class={svgCls}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 14 12"
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
    <path fill="currentColor" d="M13.923 6.382a1 1 0 0 0-.217-1.09l-4-4a1 1 0 1 0-1.414 1.414L10.586 5H1a1 1 0 0 0 0 2h9.586L8.293 9.293a1 1 0 1 0 1.414 1.414l4-4a.999.999 0 0 0 .216-.325Z"/> 
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