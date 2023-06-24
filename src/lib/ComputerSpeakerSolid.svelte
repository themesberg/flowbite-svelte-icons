<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = '20';
  export let role: string = 'img';
  export let svgClass: string = 'text-gray-800 dark:text-white';
  let svgCls: string = twMerge(svgClass, $$props.class);
  export let ariaLabel = 'computer speaker solid';
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
  <g fill="currentColor">
    <path d="M14 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path
      d="M18 5h-8a2 2 0 0 0-2 2v11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2Zm-4 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 9a3 3 0 1 1 0-5.999A3 3 0 0 1 14 17Z"
    />
    <path
      d="M6 9H2V2h16v1c.65.005 1.289.17 1.86.48A.971.971 0 0 0 20 3V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4V9Z"
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
