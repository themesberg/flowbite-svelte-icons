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
		ariaLabel = 'mug saucer solid',
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
		fill-rule="evenodd"
		d="M5 5c-.28252 0-.55187.11951-.74145.32899-.18958.20949-.2817.48939-.25358.77051l.6398 6.398C4.90037 15.0535 7.0512 17 9.61995 17h.76015c2.3975 0 4.431-1.6957 4.8992-4H17c1.6569 0 3-1.3431 3-3 0-1.65685-1.3431-3-3-3h-1.095l.09-.9005c.0282-.28112-.064-.56102-.2535-.77051C15.5519 5.11951 15.2825 5 15 5H5Zm12 6h-1.495l.2-2H17c.5523 0 1 .44772 1 1 0 .5523-.4477 1-1 1Z"
		clip-rule="evenodd"
	/>
	<path
		fill="currentColor"
		d="M5 18c-.55228 0-1 .4477-1 1s.44772 1 1 1h11c.5523 0 1-.4477 1-1s-.4477-1-1-1H5Z"
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
@prop ariaLabel = 'mug saucer solid'
@prop ...restProps
-->
