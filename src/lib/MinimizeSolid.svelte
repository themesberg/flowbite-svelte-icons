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

export let ariaLabel="minimize solid" </script>

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
  viewBox="0 0 20 20"
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
     <path fill="currentColor" d="M7 1a1 1 0 0 0-1 1v2.586L2.707 1.293a1 1 0 0 0-1.414 1.414L4.586 6H2a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Zm0 11H2a1 1 0 1 0 0 2h2.586l-3.293 3.293a1 1 0 1 0 1.414 1.414L6 15.414V18a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1Zm11-6h-2.586l3.293-3.293a1 1 0 1 0-1.414-1.414L14 4.586V2a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2Zm1 7a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-2.586l3.293 3.293a1 1 0 0 0 1.414-1.414L15.414 14H18a1 1 0 0 0 1-1Z"/>  
</svg>


<!--
  @component
  [Go to Document](https://shinokada.github.io/flowbite-svelte-icons/)

  ## Props
  @prop size =  "xs" | "sm" | "md" | "lg" | "xl" = "md";
  @prop role = "img";
  @prop ariaLabel = 'icon file name';
  ## Event
  - on:click
  - on:keydown
  - on:keyup
  - on:focus
  - on:blur
  - on:mouseenter
  - on:mouseleave
  - on:mouseover
  - on:mouseout
-->