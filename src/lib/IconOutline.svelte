<script lang="ts">
	import type { Component } from 'svelte';
	import type { SVGAttributes } from 'svelte/elements';

	interface Props extends SVGAttributes<SVGElement> {
		Icon: Component;
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		role?: string;
		color?: string;
		ariaLabel?: string;
		class?: string;
	}
	let {
		Icon,
		size,
		role,
		color = 'currentColor',
		ariaLabel,
		class: classname,
		...restProps
	}: Props = $props();
</script>

<Icon fill="none" {color} {...restProps} {role} {size} class={classname} {ariaLabel} />

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@prop Icon
@prop size
@prop role
@prop color = 'currentColor'
@prop ariaLabel
@prop class: classname
@prop ...restProps
-->
