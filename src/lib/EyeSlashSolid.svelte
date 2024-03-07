<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface CtxType {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    role?: string;
    strokeLinecap?: "round" | "inherit" | "butt" | "square" | null | undefined;
    strokeLinejoin?: "round" | "inherit" | "miter" | "bevel" | null | undefined;
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

  export let size: "xs" | "sm" | "md" | "lg" | "xl" = ctx.size || 'md';
  export let role = ctx.role || 'img';

export let ariaLabel="eye slash solid" </script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  {...$$restProps}
  class={twMerge(
    'shrink-0',
    sizes[size],
    $$props.class
  )}
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
     <path fill="currentColor" d="m4 15.6 3-3V12a5 5 0 0 1 5-5h.5l1.8-1.7A9 9 0 0 0 12 5C6.6 5 2 10.3 2 12c.3 1.4 1 2.7 2 3.6Z"/>   <path fill="currentColor" d="m14.7 10.7 5-5a1 1 0 1 0-1.4-1.4l-5 5A3 3 0 0 0 9 12.7l.2.6-5 5a1 1 0 1 0 1.4 1.4l5-5 .6.2a3 3 0 0 0 3.6-3.6 3 3 0 0 0-.2-.6Z"/>   <path fill="currentColor" d="M19.8 8.6 17 11.5a5 5 0 0 1-5.6 5.5l-1.7 1.8 2.3.2c6.5 0 10-5.2 10-7 0-1.2-1.6-2.9-2.2-3.4Z"/>  
</svg>
