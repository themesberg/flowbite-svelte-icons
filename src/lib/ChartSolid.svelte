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
  export let ariaLabel = 'chart solid';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  {...$$restProps}
  class={twMerge('shrink-0', sizes[size], $$props.class)}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 18 16"
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
    <path d="M17 14H2V1a1 1 0 0 0-2 0v14a1 1 0 0 0 1 1h16a1 1 0 0 0 0-2Z" />
    <path
      d="M5 12a.999.999 0 0 0 .8-.4l2.432-3.244 2.213 1.476a1 1 0 0 0 1.412-.317l2.461-4.1 2.127 1.418a1 1 0 0 0 1.11-1.664l-3-2a1 1 0 0 0-1.412.317l-2.461 4.1-2.127-1.418A1 1 0 0 0 7.2 6.4l-3 4A1 1 0 0 0 5 12Z"
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
