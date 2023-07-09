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
  export let ariaLabel = 'ruler combined solid';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  {...$$restProps}
  class={twMerge('shrink-0', sizes[size], $$props.class)}
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
    d="M18 12h-1v4a1 1 0 0 1-2 0v-4h-1v4a1 1 0 0 1-2 0v-4h-1v4a1 1 0 0 1-2 0v-4H8v-1H4a1 1 0 0 1 0-2h4V7.961A.977.977 0 0 1 7.8 8H4a1 1 0 0 1 0-2h3.805c.068.006.135.02.2.039V5H4a1 1 0 0 1 0-2h4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v17a1 1 0 0 0 1 1h17a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2ZM4.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
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
