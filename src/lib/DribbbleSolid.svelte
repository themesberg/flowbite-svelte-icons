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

  export let ariaLabel = 'dribbble solid';
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
    d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.6 4.6c1.2 1.5 2 3.4 2 5.3-2-.4-4-.4-6-.2l-.2-.5-.6-1.2c1.9-.7 3.5-1.9 4.8-3.4ZM10 3.7l2-.2c2 0 4.1.7 5.7 2.1a9.6 9.6 0 0 1-4.5 3.1c-1-1.7-2-3.4-3.2-5Zm-6.4 6.6a8.6 8.6 0 0 1 4.8-6 54 54 0 0 1 3.1 5 32 32 0 0 1-7.9 1Zm2 7.4a8.5 8.5 0 0 1-2-5.7v-.2c3 0 5.9-.5 8.7-1.3L13 12h-.3a14.5 14.5 0 0 0-7 5.7Zm6.4 2.9c-1.9 0-3.7-.7-5.2-1.8a11.7 11.7 0 0 1 6.7-5.4c.8 2.1 1.4 4.3 1.8 6.5-1 .4-2.2.7-3.3.7Zm4.8-1.5c-.4-2-1-4.1-1.7-6.1 1.8-.3 3.6-.1 5.3.4a8.6 8.6 0 0 1-3.6 5.7Z"
    clip-rule="evenodd"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'dribbble solid';
-->
