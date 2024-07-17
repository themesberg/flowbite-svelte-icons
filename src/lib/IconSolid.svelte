<script lang="ts">
  import type { Component } from 'svelte';
  interface Props {
    icon: Component;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    role?: string;
    color?: string;
    ariaLabel?: string;
    strokeWidth?: string;
    class?: string;
  }
  let {
    icon,
    size,
    role,
    color,
    ariaLabel,
    strokeWidth,
    class: classname,
    ...restProps
  }: Props = $props();
</script>

<svelte:component
  this={icon}
  fill="none"
  {color}
  {...restProps}
  {role}
  {size}
  {strokeWidth}
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
@prop strokeWidth
@prop class: classname
@prop ...restProps
-->
