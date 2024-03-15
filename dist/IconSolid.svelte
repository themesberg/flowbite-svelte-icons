<script>let {
  icon,
  size,
  role,
  ariaLabel,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
  class: classname,
  ...restProps
} = $props();
</script>

<svelte:component
	this={icon}
	{...restProps}
	{role}
	{size}
	{strokeLinecap}
	{strokeLinejoin}
	{strokeWidth}
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
@props:ariaLabel?: string;
@props:strokeLinecap?: 'round' | 'inherit' | 'butt' | 'square' | null | undefined;
@props:strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined;
@props:strokeWidth?: string;
@props:class?: string;
-->
