<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = '20';
  export let role: string = 'img';
  export let svgClass: string = 'text-gray-800 dark:text-white';
  let svgCls: string = twMerge(svgClass, $$props.class);
  export let ariaLabel = 'clone solid';
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
  <g fill="currentColor">
    <path
      d="M6 5a3 3 0 0 1 .183-1H5a1 1 0 0 0-.707.293l-4 4A1 1 0 0 0 0 9h6V5Zm0 9v-3H0v7a1.97 1.97 0 0 0 1.934 2h7.132A1.97 1.97 0 0 0 11 18H9.933A3.97 3.97 0 0 1 6 14Zm7-14a1 1 0 0 0-.707.293l-4 4A1 1 0 0 0 8 5h5V0Z"
    />
    <path
      d="M18.066 0H15v6a1 1 0 0 1-1 1H8v7a1.97 1.97 0 0 0 1.934 2h8.132A1.97 1.97 0 0 0 20 14V2a1.97 1.97 0 0 0-1.934-2Z"
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
