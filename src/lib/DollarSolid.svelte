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

  export let ariaLabel = 'dollar solid';
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
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.1 2c.6 0 1 .4 1 1v1.3a6 6 0 0 1 3.7 2 1 1 0 1 1-1.6 1.3c-.5-.6-1.2-1-2-1.3a4.2 4.2 0 0 0-1.1-.1c-1.4 0-2.4.8-2.7 1.7-.1.6 0 1.2.6 1.9.5.6 1.3 1.2 2.3 1.4 1.3.3 2.5 1.1 3.3 2.1a4 4 0 0 1 1 3.6 4.3 4.3 0 0 1-3.5 3V21a1 1 0 1 1-2 0v-1a6 6 0 0 1-3.9-2 1 1 0 1 1 1.6-1.3c.5.7 1.2 1.1 2 1.3 2 .5 3.5-.4 3.8-1.6a2 2 0 0 0-.6-1.8 4.4 4.4 0 0 0-2.2-1.5 6.4 6.4 0 0 1-3.4-2 4 4 0 0 1-.9-3.7c.4-1.7 2-2.8 3.6-3.1V3c0-.6.5-1 1-1Z"
    clip-rule="evenodd"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.vercel.app/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'dollar solid';
-->
