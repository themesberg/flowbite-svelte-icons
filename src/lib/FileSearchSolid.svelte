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

export let ariaLabel="file search solid" </script>

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
     <path fill="currentColor" fill-rule="evenodd" d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 5c.5 0 1 0 1.3-.3l2 2a1 1 0 0 0 1.4-1.4l-1.8-1.8c.4-.6.6-1.3.6-2a3.5 3.5 0 1 0-3.5 3.5Z" clip-rule="evenodd"/>  
</svg>
