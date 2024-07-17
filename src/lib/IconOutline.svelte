<script lang="ts">
  import type { Component } from 'svelte';
  import type { SVGAttributes } from 'svelte/elements';

  interface Props extends SVGAttributes<SVGElement> {
    icon: Component;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    role?: string;
    color?: string;
    ariaLabel?: string;
    class?: string;
  }
  let { icon, size, role, color, ariaLabel, class: classname, ...restProps }: Props = $props();
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
@prop icon
@prop size
@prop role
@prop color
@prop ariaLabel
@prop class: classname
@prop ...restProps
-->
