<script lang="ts">
	import type { ComponentType } from 'svelte';
	interface Props {
		icon: ComponentType;
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		role?: string;
		ariaLabel?: string;
		class?: string;
	}
	let {
		icon,
		size,
		role,
		ariaLabel,
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svelte:component
	this={icon}
	{...restProps}
	{role}
	{size}
	class={classname}
	{ariaLabel}
/>
