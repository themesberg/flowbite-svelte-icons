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
		ariaLabel = 'palette solid',
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
		fill-rule="evenodd"
		d="M8.649 2.577A10.004 10.004 0 0 1 20.344 6.49a9.995 9.995 0 0 1 1.2 8.486l-.004.01-.005.015a2.958 2.958 0 0 1-2.836 2.001h-2.69a1.037 1.037 0 0 0-.95.68c-.047.13-.068.27-.06.409v.916A3.01 3.01 0 0 1 11.96 22a9.626 9.626 0 0 1-4.195-1l.009.005-.018-.009.01.004a10.1 10.1 0 0 1-5.716-7.996l-.001-.012a9.992 9.992 0 0 1 6.6-10.415Zm3.35 3.429a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12ZM8.53 7.518a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2h-.01Zm6.968 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM6.99 11.004a1 1 0 1 0 0 2H7a1 1 0 1 0 0-2h-.01Z"
		clip-rule="evenodd"
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
@prop ariaLabel = 'palette solid'
@prop ...restProps
-->
