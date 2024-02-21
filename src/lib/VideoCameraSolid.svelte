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

	let { size = ctx.size || 'md', role, class: classname, ariaLabel = 'video camera solid,', ...restProps } = $props<Props>();
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
		d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7Zm2 9.4 4.7 1.5A1 1 0 0 0 22 17V7a1 1 0 0 0-1.3-1L16 7.7v8.8Z"
		clip-rule="evenodd"
	/>
</svg>
