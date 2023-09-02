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
  export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined = 'round';
  export let strokeWidth = '2';
  export let ariaLabel = 'folder duplicate outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  {...$$restProps}
  class={twMerge('shrink-0', sizes[size], $$props.class)}
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
  <path
    stroke="currentColor"
    stroke-linejoin={strokeLinejoin}
    stroke-width={strokeWidth}
    d="M15 8H2a1 1 0 0 0-1 1v9M15 8a1 1 0 0 1 1 1m-1-1H9.943M15 8a1 1 0 0 1 1 1m0 0v9m0 0a1 1 0 0 1-1 1m1-1a1 1 0 0 1-1 1m0 0H2m0 0a1 1 0 0 1-1-1m1 1a1 1 0 0 1-1-1m0 0V5m0 0a1 1 0 0 1 1-1h4.443a1 1 0 0 1 .8.4l2.7 3.6M1 5v3h8.943M16 16h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.057l-2.7-3.6a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1v1"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.vercel.app/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
@prop export let role: string = 'img';
@prop export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined = 'round';
@prop export let strokeWidth = '2';
@prop export let ariaLabel = 'folder duplicate outline';
-->
