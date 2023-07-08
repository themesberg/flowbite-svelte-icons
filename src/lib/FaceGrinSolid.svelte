<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let role: string = 'img';
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-6',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };
  export let ariaLabel = 'face grin solid';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  {...$$restProps}
  class={twMerge(sizes[size], $$props.class)}
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
  <path
    fill="currentColor"
    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 16c-3.047 0-5.5-2.735-5.5-5a.5.5 0 0 1 1 0 11.7 11.7 0 0 0 4.5.583c2.548 0 4.221-.371 4.5-.65a.515.515 0 0 1 .026-.106.457.457 0 0 1 .481-.372.531.531 0 0 1 .493.545c0 2.265-2.453 5-5.5 5Z"
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
