<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { BaseProps, Props } from './types';

	const ctx: BaseProps = getContext('iconCtx') ?? {};
	const sizes = {
		xs: 'w-3 h-3',
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6',
		xl: 'w-8 h-8'
	};

	let {
		size = ctx.size || 'md',
		color = ctx.color || 'currentColor',
		title,
		desc,
		class: className,
		ariaLabel = 'microphone slash solid',
		...restProps
	}: Props = $props();

	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill={color}
	{...restProps}
	class={twMerge('shrink-0', sizes[size], className)}
	aria-label={ariaLabel}
	aria-describedby={hasDescription ? ariaDescribedby : undefined}
	viewBox="0 0 24 24"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="m15.506 14.097.994.995A3.989 3.989 0 0 0 17.975 12V9.011a.996.996 0 0 1 1.992 0v2.99a5.981 5.981 0 0 1-2.054 4.503l1.762 1.762a.996.996 0 1 1-1.408 1.408L4.325 5.733a.996.996 0 0 1 1.408-1.408L7.04 5.632a3.984 3.984 0 0 1 3.964-3.59h1.992c2.2 0 3.983 1.783 3.983 3.983v4.98a3.975 3.975 0 0 1-1.473 3.092ZM4.033 10.008a.996.996 0 1 1 1.992 0V12a3.99 3.99 0 0 0 3.984 3.984H12c.55 0 .996.446.996.996v2.988h1.992a.996.996 0 0 1 0 1.992H9.012a.996.996 0 0 1 0-1.992h1.992v-1.992h-.997a5.981 5.981 0 0 1-5.974-5.974v-1.993Z"
	/>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@prop size = ctx.size || 'md'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop class: className
@prop ariaLabel = 'microphone slash solid'
@prop ...restProps
-->
