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
	let { size = ctx.size || 'md', role, class: classname, ariaLabel = 'thumbs down outline,', ...restProps } = $props<Props>();
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
		d="M17 13c-.9 0-1.4.5-2.2 1a22.3 22.3 0 0 0-4 5.1c0 .3-.2.5-.5.7a1.5 1.5 0 0 1-2-.4 1.6 1.6 0 0 1-.4-1.2L9.3 14m7.7-1h3V6.5c0-.8-.7-1.5-1.5-1.5v0c-.8 0-1.5.7-1.5 1.5V13Zm-6.5 1h-5a1 1 0 0 1-.5-.1 1.8 1.8 0 0 1-1-1.4l.1-.9 2.1-6.4C6.5 4.5 6.6 4 8 4c2.3 0 4.8 1 6.7 1.5"
	/>
</svg>
