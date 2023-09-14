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

export let ariaLabel="file csv solid" </script>

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
     <g fill="currentColor">     <path d="M7 5V.13a2.96 2.96 0 0 0-1.293.749L2.879 3.707A2.96 2.96 0 0 0 2.13 5H7Z"/>     <path d="M19 7h-1.072A.989.989 0 0 0 18 6.639V2a1.97 1.97 0 0 0-1.933-2H9v5a2 2 0 0 1-2 2H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 18 18h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm-9 1.828.961.02a1 1 0 0 1-.042 2l-.946-.02a.337.337 0 0 0-.339.3.317.317 0 0 0 .283.344l.537.059a2.543 2.543 0 0 1 1.887 1.1 2.207 2.207 0 0 1 .174 1.941A2.151 2.151 0 0 1 10.235 16H9.108a1 1 0 0 1 0-2h1.127a.936.936 0 0 0 .389-.047.439.439 0 0 0 .027-.251.62.62 0 0 0-.413-.18l-.537-.059a2.306 2.306 0 0 1-2.059-2.5A2.374 2.374 0 0 1 10 8.828Zm-8 4.525v-1.706A2.65 2.65 0 0 1 4.647 9h1.018a1 1 0 0 1 0 2H4.647a.647.647 0 0 0-.647.647v1.706a.647.647 0 0 0 .647.647h1.018a1 1 0 0 1 0 2H4.647A2.65 2.65 0 0 1 2 13.353Zm15.951-3.043-1.557 4.773a1 1 0 0 1-.951.689h-.011a1 1 0 0 1-.946-.71l-1.443-4.772a1 1 0 0 1 1.914-.58l.522 1.727.57-1.747a1 1 0 1 1 1.9.62h.002Z"/>   </g>  
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