<script lang="ts">
	import type { ComponentType } from 'svelte';
	interface Props {
		icon: ComponentType;
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		role?: string;
		ariaLabel?: string;
		strokeLinecap?: 'round' | 'inherit' | 'butt' | 'square' | null | undefined;
		strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined;
		strokeWidth?: string;
		class?: string;
	}
	let { icon, size, role, ariaLabel, strokeLinecap, strokeLinejoin, strokeWidth, class: classname, ...restProps } = $props<Props>();
</script>

<svelte:component this={icon} {...restProps} {role} {size} {strokeLinecap} {strokeLinejoin} {strokeWidth} class={classname} {ariaLabel} />
