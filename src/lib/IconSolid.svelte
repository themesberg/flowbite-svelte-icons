<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let icon: ComponentType;
  export let size: "xs" | "sm" | "md" | "lg" | "xl" = "md";
  export let role: string = 'img';
  export let ariaLabel = 'Icon';
  export let strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | null | undefined = 'round';
  export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined = 'round';
  export let strokeWidth = '2';

</script>

<svelte:component 
  {...$$restProps} 
  {role}
  this={icon} 
  {size}
  {strokeLinecap}
  {strokeLinejoin}
  {strokeWidth}
  class={$$props.class} 
  {ariaLabel}
/>