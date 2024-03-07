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
		ariaLabel = 'face grin stars solid,',
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
		d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM7 12.5c.3 0 .5.2.5.4l.2.1 1 .3a18.9 18.9 0 0 0 7.8-.4.5.5 0 0 1 1 .1 5 5 0 0 1-1.6 3.4 5.5 5.5 0 0 1-7.8 0A5 5 0 0 1 6.5 13c0-.3.2-.5.5-.5Zm9.5.4Zm-9 0Zm.9-4.8L9 6.8l.6 1.3 1.4.2-1 1 .2 1.3L9 10l-1.2.6.2-1.4-1-1 1.4-.1Zm6 0 .6-1.3.6 1.3 1.4.2-1 1 .2 1.3L15 10l-1.2.6.2-1.4-1-1 1.4-.1Z"
		clip-rule="evenodd"
	/>
</svg>
