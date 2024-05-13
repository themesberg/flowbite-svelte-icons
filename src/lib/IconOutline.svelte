<script lang="ts">
  import type { ComponentType } from 'svelte';
  interface Props{
    icon: ComponentType;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    role?: string;
    color?: string;
    ariaLabel?: string;
    class?: string;
  }
  let {icon, size, role, color, ariaLabel, class: classname, ...restProps}: Props = $props()

</script>

<svelte:component 
fill={color}
  {...restProps} 
  {role}
  this={icon} 
  {size}
  class={classname} 
  {ariaLabel}
/>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@prop icon
@prop size
@prop role
@prop color
@prop ariaLabel
@prop class: classname
@prop ...restProps
-->
