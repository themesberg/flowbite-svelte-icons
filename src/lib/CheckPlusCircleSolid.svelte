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

  export let ariaLabel = 'check plus circle solid';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
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
    fill="currentColor"
    d="M18.5 15.5H17V14a1 1 0 0 0-2 0v1.5h-1.5a1 1 0 0 0 0 2H15V19a1 1 0 0 0 2 0v-1.5h1.5a1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    d="m18.222 5.255-7.475 8.409a1 1 0 0 1-.718.336H10a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414l3.25 3.25 7.055-7.936a9.5 9.5 0 1 0-3.885 15.355A2.495 2.495 0 0 1 13.5 14a2.5 2.5 0 0 1 5 0c.035 0 .068.009.1.01a9.43 9.43 0 0 0-.381-8.755h.003Z"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.vercel.app/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'check plus circle solid';
-->
