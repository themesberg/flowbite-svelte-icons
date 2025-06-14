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
		ariaLabel = 'martini glass citrus solid',
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
		fill-rule="evenodd"
		d="M4.00003 7h8.02747c.2487-2.24998 2.1562-4 4.4725-4C18.9853 3 21 5.01472 21 7.5S18.9853 12 16.5 12c-.8801 0-1.702-.2533-2.3956-.6902L11 14.4142V19h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H6.99999c-.55228 0-1-.4477-1-1s.44772-1 1-1h2.00004v-4.5858L3.29292 8.70711c-.286-.286-.37155-.71612-.21677-1.08979C3.23093 7.24364 3.59557 7 4.00003 7ZM16 7h-1.95c.2316-1.14112 1.2405-2 2.45-2C17.8807 5 19 6.11929 19 7.5S17.8807 10 16.5 10c-.3228 0-.6308-.06086-.9138-.17198l1.1209-1.12091c.286-.286.3716-.71612.2168-1.08979C16.7691 7.24364 16.4045 7 16 7Z"
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
@prop ariaLabel = 'martini glass citrus solid'
@prop ...restProps
-->
