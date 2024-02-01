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

  export let ariaLabel = 'scale balanced solid';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
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
    d="M12 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 .5a4 4 0 0 0-1.1.7 6 6 0 0 0-1 1c-.2.3-.3.5-.6.6A3 3 0 0 1 5 7a1 1 0 1 0 0 2h1v.3l-1.9 4.2v.1A1.8 1.8 0 0 0 5.8 16h2.4a1.8 1.8 0 0 0 1.7-2.5L8 9.3V8a4.7 4.7 0 0 0 .7-.7c.1-.3.3-.4.5-.6l.2-.2c.4.6 1 1 1.6 1.3V20H5.5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H13V7.8a3 3 0 0 0 1.6-1.4l.5.3.9.8v1.8l-1.9 4.2v.1a1.8 1.8 0 0 0 1.7 2.4h2.4a1.8 1.8 0 0 0 1.7-2.5L18 9.3V9l1 .1a1 1 0 1 0 0-2c-.5 0-.7-.1-.9-.2a3 3 0 0 1-.7-.6L16.3 5l-1.4-.7a3 3 0 0 0-5.9 0Z"
    clip-rule="evenodd"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.vercel.app/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'scale balanced solid';
-->
