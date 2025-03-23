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
		ariaLabel = 'bone solid',
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
		fill="currentColor"
		d="M4.13982 11.889c-1.40388 1.4039-1.40388 3.5869 0 4.9907.52114.5212 1.22247.8909 1.9657 1.0148.12387.7432.49363 1.4446 1.01476 1.9657 1.40388 1.4039 3.58692 1.4039 4.99072 0 1.1572-1.1571 1.3605-2.8435.6102-4.1867l2.9523-2.9523c1.3432.7503 3.0296.5469 4.1867-.6102 1.4039-1.4039 1.4039-3.58687 0-4.99075-.5211-.52113-1.2224-.89089-1.9657-1.01476-.1238-.74323-.4936-1.44456-1.0147-1.9657-1.4039-1.40388-3.5869-1.40388-4.9908 0-1.1571 1.15712-1.3605 2.84353-.6102 4.18672L8.32654 11.2788c-1.34319-.7503-3.0296-.5469-4.18672.6102Z"
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
@prop ariaLabel = 'bone solid'
@prop ...restProps
-->
