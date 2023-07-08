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
  export let ariaLabel = 'star half solid';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  {...$$restProps}
  class={twMerge(sizes[size], $$props.class)}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 12 20"
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
    d="M11.707.707A1 1 0 0 0 11 .414a1.6 1.6 0 0 0-1.409.816l-2.525 4.6-5.687.744A1.576 1.576 0 0 0 .065 7.667a1.485 1.485 0 0 0 .456 1.566l4.05 3.552-.95 4.988a1.5 1.5 0 0 0 .567 1.473 1.624 1.624 0 0 0 1.703.181l5.194-2.458a1 1 0 0 0 .915-1V1.414a1 1 0 0 0-.293-.707Z"
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
