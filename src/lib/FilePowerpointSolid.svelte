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
  export let ariaLabel = 'file powerpoint solid';
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
  <g fill="currentColor">
    <path d="M4.5 11H4v1h.5a.5.5 0 0 0 0-1Z" />
    <path
      d="M19 7h-1V2a1.97 1.97 0 0 0-1.934-2H9v5a2 2 0 0 1-2 2H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 18 18h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1ZM4.5 14H4v1a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h1.5a2.5 2.5 0 1 1 0 5Zm6 0H10v1a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h1.5a2.5 2.5 0 0 1 0 5Zm6.5-3v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z"
    />
    <path
      d="M7 5V.13a2.96 2.96 0 0 0-1.293.749L2.879 3.707A2.98 2.98 0 0 0 2.13 5H7Zm3.5 6H10v1h.5a.5.5 0 0 0 0-1Z"
    />
  </g>
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
