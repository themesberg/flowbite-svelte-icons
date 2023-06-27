<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = "20";
  export let role: string = "img";
  export let svgClass: string = "text-gray-800 dark:text-white";
  let svgCls: string = twMerge(
    svgClass,
    $$props.class
  )
export let ariaLabel="chervon double left solid" </script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill="currentColor"
  class={svgCls}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 12 10"
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
    <g fill="currentColor">     <path d="M4.995 10a1 1 0 0 1-.707-.293L.292 5.712a.999.999 0 0 1 0-1.412L4.288.305a1 1 0 1 1 1.413 1.412l-3.29 3.29 3.29 3.288A.999.999 0 0 1 4.995 10Z"/>     <path d="M10.989 10a1 1 0 0 1-.707-.293L6.286 5.712a.999.999 0 0 1 0-1.412L10.282.305a1 1 0 1 1 1.413 1.412l-3.29 3.29 3.29 3.288A.998.998 0 0 1 10.989 10Z"/>   </g> 
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