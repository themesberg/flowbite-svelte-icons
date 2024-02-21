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

	let { size = ctx.size || 'md', role, class: classname, ariaLabel = 'face explode solid,', ...restProps } = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="currentColor"
	{...restProps}
	class={twMerge('shrink-0', sizes[size], classname)}
	{role}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"
>
	<path
		fill="currentColor"
		d="M22 11.5a.5.5 0 0 0-1 0 1.4 1.4 0 0 1-1.4 1 1.5 1.5 0 0 1-1.4-1 .5.5 0 0 0-1 0 1.5 1.5 0 0 1-2.7 0v-2h2.2a2.6 2.6 0 0 0 2.7-2.7 2.7 2.7 0 0 0-2.7-2.6h-.5l-.1-.3a2.6 2.6 0 0 0-3.8-1.4l-.3.1-.3-.1a2.6 2.6 0 0 0-2.8 0c-.4.4-.8.8-1 1.4V4h-.6a2.7 2.7 0 0 0-2.7 2.6 2.6 2.6 0 0 0 2.7 2.7h2.3v2a1.3 1.3 0 0 1-1.3 1 1.6 1.6 0 0 1-1.5-1 .5.5 0 0 0-1 0 1.5 1.5 0 0 1-1.4 1 1.4 1.4 0 0 1-1.4-1 .5.5 0 0 0-.5-.4.5.5 0 0 0-.5.6v.4a10 10 0 1 0 20 0v-.5ZM8.3 15.7a1 1 0 1 1 2.1 0 1 1 0 0 1-2 0Zm1.6 3.7a2.1 2.1 0 0 1 4.2 0H10Zm4.7-2.7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
	/>
</svg>
