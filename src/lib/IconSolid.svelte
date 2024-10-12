<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let icon: ComponentType;
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let role: string = 'img';
  export let ariaLabel = 'Icon';
  export let strokeWidth = '2';
</script>

<svelte:component
  this={icon}
  {...$$restProps}
  {role}
  {size}
  {strokeWidth}
  class={$$props.class}
  {ariaLabel}
/>
