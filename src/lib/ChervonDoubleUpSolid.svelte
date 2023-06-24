<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: string = '20';
  export let role: string = 'img';
  export let svgClass: string = 'text-gray-800 dark:text-white';
  let svgCls: string = twMerge(svgClass, $$props.class);
  export let ariaLabel = 'chervon double up solid';
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
  viewBox="0 0 10 12"
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
      d="M9.001 5.994a.999.999 0 0 1-.706-.293l-3.289-3.29-3.289 3.29A.999.999 0 1 1 .305 4.288L4.3.292a.999.999 0 0 1 1.412 0l3.996 3.996A1 1 0 0 1 9 5.994Z"
    />
    <path
      d="M9.001 11.988a.998.998 0 0 1-.706-.293l-3.289-3.29-3.289 3.29a1 1 0 1 1-1.412-1.413L4.3 6.286a.999.999 0 0 1 1.412 0l3.996 3.996A.999.999 0 0 1 9 11.988Z"
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
