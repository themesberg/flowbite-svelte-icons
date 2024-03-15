<script>let { icon, size, role, ariaLabel, class: classname, ...restProps } = $props();
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
