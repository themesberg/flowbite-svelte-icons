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
		ariaLabel = 'jar solid',
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
		d="M7 3c0-.55228.44772-1 1-1h8c.5523 0 1 .44772 1 1v2h1c.5523 0 1 .44772 1 1 0 .44954-.2966.8298-.7048.95572.6113.76712 1.3165 1.84205 1.589 3.04428H11c-.5523 0-1 .4477-1 1v7c0 .5523.4477 1 1 1h9v.002C20 21.2121 18.2083 23 16 23H8c-2.20825 0-4-1.7879-4-3.998V11c0-1.59816.92812-3.06965 1.70483-4.04428C5.29662 6.82979 5 6.44954 5 6c0-.55228.44772-1 1-1h1V3Z"
	/> <path fill="currentColor" d="M20 17v-5h-8v5h8Z" />
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
@prop ariaLabel = 'jar solid'
@prop ...restProps
-->
