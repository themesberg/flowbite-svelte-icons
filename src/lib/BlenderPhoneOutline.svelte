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
  export let strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | null | undefined = 'round';
  export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined = 'round';
  export let strokeWidth = '2';
  export let ariaLabel = 'blender phone outline';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  {...$$restProps}
  class={twMerge('shrink-0', sizes[size], $$props.class)}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 22 19"
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
    stroke="currentColor"
    stroke-linecap={strokeLinecap}
    stroke-linejoin={strokeLinejoin}
    stroke-width={strokeWidth}
    d="M19.287 5H15m3.852 3H15m3.384 3H15m-9.47-.764h-.972A14.756 14.756 0 0 1 4.445 8c-.019-.747.019-1.495.113-2.236h.972a.95.95 0 0 0 .946-.856l.188-1.877a.951.951 0 0 0-.946-1.046H3.791a1.127 1.127 0 0 0-1.067.749A16.11 16.11 0 0 0 2 8a16.737 16.737 0 0 0 .743 5.242c.154.463 1.255.773 1.743.773h1.232a.95.95 0 0 0 .946-1.046l-.188-1.877a.95.95 0 0 0-.946-.856ZM19.063 2H10v12h8.273l1.716-10.847A.981.981 0 0 0 19.063 2ZM20 18H9v-2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2Z"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.vercel.app/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
@prop export let role: string = 'img';
@prop export let strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | null | undefined = 'round';
@prop export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined = 'round';
@prop export let strokeWidth = '2';
@prop export let ariaLabel = 'blender phone outline';
-->
