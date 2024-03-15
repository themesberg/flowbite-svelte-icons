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

  interface Props{
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    role?: string;
    class?: string;
    ariaLabel?: string;
  }

  let { size = ctx.size || 'md', role, class: classname, ariaLabel=  "zoom in solid"  , ...restProps }: Props = $props();

</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  class={twMerge(
    'shrink-0',
    sizes[size],
    classname
  )}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
>
     <path fill="currentColor" fill-rule="evenodd" d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm9-3a1 1 0 1 0-2 0v2H7a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V7Z" clip-rule="evenodd"/>  
</svg>
