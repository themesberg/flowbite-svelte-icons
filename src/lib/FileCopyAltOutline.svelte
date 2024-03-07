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
	let { size = ctx.size || 'md', role, class: classname, ariaLabel = 'file copy alt outline,', ...restProps } = $props<Props>();
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
		stroke-linejoin="round"
		stroke-width="2"
		d="M14 4v3c0 .6-.4 1-1 1h-3m4 10v1c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V9c0-.6.4-1 1-1h2m11-3v10c0 .6-.4 1-1 1h-7a1 1 0 0 1-1-1V7.9c0-.3 0-.5.2-.7l2.5-2.9c.2-.2.5-.3.8-.3H18c.6 0 1 .4 1 1Z"
	/>
</svg>
