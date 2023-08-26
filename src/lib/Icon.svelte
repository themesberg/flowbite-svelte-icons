<script lang="ts">
  import icons from './icons.js'
  import { twMerge } from 'tailwind-merge';

  export let name: keyof typeof icons;
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let role: string = 'img';
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };
  export let ariaLabel = name;

  $: displayIcon = icons[name]
  // if name includes 'outline', fill will be "none"; otherwise, fill will be "currentColor"
  $: fill = (name.includes('outline')) ? 'none' : 'currentColor';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {fill}
  {...$$restProps}
  class={twMerge('shrink-0', sizes[size], $$props.class)}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 {displayIcon.width} {displayIcon.height}"
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
  {@html displayIcon.svg}
</svg>

<!--
  @component
  [Go to Document](https://flowbite-svelte-icons.vercel.app/)

  ## Props
  @prop name;
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
