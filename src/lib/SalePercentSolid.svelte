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
		ariaLabel = 'sale percent solid,',
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
		d="M20.3 8.6c.1.3.3.6.6.8a3.5 3.5 0 0 1 0 5.2 2.4 2.4 0 0 0-.8 1.9 3.5 3.5 0 0 1-3.6 3.6 2.5 2.5 0 0 0-2 .8 3.5 3.5 0 0 1-5 0 2.4 2.4 0 0 0-2-.8A3.5 3.5 0 0 1 4 16.5a2.4 2.4 0 0 0-.8-2 3.5 3.5 0 0 1 0-5 2.4 2.4 0 0 0 .8-2A3.5 3.5 0 0 1 7.5 4a2.4 2.4 0 0 0 2-.8 3.5 3.5 0 0 1 5 0 2.4 2.4 0 0 0 2 .8A3.5 3.5 0 0 1 20 7.5c0 .4 0 .7.2 1ZM9.9 7.4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6 2.2a1 1 0 0 0-1.5-1.4l-6.2 6.2a1 1 0 0 0 1.4 1.4l6.2-6.2Zm-2.9 5a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
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
@props:ariaLabel?:  string; = 'sale percent solid,';
-->
