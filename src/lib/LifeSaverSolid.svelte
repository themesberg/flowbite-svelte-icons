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

	let { size = ctx.size || 'md', role, class: classname, ariaLabel = 'life saver solid,', ...restProps } = $props<Props>();
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
		d="m7.4 3.7 3.4 3.5a5 5 0 0 1 1.3-.2l1 .1 3.5-3.4.5-.3a9.9 9.9 0 0 0-10.2 0c.2 0 .4.2.5.3Zm11.5 1.6-.2-.2a.5.5 0 0 0-.7 0l-3 3h.2l.6.7.1.1 3-3a.5.5 0 0 0 0-.6ZM16 15l-.2.2a5 5 0 0 1-.6.6l-.1.1 3 3a.5.5 0 0 0 .6 0l.2-.2a.5.5 0 0 0 0-.7l-3-3Zm-1.5-4.7a3 3 0 0 0-1.4-1 3 3 0 0 0-1-.3H12a3 3 0 0 0-2.8 2 3 3 0 0 0 .3 2.6c.4.6.8 1 1.4 1.2a3 3 0 0 0 2.2 0 3 3 0 0 0 1.7-1.7 2.9 2.9 0 0 0-.3-2.7ZM20.6 7l-.3.4-3.5 3.4a5 5 0 0 1 0 2.4l3.5 3.4.3.4a9.9 9.9 0 0 0 0-10Zm-4 13.3-3.4-3.5a5 5 0 0 1-1.2.2h-.1a5 5 0 0 1-1-.1l-3.5 3.4-.4.3c1.4.9 3 1.4 4.7 1.4h.3c1.8 0 3.5-.5 5-1.4l-.4-.3ZM3.7 16.6l3.5-3.4a4 4 0 0 1 0-2.4L3.6 7.4 3.4 7a9.9 9.9 0 0 0 0 10l.3-.4Zm5.1-.8a5 5 0 0 1-.6-.6l-.1-.1-3 3a.5.5 0 0 0 0 .6l.2.2a.5.5 0 0 0 .7 0l3-3h-.2ZM8 9l.2-.2.6-.6.1-.1-3-3a.5.5 0 0 0-.6 0l-.2.2a.5.5 0 0 0 0 .7l3 3Z"
	/>
</svg>
