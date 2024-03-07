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
		ariaLabel = 'bell active solid,',
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
		d="M11.2 3.8a1 1 0 1 0-2 .4l.4 1.7a5.3 5.3 0 0 0-2.8 5.8l.2 1.5.1.3c.3 1.3-.2 2.2-.6 3-.3.5-.6 1-.5 1.4.1.6.3 1.2.8 1l12.7-2.3c.5-.1.4-.7.3-1.3-.1-.5-.6-1-1.2-1.7a5.2 5.2 0 0 1-1.4-2 19.6 19.6 0 0 1-.3-1.8 5.3 5.3 0 0 0-5.4-4.4l-.3-1.6Z"
	/>
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M6.5 4.3c.4.3.5 1 .1 1.4A6.9 6.9 0 0 0 4.8 10a1 1 0 0 1-2-.2c.1-2.1 1-3.9 2.3-5.5a1 1 0 0 1 1.4 0Z"
		clip-rule="evenodd"
	/>
	<path
		fill="currentColor"
		d="M9 19.7c.6.8 1.7 1.3 2.8 1.3 1.5 0 2.8-1.1 3.3-2.5l-6.2 1.2Z"
	/>
</svg>
