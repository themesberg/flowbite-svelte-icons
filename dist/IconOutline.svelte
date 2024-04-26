<script lang="ts">let { icon, size, role, color, ariaLabel, class: classname, ...restProps } = $props();
</script>

<svelte:component
  this={icon}
  fill={color}
  {...restProps}
  {role}
  {size}
  class={classname}
  {ariaLabel}
/>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@props: icon: ComponentType;
@props:size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
@props:role?: string;
@props:color?: string;
@props:ariaLabel?: string;
@props:class?: string;
-->
