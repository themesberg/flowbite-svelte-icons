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
		ariaLabel = 'file zip solid,',
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
		d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm3 2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2V8h-2V6h2V4Z"
		clip-rule="evenodd"
	/>
</svg>
