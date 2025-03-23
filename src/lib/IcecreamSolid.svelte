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
		ariaLabel = 'icecream solid',
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
		d="M6.08296 7C6.55904 4.16229 9.027 2 12 2c3.3137 0 6 2.68629 6 6h-2.5C14.1193 8 13 9.11929 13 10.5c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5V10c0-1.65685-1.3431-3-3-3H6.08296Z"
	/>
	<path
		fill="currentColor"
		d="M6 9v5c0 1.1046.89543 2 2 2h3v5c0 .5523.4477 1 1 1s1-.4477 1-1v-5h3c1.1046 0 2-.8954 2-2v-4h-2.5c-.2761 0-.5.2239-.5.5 0 1.3807-1.1193 2.5-2.5 2.5S10 11.8807 10 10.5V10c0-.55228-.44772-1-1-1H6Z"
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
@prop ariaLabel = 'icecream solid'
@prop ...restProps
-->
