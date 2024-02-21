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

	let { size = ctx.size || 'md', role, class: classname, ariaLabel = 'keyboard solid,', ...restProps } = $props<Props>();
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
		fill-rule="evenodd"
		d="M2 7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm5 1H5v2h2V8Zm3 0H8v2h2V8Zm3 0h-2v2h2V8Zm3 0h-2v2h2V8Zm3 0h-2v2h2V8ZM7 11H5v2h2v-2Zm3 0H8v2h2v-2Zm3 0h-2v2h2v-2Zm3 0h-2v2h2v-2Zm3 0h-2v2h2v-2ZM7 14H5v2h2v-2Zm1 0v2h8v-2H8Zm11 0h-2v2h2v-2Z"
		clip-rule="evenodd"
	/>
</svg>
