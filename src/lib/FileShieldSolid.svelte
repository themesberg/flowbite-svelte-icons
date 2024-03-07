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
		ariaLabel = 'file shield solid,',
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
		d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v5.7l-4.3-1.6a2 2 0 0 0-1.4 0l-5 1.9A2 2 0 0 0 8 11.9 13.1 13.1 0 0 0 13 22H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z"
		clip-rule="evenodd"
	/>
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M15.3 9a1 1 0 0 0-.6 0l-5 1.9a1 1 0 0 0-.7 1 12.1 12.1 0 0 0 5.4 10c.4.2.8.2 1.2 0a12.4 12.4 0 0 0 5.4-10 1 1 0 0 0-.7-1l-5-1.8ZM15 19.9a10.4 10.4 0 0 0 4-7.3l-4-1.4v8.7Z"
		clip-rule="evenodd"
	/>
</svg>
