<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = "20";
  export let role: string = "img";
  export let svgClass: string = "text-gray-800 dark:text-white";
  let svgCls: string = twMerge(
    svgClass,
    $$props.class
  )
export let ariaLabel="link solid" </script>

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
    <g fill="currentColor">     <path d="m6.929 14.72-.473.473a2.58 2.58 0 0 1-3.65-3.65L6.45 7.902a2.644 2.644 0 0 1 3.65 0 1.025 1.025 0 0 0 1.45-1.449 4.631 4.631 0 0 0-6.55 0l-3.642 3.642a4.631 4.631 0 1 0 6.549 6.55l.472-.471a1.025 1.025 0 1 0-1.449-1.45v-.003Z"/>     <path d="M16.647 1.353a4.637 4.637 0 0 0-6.548 0l-.726.726a1.025 1.025 0 1 0 1.449 1.447l.727-.727a2.581 2.581 0 0 1 3.649 3.65l-3.642 3.642a2.645 2.645 0 0 1-3.65 0 1.025 1.025 0 1 0-1.45 1.45 4.631 4.631 0 0 0 6.55 0l3.641-3.643a4.634 4.634 0 0 0 0-6.545Z"/>   </g> 
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