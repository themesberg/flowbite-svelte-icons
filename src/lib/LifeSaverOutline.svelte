<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface CtxType {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
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

  export let size: "xs" | "sm" | "md" | "lg" | "xl" = ctx.size || 'md';
  export let role = ctx.role || 'img';

export let strokeLinecap: "round" | "inherit" | "butt" | "square" | null | undefined = ctx.strokeLinecap || "round";
export let strokeLinejoin:"round" | "inherit" | "miter" | "bevel" | null | undefined = ctx.strokeLinejoin || "round";
export let strokeWidth= ctx.strokeWidth || "2";
export let ariaLabel="life saver outline" </script>

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
     <path stroke="currentColor" stroke-linecap="{strokeLinecap}" stroke-linejoin="{strokeLinejoin}" stroke-width="{strokeWidth}" d="m13.5 8.3 3.8-3.9a1.5 1.5 0 0 1 2.1 0l.2.2a1.5 1.5 0 0 1 0 2l-3.9 4a4 4 0 0 0-2.2-2.3Zm0 0a4 4 0 0 1 2.2 2.2L19.4 7a9 9 0 0 1 0 10.2l-3.7-3.6m-2.2-5.2L17 4.6a9 9 0 0 0-10 0l3.6 3.7a4 4 0 0 0-2.2 2.2L4.6 7a9 9 0 0 0 0 10.2l3.7-3.6a4 4 0 0 0 2.2 2.2L7 19.4a9 9 0 0 0 10.2 0l-3.6-3.7a4 4 0 0 0 2.2-2.2m0 0 3.9 3.8a1.5 1.5 0 0 1 0 2.1l-.2.2a1.5 1.5 0 0 1-2 0l-4-3.9a4 4 0 0 0 2.3-2.2ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-7.7 1.5-3.9 3.8a1.5 1.5 0 0 0 0 2.1l.2.2a1.5 1.5 0 0 0 2 0l4-3.9a4 4 0 0 1-2.3-2.2Zm2.2-5.2L6.7 4.4a1.5 1.5 0 0 0-2.1 0l-.2.2a1.5 1.5 0 0 0 0 2l3.9 4a4 4 0 0 1 2.2-2.3Z"/>  
</svg>
