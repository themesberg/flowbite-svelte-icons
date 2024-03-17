<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface CtxType {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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

  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
  export let role = ctx.role || 'img';

  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'star half stroke outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  {...$$restProps}
  class={twMerge('shrink-0', sizes[size], $$props.class)}
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
  <path
    stroke="currentColor"
    stroke-width={strokeWidth}
    d="M12 4.392v14.832M8.476 9.38l-4.553.36c-.888.07-1.248 1.165-.572 1.737l3.47 2.934a.98.98 0 0 1 .322.98l-1.06 4.388c-.206.855.736 1.531 1.497 1.073l3.898-2.351c.32-.193.723-.193 1.044 0l3.898 2.351c.76.458 1.703-.218 1.497-1.073l-1.06-4.388a.982.982 0 0 1 .322-.98l3.47-2.934c.676-.572.316-1.667-.572-1.737l-4.553-.36a1 1 0 0 1-.845-.606l-1.754-4.165c-.342-.812-1.508-.812-1.85 0L9.321 8.774a1 1 0 0 1-.845.606Z"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
@prop export let role = ctx.role || 'img';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'star half stroke outline';
-->
