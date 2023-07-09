<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let role: string = 'img';
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };
  export let strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | null | undefined = 'round';
  export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined = 'round';
  export let strokeWidth = '2';
  export let ariaLabel = 'wand magic sparkles outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  {...$$restProps}
  class={twMerge('shrink-0', sizes[size], $$props.class)}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 20 21"
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
    d="M12.555 5.11696L15.383 7.94496M14 16V20M12 18H16M3 5.99996V9.99996M1 7.99996H5M16.01 1.66113L18.8384 4.48956L3.98915 19.3388L1.16072 16.5104L16.01 1.66113Z"
    stroke="currentColor"
    stroke-width={strokeWidth}
    stroke-linecap={strokeLinecap}
    stroke-linejoin={strokeLinejoin}
  /> <path d="M17 12H15V14H17V12Z" fill="currentColor" />
  <path d="M11 1H9V3H11V1Z" fill="currentColor" /> <path d="M8 3H6V5H8V3Z" fill="currentColor" />
  <path d="M5 1H3V3H5V1Z" fill="currentColor" /> <path d="M20 9H18V11H20V9Z" fill="currentColor" />
  <path d="M20 14H18V16H20V14Z" fill="currentColor" />
</svg>

<!--
  @component
  [Go to Document](https://shinokada.github.io/flowbite-svelte-icons/)

  ## Props
  @prop size = "20";
  @prop role = "img";
  @prop svgClass = "text-gray-800 dark:text-white";
  @prop strokeLinecap: "round" | "inherit" | "butt" | "square" | null | undefined = "round";
  @prop strokeLinejoin:"round" | "inherit" | "miter" | "bevel" | null | undefined = "round";
  @prop strokeWidth= "2";
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
