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
		ariaLabel = 'credit card plus alt solid',
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
		d="M2 7c0-1.10457.89543-2 2-2h16c1.1046 0 2 .89543 2 2v4c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1H4v7h10c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-1.10457 0-2-.8954-2-2V7Z"
	/>
	<path
		d="M5 14c0-.5523.44772-1 1-1h2c.55228 0 1 .4477 1 1s-.44772 1-1 1H6c-.55228 0-1-.4477-1-1Zm5 0c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1Zm9-1c.5523 0 1 .4477 1 1v1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1h-1v1c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1h-1c-.5523 0-1-.4477-1-1s.4477-1 1-1h1v-1c0-.5523.4477-1 1-1Z"
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
@prop ariaLabel = 'credit card plus alt solid'
@prop ...restProps
-->
