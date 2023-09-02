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
  export let ariaLabel = 'underline solid';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  {...$$restProps}
  class={twMerge('shrink-0', sizes[size], $$props.class)}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 16 20"
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
    <path
      d="M7.5 16A5.506 5.506 0 0 1 2 10.5V1a1 1 0 0 1 2 0v9.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 1 2 0v9.5A5.506 5.506 0 0 1 7.5 16Z"
    />
    <path
      d="M5 2H1a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Zm9 0h-4a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2Zm1 18H1a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.vercel.app/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
@prop export let role: string = 'img';
@prop export let ariaLabel = 'underline solid';
-->
