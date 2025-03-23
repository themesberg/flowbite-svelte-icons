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
		ariaLabel = 'pepper hot outline',
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
		stroke-width={strokeWidth}
		d="M11 11c1.4996-3.03293 3.1022-3.84719 4.5-3.50002 1.3978.34717 2.2863.9906 2.6776 2.60672.4633 2.1164-1.7429 4.9773-5.8373 8.2081-1.2064.9132-3.49445 2.0175-5.05111 2.6995-.69706.2941-1.59437.0537-2.09791-.6308-.50355-.6845-.3913-1.6162.24626-2.201.39377-.444.75319-.7599 1.11261-1.0758C8.1847 15.6213 9.50034 14.033 11 11Zm0 0h3v2h3m.1576-5.48485 1.2592-2.13563c.4624-.70043.1558-1.60694-.5447-2.0694-.7004-.46246-1.6069-.1558-2.0694.54463l-.0812.04692"
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
@prop ariaLabel = 'pepper hot outline'
@prop ...restProps
-->
