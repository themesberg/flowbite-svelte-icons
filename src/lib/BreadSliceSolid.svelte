<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
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
		ariaLabel = 'bread slice solid',
		...restProps
	}: Props = $props();

	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill={color}
	{...restProps}
	class={twMerge(clsx('shrink-0', sizes[size], className))}
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
		d="M11.9925 3.01102c-1.9214.01439-3.85188.37019-6.25505 1.0241-.01805.00491-.03595.01032-.05369.01624-.91244.30416-1.60323.7905-2.06 1.42998C3.16866 6.1185 3 6.83191 3 7.50006c0 .63697.15395 1.45811.5895 2.15498.31425.50276.78203.94286 1.4105 1.17356V19c0 1.1046.89543 2 2 2h10c1.1046 0 2-.8954 2-2v-8.1714c.6285-.2307 1.0962-.6708 1.4105-1.17356C20.846 8.95817 21 8.13703 21 7.50006c0-.66815-.1687-1.38156-.6238-2.01872-.4567-.63948-1.1475-1.12582-2.06-1.42998-.0177-.00592-.0356-.01133-.0536-.01624-2.4032-.65391-4.3337-1.00971-6.2551-1.0241h-.015Z"
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
@prop ariaLabel = 'bread slice solid'
@prop ...restProps
-->
