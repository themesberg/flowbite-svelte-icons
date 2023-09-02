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
  export let ariaLabel = 'arrow down to braket solid';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  {...$$restProps}
  class={twMerge('shrink-0', sizes[size], $$props.class)}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 16 18"
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
      d="M7.292 12.706a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-1.414-1.414L9 9.586V1a1 1 0 0 0-2 0v8.586L4.707 7.293a1 1 0 1 0-1.414 1.414l3.999 3.999Z"
    />
    <path
      d="M15 11a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 1 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1Z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.vercel.app/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
@prop export let role: string = 'img';
@prop export let ariaLabel = 'arrow down to braket solid';
-->
