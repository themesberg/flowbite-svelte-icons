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
		ariaLabel = 'fish solid',
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
		d="M13.4228 7.00024c-2.2266.01465-4.24648.66154-5.73389 1.53827-.75153.44298-1.39556.9614-1.86395 1.51679-.05394.0639-.10674.1298-.1579.1975L3.70711 8.29288c-.39053-.39052-1.02369-.39052-1.41422 0-.39052.39053-.39052 1.02369 0 1.41422L4.58579 12l-2.2929 2.2929c-.39052.3905-.39052 1.0237 0 1.4142.39053.3905 1.02369.3905 1.41422 0l1.95995-1.96c.05116.0677.10396.1336.1579.1976.46839.5554 1.11242 1.0738 1.86395 1.5168 1.48608.8759 3.50369 1.5224 5.72789 1.5382-.1119-.1811-.2137-.3588-.2975-.5251-.8831-1.5257-1.4054-2.8736-1.4079-4.3386-.0025-1.4614.5132-2.89857 1.4025-4.59935.0088-.01699.0182-.03371.028-.05015.0924-.15428.1875-.31964.2809-.48626Z"
	/>
	<path
		fill-rule="evenodd"
		d="M15.6562 16.7394c1.3837-.3378 2.5644-.962 3.5044-1.6203 1.3918-.9748 2.3082-2.0596 2.6505-2.5342.2519-.3493.2519-.8206 0-1.1698-.3423-.4746-1.2587-1.55947-2.6505-2.53422-.9597-.6721-2.1702-1.30857-3.5914-1.64108-.2021.38166-.4544.84304-.696 1.24836-.8277 1.58764-1.1634 2.67234-1.1618 3.64444.0017.9646.3363 1.9584 1.1534 3.3652.0112.0193.0218.039.0317.059.1641.332.4642.7778.7597 1.1826Zm.3305-6.1117c-.5523 0-1 .4477-1 1s.4477 1 1 1h.01c.5523 0 1-.4477 1-1s-.4477-1-1-1h-.01Z"
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
@prop ariaLabel = 'fish solid'
@prop ...restProps
-->
