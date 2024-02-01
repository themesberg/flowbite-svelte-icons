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

export let ariaLabel="file paste solid" </script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
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
     <path fill="currentColor" fill-rule="evenodd" d="M6.5 3.9c0-.5.4-.9.9-.9h5.2c.5 0 .9.4.9.9h1.8c1 0 1.7.7 1.7 1.6V6h-1l-2.4.1a4 4 0 0 0-1 .3h-.8V4.7H8.2v1.7h-.8c-.5 0-.9.4-.9.8 0 .5.4.9.9.9h3.3L9.1 9.9a4 4 0 0 0-1 1.5L8 14v5c0 .7.2 1.4.5 2H4.7c-1 0-1.7-.8-1.7-1.7V5.5C3 4.7 3.8 4 4.8 4h1.7Z" clip-rule="evenodd"/>   <path fill="currentColor" fill-rule="evenodd" d="M14 8v4h-4l.5-.8L13 8.6a2 2 0 0 1 1-.6Zm2 0v4a2 2 0 0 1-2 2h-4v5c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3Z" clip-rule="evenodd"/>  
</svg>
