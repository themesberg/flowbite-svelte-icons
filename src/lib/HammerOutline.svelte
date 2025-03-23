<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { OutlineBaseProps, OutlineProps } from './types';

	const ctx: OutlineBaseProps = getContext('iconCtx') ?? {};
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
		strokeWidth = ctx.strokeWidth || '2',
		desc,
		class: className,
		ariaLabel = 'hammer outline',
		...restProps
	}: OutlineProps = $props();

	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	{color}
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
		stroke="currentColor"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
		d="m20.9532 11.7634-2.0523-2.05225-2.0523 2.05225 2.0523 2.0523 2.0523-2.0523Zm-1.3681-2.73651-4.1046-4.10457L12.06 8.3428l4.1046 4.1046 3.4205-3.42051Zm-4.1047 2.73651-2.7363-2.73638-8.20919 8.20918 2.73639 2.7364 8.2091-8.2092Z"
	/>
	<path
		stroke="currentColor"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
		d="m12.9306 3.74083 1.8658 1.86571-2.0523 2.05229-1.5548-1.55476c-.995-.99505-3.23389-.49753-3.91799.18657l2.73639-2.73639c.6841-.68409 1.9901-.74628 2.9229.18658Z"
	/>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@prop size = ctx.size || 'md'
@prop color = ctx.color || 'currentColor'
@prop title
@prop strokeWidth = ctx.strokeWidth || '2'
@prop desc
@prop class: className
@prop ariaLabel = 'hammer outline'
@prop ...restProps
-->
