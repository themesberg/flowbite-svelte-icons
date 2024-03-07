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
		ariaLabel = 'euro solid,',
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
		fill-rule="evenodd"
		d="M7.3 9c1-3.4 3.8-6 7.3-6a7 7 0 0 1 4 1.3 1 1 0 1 1-1.2 1.6 5 5 0 0 0-2.8-.9c-2.2 0-4.3 1.6-5.2 4h5.8a1 1 0 1 1 0 2H9a8.7 8.7 0 0 0 0 2h6.3a1 1 0 1 1 0 2H9.4c1 2.4 3 4 5.2 4 1 0 2-.3 2.8-.9a1 1 0 1 1 1.2 1.6 7 7 0 0 1-4 1.3c-3.5 0-6.3-2.6-7.3-6H6a1 1 0 1 1 0-2h.9a10.4 10.4 0 0 1 0-2H6a1 1 0 1 1 0-2h1.3Z"
		clip-rule="evenodd"
	/>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
@props:role?: string;
@props:class?: string;
@props:ariaLabel?:  string; = 'euro solid,';
-->
