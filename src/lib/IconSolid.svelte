<script lang="ts">
  import type { ComponentType } from 'svelte';
  interface Props{
    icon: ComponentType;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    role?: string;
    ariaLabel?: string;
    strokeLinecap?: 'round' | 'inherit' | 'butt' | 'square' | null | undefined;
    strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined;
    strokeWidth?: string;
    class?: string;
  }
  let {icon, size, role, ariaLabel, strokeLinecap, strokeLinejoin, strokeWidth, class: classname, ...restProps}: Props = $props()
</script>

<svelte:component 
  {...restProps} 
  {role}
  this={icon} 
  {size}
  {strokeLinecap}
  {strokeLinejoin}
  {strokeWidth}
  class={classname} 
  {ariaLabel}
/>