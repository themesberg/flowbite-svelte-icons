<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	interface CtxType {
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		role?: string;
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
		ariaLabel = 'star half stroke outline,',
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
		stroke="currentColor"
		stroke-width="2"
		d="M12 4.4v14.8M8.5 9.4l-4.6.3a1 1 0 0 0-.5 1.8l3.4 3c.3.2.4.5.3.9l-1 4.4c-.2.8.7 1.5 1.5 1l3.9-2.3a1 1 0 0 1 1 0l4 2.4c.7.4 1.6-.3 1.4-1.1l-1-4.4c-.1-.4 0-.7.3-1l3.4-3a1 1 0 0 0-.5-1.7l-4.6-.3a1 1 0 0 1-.8-.6l-1.8-4.2a1 1 0 0 0-1.8 0L9.3 8.8a1 1 0 0 1-.8.6Z"
	/>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
@props:role?: string;
@props:class?: string;
@props:ariaLabel?:  string; = 'star half stroke outline,';
-->
