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

export let ariaLabel="share all solid" </script>

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
  viewBox="0 0 21 15"
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
     <g fill="currentColor">     <path d="M14.922 7.759a1.56 1.56 0 0 0-.551-1.207L9.264 2.3a1.35 1.35 0 0 0-1.473-.2 1.542 1.542 0 0 0-.872 1.427v1.221a6.922 6.922 0 0 0-6 7.134v1.329A1.225 1.225 0 0 0 2.143 14.5a1.187 1.187 0 0 0 1.08-.731 4.72 4.72 0 0 1 3.7-2.867v1.085a1.546 1.546 0 0 0 .872 1.428 1.355 1.355 0 0 0 1.472-.2l5.108-4.251a1.56 1.56 0 0 0 .547-1.205Z"/>     <path d="m19.428 6.205-5.517-4.949a1 1 0 1 0-1.336 1.488l5.517 5.014-5.611 5.088a1 1 0 1 0 1.344 1.482l5.611-5.088a2.05 2.05 0 0 0-.008-3.035Z"/>   </g>  
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