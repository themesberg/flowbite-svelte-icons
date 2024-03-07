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

	let { size = ctx.size || 'md', role, class: classname, ariaLabel = 'cloud arrow up solid,', ...restProps } = $props<Props>();
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
		d="M13.4 4a6.5 6.5 0 0 0-6.9 4A5 5 0 0 0 7 18h3v-4a2 2 0 0 1-1.4-3.4l2-2a2 2 0 0 1 2.8 0l2 2A2 2 0 0 1 14 14v4h4a4 4 0 0 0 1-7.9 6.5 6.5 0 0 0-5.6-6Z"
	/> <path fill="currentColor" d="M12.7 9.3a1 1 0 0 0-1.4 0l-2 2a1 1 0 1 0 1.4 1.4l.3-.3V19a1 1 0 1 0 2 0v-6.6l.3.3a1 1 0 0 0 1.4-1.4l-2-2Z" />
</svg>
