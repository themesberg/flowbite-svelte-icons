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

export let strokeLinecap: "round" | "inherit" | "butt" | "square" | null | undefined = ctx.strokeLinecap || "round";
export let strokeLinejoin:"round" | "inherit" | "miter" | "bevel" | null | undefined = ctx.strokeLinejoin || "round";
export let strokeWidth= ctx.strokeWidth || "2";
export let ariaLabel="volume up outline" </script>

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
  viewBox="0 0 20 18"
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
     <path stroke="currentColor" stroke-linecap="{strokeLinecap}" stroke-linejoin="{strokeLinejoin}" stroke-width="{strokeWidth}" d="M14.111 5.889a5.888 5.888 0 0 1 0 6.222M17.173 2.7A11.372 11.372 0 0 1 19 9a11.4 11.4 0 0 1-1.777 6.222M9.349 1.415 4 6H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2l5.349 4.585A1 1 0 0 0 11 15.826V2.174a1 1 0 0 0-1.651-.759Z"/>  
</svg>


<!--
  @component
  [Go to Document](https://shinokada.github.io/flowbite-svelte-icons/)

  ## Props
  @prop size = "20";
  @prop role = "img";
  @prop svgClass = "text-gray-800 dark:text-white";
  @prop strokeLinecap: "round" | "inherit" | "butt" | "square" | null | undefined = "round";
  @prop strokeLinejoin:"round" | "inherit" | "miter" | "bevel" | null | undefined = "round";
  @prop strokeWidth= "2";
  @prop ariaLabel = 'icon file name';
  - Use the `class` prop to overwrite `svgClass`.
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