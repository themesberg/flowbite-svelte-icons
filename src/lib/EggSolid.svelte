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
		ariaLabel = 'egg solid',
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
		d="M9.0276 4.36983C9.84851 3.59377 10.8715 3 12.05 3c1.1786 0 2.2016.59377 3.0225 1.36983.8255.78038 1.5331 1.82292 2.1072 2.92578C18.3188 9.48385 19.05 12.1425 19.05 14c0 3.866-3.134 7-7 7-3.86594 0-6.99995-3.134-6.99995-7 0-1.8575.73123-4.51615 1.87035-6.70439.57411-1.10286 1.28173-2.1454 2.1072-2.92578Zm2.8023 5.91657c.3082-.45832.1865-1.07968-.2718-1.38786-.4583-.30818-1.0797-.18648-1.3879.27182-.37473.55732-.66096 1.25684-.85365 1.91184-.19234.6537-.31649 1.3484-.31649 1.9178 0 .5523.44772 1 1.00004 1 .5522 0 1-.4477 1-1 0-.3189.0769-.8156.2351-1.3533.1579-.5365.3717-1.0286.5947-1.3603Z"
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
@prop ariaLabel = 'egg solid'
@prop ...restProps
-->
