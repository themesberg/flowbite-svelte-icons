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
		ariaLabel = 'stroopwafel solid',
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
		d="M10.9999 2.04938c-.6896.06847-1.35872.20702-1.99996.40842V7h1.99996V2.04938ZM6.99994 3.33782C5.4818 4.21602 4.21596 5.48186 3.33776 7h3.66218V3.33782ZM2.45774 9c-.2014.64124-.33995 1.3103-.40842 2h4.95062V9h-4.5422Zm-.40842 4c.06847.6897.20702 1.3588.40842 2h4.5422v-2H2.04932Zm1.28844 4c.8782 1.5181 2.14404 2.784 3.66218 3.6622V17H3.33776Zm5.66218 4.5422c.64124.2014 1.31036.34 1.99996.4084V17H8.99994v4.5422Zm3.99996.4084c.6897-.0684 1.3588-.207 2-.4084V17h-2v4.9506Zm4-1.2884c1.5182-.8782 2.784-2.1441 3.6622-3.6622h-3.6622v3.6622ZM21.5421 15c.2014-.6412.34-1.3103.4085-2h-4.9507v2h4.5422Zm.4085-4c-.0685-.6897-.2071-1.35876-.4085-2h-4.5422v2h4.9507Zm-1.2885-4c-.8782-1.51814-2.144-2.78398-3.6622-3.66218V7h3.6622Zm-5.6622-4.5422c-.6412-.2014-1.3103-.33995-2-.40842V7h2V2.4578ZM8.99994 9h1.99996v2H8.99994V9Zm0 4h1.99996v2H8.99994v-2Zm3.99996 0v2h2v-2h-2Zm0-2h2V9h-2v2Z"
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
@prop ariaLabel = 'stroopwafel solid'
@prop ...restProps
-->
