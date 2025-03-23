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
		ariaLabel = 'list music solid',
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
		d="M17.316 4.052a.99.99 0 0 0-.9.14c-.262.19-.416.495-.416.82v8.566a4.573 4.573 0 0 0-2-.464c-1.99 0-4 1.342-4 3.443 0 2.1 2.01 3.443 4 3.443 1.99 0 4-1.342 4-3.443V6.801c.538.5 1 1.219 1 2.262 0 .56.448 1.013 1 1.013s1-.453 1-1.013c0-1.905-.956-3.18-1.86-3.942a6.391 6.391 0 0 0-1.636-.998 4 4 0 0 0-.166-.063l-.013-.005-.005-.002h-.002l-.002-.001ZM4 5.012c-.552 0-1 .454-1 1.013 0 .56.448 1.013 1 1.013h9c.552 0 1-.453 1-1.013 0-.559-.448-1.012-1-1.012H4Zm0 4.051c-.552 0-1 .454-1 1.013 0 .56.448 1.013 1 1.013h9c.552 0 1-.454 1-1.013 0-.56-.448-1.013-1-1.013H4Zm0 4.05c-.552 0-1 .454-1 1.014 0 .559.448 1.012 1 1.012h4c.552 0 1-.453 1-1.012 0-.56-.448-1.013-1-1.013H4Z"
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
@prop ariaLabel = 'list music solid'
@prop ...restProps
-->
