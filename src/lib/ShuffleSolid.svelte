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

export let ariaLabel="shuffle solid" </script>

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
     <path fill="currentColor" fill-rule="evenodd" d="M16.3 3.3a1 1 0 0 1 1.4 0l3 3c.4.4.4 1 0 1.4l-3 3a1 1 0 0 1-1.4-1.4L17.6 8h-2l-1.3 1.7a1 1 0 1 1-1.6-1.1l1.5-2.2c.2-.2.5-.4.8-.4h2.6l-1.3-1.3a1 1 0 0 1 0-1.4ZM3 7c0-.6.4-1 1-1h4c.3 0 .6.2.8.4l6.7 9.6h2l-1.2-1.3a1 1 0 0 1 1.4-1.4l3 3c.4.4.4 1 0 1.4l-3 3a1 1 0 0 1-1.4-1.4l1.3-1.3H15a1 1 0 0 1-.8-.4L7.5 8H4a1 1 0 0 1-1-1Zm7.2 7c.4.2.5.9.2 1.3l-1.6 2.3a1 1 0 0 1-.8.4H4a1 1 0 1 1 0-2h3.5l1.3-1.8a1 1 0 0 1 1.4-.3Z" clip-rule="evenodd"/>  
</svg>
