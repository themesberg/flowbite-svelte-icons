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
		ariaLabel = 'wine glass empty solid',
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
		d="M8.5 2c-.42794 0-.80845.2723-.94652.67736-.03443.10101-.07815.2268-.12882.3726-.1952.56172-.4936 1.42039-.76192 2.30283C6.33766 6.42192 6 7.69926 6 8.57072c0 2.88418 2.09201 5.78348 5 6.33548V20H9c-.55228 0-1 .4477-1 1s.44772 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2v-5.0938c2.908-.552 5-3.4513 5-6.33548 0-.86275-.3278-2.12695-.6497-3.1952-.3348-1.11124-.7167-2.17674-.9075-2.70901l-.0015-.00395C16.2989 2.26514 15.9222 2 15.5 2h-7Z"
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
@prop ariaLabel = 'wine glass empty solid'
@prop ...restProps
-->
