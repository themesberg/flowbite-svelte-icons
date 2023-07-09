<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let role: string = 'img';
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };
  export let ariaLabel = 'compress solid';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  {...$$restProps}
  class={twMerge('shrink-0', sizes[size], $$props.class)}
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
  <path
    fill="currentColor"
    d="M13 18a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-1 1ZM5 6H1a1 1 0 0 1 0-2h3V1a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Zm0 12a1 1 0 0 1-1-1v-3H1a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1ZM17 6h-4a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v3h3a1 1 0 1 1 0 2Z"
  />
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
