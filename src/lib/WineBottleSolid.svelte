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
		ariaLabel = 'wine bottle solid',
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
		d="M9.00004 4c0-1.10457.89543-2 1.99996-2h2c1.1046 0 2 .89543 2 2v3H9.00004V4Zm0 5v.41924c-.87786.56584-1.41239 1.28066-1.69868 2.13956-.30199.9059-.30165 1.9228-.30134 2.8523L7.00004 20c0 1.1047.89549 2 2 2H15c1.1046 0 2-.8954 2-2v-1h-4.9999c-.5523 0-1-.4477-1-1v-5c0-.5523.4477-1 1-1h4.8213c-.034-.1494-.0745-.2967-.1227-.4412-.2863-.8589-.8208-1.57372-1.6987-2.13956V9H9.00004Z"
	/> <path fill="currentColor" d="M17 14h-3.9999v3H17v-3Z" />
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
@prop ariaLabel = 'wine bottle solid'
@prop ...restProps
-->
