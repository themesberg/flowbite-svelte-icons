<script lang="ts">
  import type { ComponentType } from 'svelte';
  interface Props{
    icon: ComponentType;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    role?: string;
    color?: string;
    ariaLabel?: string;
    strokeWidth?: string;
    class?: string;
  }
  let {icon, size, role, color, ariaLabel, strokeWidth, class: classname, ...restProps}: Props = $props()
</script>

<svelte:component 
  fill="none"
  {color}
  {...restProps} 
  {role}
  this={icon} 
  {size}
  {strokeWidth}
  class={classname} 
  {ariaLabel}
/>