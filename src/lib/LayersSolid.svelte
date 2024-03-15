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

  let { size = ctx.size || 'md', role, class: classname, ariaLabel=  "layers solid"  , ...restProps }: Props = $props();

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
     <path fill="currentColor" fill-rule="evenodd" d="M5.005 10.19a1 1 0 0 1 1 1v.233l5.998 3.464L18 11.423v-.232a1 1 0 1 1 2 0V12a1 1 0 0 1-.5.866l-6.997 4.042a1 1 0 0 1-1 0l-6.998-4.042a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1ZM5 15.15a1 1 0 0 1 1 1v.232l5.997 3.464 5.998-3.464v-.232a1 1 0 1 1 2 0v.81a1 1 0 0 1-.5.865l-6.998 4.042a1 1 0 0 1-1 0L4.5 17.824a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>   <path fill="currentColor" d="M12.503 2.134a1 1 0 0 0-1 0L4.501 6.17A1 1 0 0 0 4.5 7.902l7.002 4.047a1 1 0 0 0 1 0l6.998-4.04a1 1 0 0 0 0-1.732l-6.997-4.042Z"/>  
</svg>
