<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { OutlineBaseProps, OutlineProps } from './types';

	const ctx: OutlineBaseProps = getContext('iconCtx') ?? {};
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
		strokeWidth = ctx.strokeWidth || '2',
		desc,
		class: className,
		ariaLabel = 'bone outline',
		...restProps
	}: OutlineProps = $props();

	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	{color}
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
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-miterlimit="10"
		stroke-width={strokeWidth}
		d="M16.8879 7.11205c.1788-.77492-.1192-1.66905-.7153-2.26515-1.0133-1.01335-2.5632-1.01335-3.5765 0-1.0134 1.01336-1.0134 2.5632 0 3.57655L8.42342 12.5961c-1.01336-1.0134-2.5632-1.0134-3.57655 0-1.01336 1.0133-1.01336 2.5632 0 3.5765.59609.5961 1.49023.8942 2.26515.7154-.17883.7749.11921 1.669.71531 2.2651 1.01335 1.0134 2.56317 1.0134 3.57657 0 1.0133-1.0134 1.0133-2.5632 0-3.5765l4.1726-4.1727c1.0134 1.0134 2.5632 1.0134 3.5766 0 1.0133-1.0133 1.0133-2.56318 0-3.57654-.5961-.59609-1.4903-.89414-2.2652-.71531Z"
	/>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@prop size = ctx.size || 'md'
@prop color = ctx.color || 'currentColor'
@prop title
@prop strokeWidth = ctx.strokeWidth || '2'
@prop desc
@prop class: className
@prop ariaLabel = 'bone outline'
@prop ...restProps
-->
