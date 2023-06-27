<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = "20";
  export let role: string = "img";
  export let svgClass: string = "text-gray-800 dark:text-white";
  let svgCls: string = twMerge(
    svgClass,
    $$props.class
  )
export let ariaLabel="bold solid" </script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill="currentColor"
  class={svgCls}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 14 16"
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
    <path fill="currentColor" d="M11.011 7.279A4.448 4.448 0 0 0 12 4.5 4.5 4.5 0 0 0 7.5 0H1a1 1 0 0 0 0 2h1v12H1a1 1 0 0 0 0 2h8.5a4.49 4.49 0 0 0 1.511-8.721ZM10 4.5A2.5 2.5 0 0 1 7.5 7H4V2h3.5A2.5 2.5 0 0 1 10 4.5ZM9.5 14H4V9h5.5a2.5 2.5 0 0 1 0 5Z"/> 
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