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

export let ariaLabel="arrow sort letters solid" </script>

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
  viewBox="0 0 18 18"
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
     <path fill="currentColor" d="M4.708.294a1 1 0 0 0-1.416 0l-3 3a1 1 0 0 0 1.415 1.413L3 3.414V17a1 1 0 1 0 2 0V3.414l1.293 1.293a1 1 0 0 0 1.414-1.414L4.708.294ZM11 2h3.586l-4.293 4.293A1 1 0 0 0 11 8h6a1 1 0 1 0 0-2h-3.586l4.293-4.293A1 1 0 0 0 17 0h-6a1 1 0 1 0 0 2Zm3.4 7.553a1.043 1.043 0 0 0-1.79 0l-3.5 7a1 1 0 0 0 1.79.894L11.618 16h3.764l.723 1.447a1 1 0 0 0 1.79-.894l-3.495-7ZM12.618 14l.882-1.764.882 1.764h-1.764Z"/>  
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