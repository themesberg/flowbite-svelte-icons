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
		ariaLabel = 'face explode outline,',
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
	<path fill="currentColor" d="M12 17a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Z" />
	<path
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M13.8 9h2.7a2 2 0 1 0-1-3.7 1.9 1.9 0 0 0-.4-1.4 2 2 0 0 0-3.1-.2 2 2 0 0 0-3.5 1.6 2 2 0 1 0-1 3.7h3.4m3-1v3.6M10.1 9v2.6M15 16h0m-6 0h0m12-4.4a1.8 1.8 0 0 1-1.8 1.3 1.9 1.9 0 0 1-1.8-1.3 1.9 1.9 0 0 1-3.6 0 1.8 1.8 0 0 1-1.7 1.3 2 2 0 0 1-2-1.3 1.8 1.8 0 0 1-1.6 1.3 2 2 0 0 1-2-1.3 1.9 1.9 0 0 1-1.8 1.3A1.8 1.8 0 0 1 3 11.6v.4a9 9 0 0 0 18 0v-.4Z"
	/>
</svg>
