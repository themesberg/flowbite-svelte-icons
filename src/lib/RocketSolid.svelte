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

export let ariaLabel="rocket solid" </script>

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
     <path fill="currentColor" fill-rule="evenodd" d="M20.3 3.7c.2.2.4.4.4.7.3 1.8.7 5.2-.9 6.8A75.2 75.2 0 0 1 8.6 18a1 1 0 0 1-.6-.3l-.8-.9-1-.8a1 1 0 0 1 0-1.2c1-2.2 4.8-8.9 6.6-10.6 1.6-1.6 5-1.2 6.8-1l.7.5ZM5.4 7.6l4-.4-2.7 4.5-2.8-.3a1 1 0 0 1-.6-1.7l2.1-2.1Zm11.4 7-.4 4-2 2.1a1 1 0 0 1-1.8-.6l-.4-2.8 4.6-2.7Zm.8-6.2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" clip-rule="evenodd"/>  
</svg>
