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
		ariaLabel = 'share all solid,',
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
		d="M14.5 6.7a1 1 0 0 1 0-1.4 1 1 0 0 1 1.3 0l5.5 4.9a2 2 0 0 1 0 3l-5.5 5.1a1 1 0 0 1-1.5 0 1 1 0 0 1 .1-1.5l5.6-5v-.1l-5.5-5ZM8 16v-.4A4.1 4.1 0 0 0 5.3 18a1.7 1.7 0 0 1-2 1A1.7 1.7 0 0 1 2 17.2v-1.3c0-3.8 2.5-7 6-7.6v-.7a2 2 0 0 1 2-2.1 2 2 0 0 1 1.1.4l5.1 4.3a2.1 2.1 0 0 1 0 3.1l-5 4.3H11A2 2 0 0 1 8 16Z"
		clip-rule="evenodd"
	/>
</svg>
