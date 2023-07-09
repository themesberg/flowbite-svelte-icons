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
  export let ariaLabel = 'clone solid';
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
  <g fill="currentColor">
    <path
      d="M6 5a3 3 0 0 1 .183-1H5a1 1 0 0 0-.707.293l-4 4A1 1 0 0 0 0 9h6V5Zm0 9v-3H0v7a1.97 1.97 0 0 0 1.934 2h7.132A1.97 1.97 0 0 0 11 18H9.933A3.97 3.97 0 0 1 6 14Zm7-14a1 1 0 0 0-.707.293l-4 4A1 1 0 0 0 8 5h5V0Z"
    />
    <path
      d="M18.066 0H15v6a1 1 0 0 1-1 1H8v7a1.97 1.97 0 0 0 1.934 2h8.132A1.97 1.97 0 0 0 20 14V2a1.97 1.97 0 0 0-1.934-2Z"
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
