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
		ariaLabel = 'truck clock solid',
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
		d="M2.586 4.586A2 2 0 0 1 4 4h8a2 2 0 0 1 2 2h5a1 1 0 0 1 .894.553l2 4c.07.139.106.292.106.447v4a1 1 0 0 1-1 1h-.535a3.5 3.5 0 1 1-6.93 0h-3.07a3.5 3.5 0 1 1-6.93 0H3a1 1 0 0 1-1-1V6a2 2 0 0 1 .586-1.414ZM18.208 15.61a1.497 1.497 0 0 0-2.416 0 1.5 1.5 0 1 0 2.416 0Zm-10 0a1.498 1.498 0 0 0-2.416 0 1.5 1.5 0 1 0 2.416 0Zm5.79-7.612v2.02h5.396l-1-2.02h-4.396ZM9 8.667a1 1 0 1 0-2 0V10a1 1 0 0 0 .293.707l1.5 1.5a1 1 0 0 0 1.414-1.414L9 9.586v-.92Z"
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
@prop ariaLabel = 'truck clock solid'
@prop ...restProps
-->
