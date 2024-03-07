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

  export let ariaLabel = 'list music solid';
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
    d="M17.3 4a1 1 0 0 0-.9.2 1 1 0 0 0-.4.8v8.6c-.6-.3-1.3-.5-2-.5-2 0-4 1.4-4 3.5 0 2 2 3.4 4 3.4s4-1.3 4-3.4V6.8a3 3 0 0 1 1 2.3c0 .5.4 1 1 1s1-.5 1-1a5 5 0 0 0-1.9-4 6.4 6.4 0 0 0-1.8-1ZM4 5a1 1 0 0 0-1 1c0 .6.4 1 1 1h9c.6 0 1-.4 1-1 0-.5-.4-1-1-1H4Zm0 4a1 1 0 0 0-1 1c0 .6.4 1 1 1h9c.6 0 1-.4 1-1 0-.5-.4-1-1-1H4Zm0 4.1a1 1 0 0 0-1 1c0 .6.4 1 1 1h4c.6 0 1-.4 1-1 0-.5-.4-1-1-1H4Z"
    clip-rule="evenodd"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.vercel.app/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'list music solid';
-->
