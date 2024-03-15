<script lang="ts">
  import type { ComponentType } from 'svelte';
  interface Props{
    icon: ComponentType;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    role?: string;
    ariaLabel?: string;
    class?: string;
  }
  let {icon, size, role, ariaLabel, class: classname, ...restProps}: Props = $props()

</script>

<svelte:component 
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
@props: icon: ComponentType;
@props:size?: "xs" | "sm" | "md" | "lg" | "xl";
@props:role?: string;
@props:ariaLabel?: string;
@props:class?: string;
-->
