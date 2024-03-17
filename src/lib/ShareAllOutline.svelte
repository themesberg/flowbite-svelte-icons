<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface CtxType {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    role?: string;
  }

  const ctx: CtxType = getContext('iconCtx') ?? {};
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
  export let role = ctx.role || 'img';

  export let strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | null | undefined =
    ctx.strokeLinecap || 'round';
  export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined =
    ctx.strokeLinejoin || 'round';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'share all outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  {...$$restProps}
  class={twMerge('shrink-0', sizes[size], $$props.class)}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
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
    d="m15.141 6 5.518 4.95a1.05 1.05 0 0 1 0 1.549l-5.612 5.088m-6.154-3.214v1.615a.95.95 0 0 0 1.525.845l5.108-4.251a1.1 1.1 0 0 0 0-1.646l-5.108-4.251a.95.95 0 0 0-1.525.846v1.7c-3.312 0-6 2.979-6 6.654v1.329a.7.7 0 0 0 1.344.353 5.174 5.174 0 0 1 4.652-3.191l.004-.003Z"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
@prop export let role = ctx.role || 'img';
@prop export let strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | null | undefined =
    ctx.strokeLinecap || 'round';
@prop export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined =
    ctx.strokeLinejoin || 'round';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'share all outline';
-->
