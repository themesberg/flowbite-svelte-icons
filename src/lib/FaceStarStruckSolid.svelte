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

  export let ariaLabel = 'face star struck solid';
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
    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm.524 5.61a.5.5 0 0 1 .4-.34l1.122-.164.5-1.016a.521.521 0 0 1 .9 0l.5 1.016 1.122.164a.5.5 0 0 1 .277.853l-.812.791.192 1.116a.5.5 0 0 1-.725.528l-1-.528-1 .528a.5.5 0 0 1-.725-.528l.192-1.116-.812-.791a.5.5 0 0 1-.131-.513Zm-6 0a.5.5 0 0 1 .4-.34l1.126-.164.5-1.016a.521.521 0 0 1 .9 0l.5 1.016 1.122.164a.5.5 0 0 1 .277.853l-.812.791.192 1.116A.5.5 0 0 1 8 9.058L7 8.53l-1 .528a.5.5 0 0 1-.725-.528l.192-1.116-.812-.791a.5.5 0 0 1-.131-.513ZM10 16c-3.047 0-5.5-2.735-5.5-5h1a11.7 11.7 0 0 0 4.5.583c2.614 0 4.308-.391 4.524-.673l.976.09c0 2.265-2.453 5-5.5 5Z"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.vercel.app/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'face star struck solid';
-->
