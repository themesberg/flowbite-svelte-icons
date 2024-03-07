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
		ariaLabel = 'caret left solid,',
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
		d="M13.7 5.6A2 2 0 0 1 17 7v10a2 2 0 0 1-3.3 1.5l-5.9-4.9a2 2 0 0 1 0-3l6-5Z"
		clip-rule="evenodd"
	/>
</svg>
