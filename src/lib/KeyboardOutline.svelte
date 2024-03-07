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

  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'keyboard outline';
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
    stroke-linecap="square"
    stroke-width={strokeWidth}
    d="M8 15h7v0h0-7Zm12-9H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1ZM6 9h0v0h0v0Zm0 3h0v0h0v0Zm0 3h0v0h0v0Zm3-6h0v0h0v0Zm0 3h0v0h0v0Zm3-3h0v0h0v0Zm0 3h0v0h0v0Zm3 0h0v0h0v0Zm3 0h0v0h0v0Zm0 3h0v0h0v0Zm-3-6h0v0h0v0Zm3 0h0v0h0v0Z"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
@prop export let role = ctx.role || 'img';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'keyboard outline';
-->
