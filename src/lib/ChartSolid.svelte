<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = '20';
  export let role: string = 'img';
  export let svgClass: string = 'text-gray-800 dark:text-white';
  let svgCls: string = twMerge(svgClass, $$props.class);
  export let ariaLabel = 'chart solid';
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
  viewBox="0 0 18 16"
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
    <path d="M17 14H2V1a1 1 0 0 0-2 0v14a1 1 0 0 0 1 1h16a1 1 0 0 0 0-2Z" />
    <path
      d="M5 12a.999.999 0 0 0 .8-.4l2.432-3.244 2.213 1.476a1 1 0 0 0 1.412-.317l2.461-4.1 2.127 1.418a1 1 0 0 0 1.11-1.664l-3-2a1 1 0 0 0-1.412.317l-2.461 4.1-2.127-1.418A1 1 0 0 0 7.2 6.4l-3 4A1 1 0 0 0 5 12Z"
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
