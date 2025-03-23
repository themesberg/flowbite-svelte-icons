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
		ariaLabel = 'theatre outline',
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
		stroke-width={strokeWidth}
		d="m7.53316 11.8623.00957-.0029m5.58157 7.1424c-.5.515-.9195.8473-1.0611.8903-.4784.1454-5.42881-1.2797-6.23759-3.3305-.80878-2.0507-1.83058-5.8152-1.88967-6.2192-.0591-.40404 1.5599-1.72424 3.59722-2.61073m1.98839 8.05513c-.22637.262-.38955.5599-.55552.8474M13.4999 12c.5.5 1 1.049 2 1.049s1.5-.549 2-1.049m-4-4h.01m3.99 0h.01m-7.01-2.5c0-.28929 2.5-1.5 5-1.5s5 1.13645 5 1.5V12c0 1.9655-4.291 5-5 5-.7432 0-5-3.0345-5-5V5.5Z"
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
@prop ariaLabel = 'theatre outline'
@prop ...restProps
-->
