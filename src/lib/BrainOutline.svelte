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

  interface Props{
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    role?: string;
    class?: string;
    ariaLabel?: string;
  }
  let { size = ctx.size || 'md', role, class: classname, ariaLabel =  "brain outline"  , ...restProps }: Props = $props();

</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
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
     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18.5A2.493 2.493 0 0 1 7.51 20H7.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .92-3.182 2.477 2.477 0 0 1 1.876-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 12 5.5m0 13v-13m0 13a2.493 2.493 0 0 0 4.49 1.5h.01a2.468 2.468 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.477 2.477 0 0 0-1.875-3.344A2.5 2.5 0 0 0 14.5 3 2.5 2.5 0 0 0 12 5.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M20 10.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"/>  
</svg>
