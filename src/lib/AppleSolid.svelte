<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	interface CtxType {
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		role?: string;
		strokeLinecap?: 'round' | 'inherit' | 'butt' | 'square' | null | undefined;
		strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined;
		strokeWidth?: string;
	}

	const ctx: CtxType = getContext('iconCtx') ?? {};
	const sizes = {
		xs: 'w-3 h-3',
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6',
		xl: 'w-8 h-8'
	};

	interface Props {
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		role?: string;
		class?: string;
		ariaLabel?: string;
	}

	let {
		size = ctx.size || 'md',
		role,
		class: classname,
		ariaLabel = 'apple solid,',
		...restProps
	} = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	{...restProps}
	class={twMerge('shrink-0', sizes[size], classname)}
	{role}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"
>
	<path
		fill="currentColor"
		d="M17.5 12.6a4.4 4.4 0 0 0 2.7 4c-.3 1-.8 2-1.4 3-.8 1.1-1.7 2.3-3 2.4-1.4 0-1.8-.8-3.3-.8-1.6 0-2 .7-3.3.8-1.3 0-2.3-1.3-3.2-2.5-1.7-2.5-3-7-1.2-10.1a4.9 4.9 0 0 1 4.1-2.5c1.3 0 2.5.9 3.3.9.8 0 2.3-1.1 3.8-1a4.7 4.7 0 0 1 3.7 2 4.5 4.5 0 0 0-2.2 3.8M15 5.2c.8-.9 1.1-2 1-3.2a4.5 4.5 0 0 0-3.7 3c-.2.5-.3 1-.2 1.6a3.7 3.7 0 0 0 3-1.4Z"
	/>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
@props:role?: string;
@props:class?: string;
@props:ariaLabel?:  string; = 'apple solid,';
-->
