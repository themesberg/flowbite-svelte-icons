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

export let ariaLabel="ordored list solid" </script>

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
     <path fill="currentColor" fill-rule="evenodd" d="M6.5 3.1c.3.2.5.6.5.9v5h1a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2h1V5.6l-.6.3A1 1 0 0 1 3.6 4l2-1a1 1 0 0 1 1 0ZM11 6c0-.6.4-1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm0 6c0-.6.4-1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm-4.6 3A1 1 0 0 0 5 16a1 1 0 0 1-2 0 3 3 0 1 1 5 2.3L7 19h2a1 1 0 1 1 0 2H4a1 1 0 0 1-.6-1.8l3.3-2.5a1 1 0 0 0-.3-1.6Zm4.6 3c0-.6.4-1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>  
</svg>
