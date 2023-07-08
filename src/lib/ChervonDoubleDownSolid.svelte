<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let role: string = 'img';
  const sizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-20 h-20',
    xl: 'w-36 h-36'
  };
  export let ariaLabel = 'chervon double down solid';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  {...$$restProps}
  class={twMerge(sizes[size], $$props.class)}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 10 12"
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
      d="M5 12a.997.997 0 0 1-.705-.293L.305 7.711A.999.999 0 1 1 1.715 6.3L5 9.589l3.285-3.29a.997.997 0 0 1 1.69.71 1 1 0 0 1-.28.702l-3.99 3.996A.997.997 0 0 1 5 12Z"
    />
    <path
      d="M5 6.006a.997.997 0 0 1-.705-.293L.305 1.718A.999.999 0 1 1 1.715.305L5 3.595 8.285.305a.997.997 0 1 1 1.41 1.413l-3.99 3.995A.997.997 0 0 1 5 6.006Z"
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
