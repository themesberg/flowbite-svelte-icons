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

export let strokeLinejoin:"round" | "inherit" | "miter" | "bevel" | null | undefined = ctx.strokeLinejoin || "round";
export let strokeWidth= ctx.strokeWidth || "2";
export let ariaLabel="window outline" </script>

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
   <path d="M1 7H19M2 1H18C18.5523 1 19 1.44772 19 2V16C19 16.5523 18.5523 17 18 17H2C1.44772 17 1 16.5523 1 16V2C1 1.44772 1.44772 1 2 1Z" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linejoin="{strokeLinejoin}"/> <path d="M4.5 5C5.05228 5 5.5 4.55228 5.5 4C5.5 3.44772 5.05228 3 4.5 3C3.94772 3 3.5 3.44772 3.5 4C3.5 4.55228 3.94772 5 4.5 5Z" fill="currentColor"/> <path d="M7.5 5C8.05228 5 8.5 4.55228 8.5 4C8.5 3.44772 8.05228 3 7.5 3C6.94772 3 6.5 3.44772 6.5 4C6.5 4.55228 6.94772 5 7.5 5Z" fill="currentColor"/> <path d="M10.5 5C11.0523 5 11.5 4.55228 11.5 4C11.5 3.44772 11.0523 3 10.5 3C9.94772 3 9.5 3.44772 9.5 4C9.5 4.55228 9.94772 5 10.5 5Z" fill="currentColor"/>  
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