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
  export let ariaLabel = 'building outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  {...$$restProps}
  class={twMerge('shrink-0', sizes[size], $$props.class)}
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
  <path
    stroke="currentColor"
    stroke-linecap={strokeLinecap}
    stroke-linejoin={strokeLinejoin}
    stroke-width={strokeWidth}
    d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.vercel.app/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
@prop export let role: string = 'img';
@prop export let strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | null | undefined = 'round';
@prop export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined = 'round';
@prop export let strokeWidth = '2';
@prop export let ariaLabel = 'building outline';
-->
