<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = '20';
  export let role: string = 'img';
  export let svgClass: string = 'text-gray-800 dark:text-white';
  let svgCls: string = twMerge(svgClass, $$props.class);
  export let ariaLabel = 'euro solid';
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
  viewBox="0 0 15 18"
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
    d="M12.434 15.092A4.917 4.917 0 0 1 9.615 16a5.809 5.809 0 0 1-5.2-4h5.815a1 1 0 0 0 0-2H3.912a7.609 7.609 0 0 1 0-2h6.318a1 1 0 1 0 0-2H4.411a5.809 5.809 0 0 1 5.2-4 4.92 4.92 0 0 1 2.819.911 1 1 0 1 0 1.132-1.648A6.97 6.97 0 0 0 9.615 0C6.24 0 3.369 2.51 2.3 6H1a1 1 0 0 0 0 2h.9c-.031.329-.051.662-.051 1 0 .338.02.671.051 1H1a1 1 0 0 0 0 2h1.3c1.07 3.49 3.942 6 7.316 6a6.965 6.965 0 0 0 3.951-1.26 1 1 0 1 0-1.133-1.648Z"
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
<!--
@component
[Go to Document](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@prop size = '24';
@prop role = 'img';
@prop color = 'currentColor';
@prop ariaLabel = 'icon name';
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
