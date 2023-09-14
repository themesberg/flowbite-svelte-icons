<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface CtxType {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    role?: string;
    strokeLinecap?: 'round' | 'inherit' | 'butt' | 'square' | null | undefined;
    strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined;
    strokeWidth?: string;
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
  export let ariaLabel = 'swatchbook outline';
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
    stroke-linecap={strokeLinecap}
    stroke-linejoin={strokeLinejoin}
    stroke-width={strokeWidth}
    d="M8 15.5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v13.5A3.5 3.5 0 0 0 4.5 19M8 15.5A3.5 3.5 0 0 1 4.5 19M8 15.5V6.55l4.186-4.182a1 1 0 0 1 1.414 0L17.132 5.9a1 1 0 0 1 0 1.418l-9.345 9.345M8 15.5a3.48 3.48 0 0 1-.213 1.163M4.5 19a3.49 3.49 0 0 0 3.287-2.337M4.5 19H18a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5.55l-4.663 4.663"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.vercel.app/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
@prop export let role = ctx.role || 'img';
@prop export let strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | null | undefined =
    ctx.strokeLinecap || 'round';
@prop export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined =
    ctx.strokeLinejoin || 'round';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'swatchbook outline';
-->
