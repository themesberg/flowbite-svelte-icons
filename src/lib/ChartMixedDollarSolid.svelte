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

	let { size = ctx.size || 'md', role, class: classname, ariaLabel = 'chart mixed dollar solid,', ...restProps } = $props<Props>();
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
		d="M9 15a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm3.8-1.9c.3-.5.7-1 1.2-1.2a1 1 0 0 1 2 0c.5.1.8.4 1.1.7a1 1 0 1 1-1.4 1.4l-.4-.2h-.1a.4.4 0 0 0-.4 0l.4.3a3 3 0 0 1 1.5.9 2 2 0 0 1 .5 1.9c-.3.5-.7 1-1.2 1.2a1 1 0 0 1-2 0c-.4 0-.8-.3-1.2-.7a1 1 0 1 1 1.6-1.3l.3.2h.1a.4.4 0 0 0 .4 0 1 1 0 0 0-.4-.3 3 3 0 0 1-1.5-.9 2 2 0 0 1-.5-2Zm2 .6Zm.5 2.6ZM4 14c.6 0 1 .4 1 1v4a1 1 0 1 1-2 0v-4c0-.6.4-1 1-1Zm3-2c.6 0 1 .4 1 1v6a1 1 0 1 1-2 0v-6c0-.6.4-1 1-1Zm6.5-8c0-.6.4-1 1-1H18c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0v-.8l-2.3 2a1 1 0 0 1-1.3.1l-2.9-2-3.9 3a1 1 0 1 1-1.2-1.6l4.5-3.5a1 1 0 0 1 1.2 0l2.8 2L15.3 5h-.8a1 1 0 0 1-1-1Z"
		clip-rule="evenodd"
	/>
</svg>
