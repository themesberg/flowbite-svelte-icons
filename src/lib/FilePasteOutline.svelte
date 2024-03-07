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
		ariaLabel = 'file paste outline,',
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
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M9 20H5a1 1 0 0 1-1-1V6c0-.6.4-1 1-1h2.4M7 8h3M8 8V4h4v2m4 0V5h-4m3 4v3c0 .6-.4 1-1 1h-3m9-3v9c0 .6-.4 1-1 1h-7a1 1 0 0 1-1-1v-6.4c0-.3.1-.5.3-.7l2.4-2.6c.2-.2.5-.3.7-.3H19c.6 0 1 .4 1 1Z"
	/>
</svg>
