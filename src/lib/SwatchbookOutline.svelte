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
    stroke-width={strokeWidth}
    d="M7.1 20A3.1 3.1 0 0 1 4 16.9v-12c0-.5.4-.9.9-.9h4.4c.5 0 1 .4 1 .9v12c0 1.7-1.5 3.1-3.2 3.1Zm0 0h12c.5 0 .9-.4.9-.9v-4.4c0-.5-.4-1-.9-1h-4.4l-.6.3-3.8 3.7-.1.2c-.9 1.4-1.6 1.8-3 2.1Zm0-3.6h0m8-10.9 3.1 3.2c.3.3.3.9 0 1.2l-8 8V9l3.6-3.6c.3-.3 1-.3 1.3 0Z"
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
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'swatchbook outline';
-->
