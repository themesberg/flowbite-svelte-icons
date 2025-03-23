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
		ariaLabel = 'lemon outline',
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
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
		d="M12.3058 8.29519C9.55698 9.38222 8.81979 11.2498 9.00197 13.9395M14.667 4.18096l-1.0565.50487c-.3418.13297-1.523.3194-1.7152.3194-4.83207.6468-7.74553 5.76877-5.88136 10.33957l.4506 1.1049c.07315.1793.1279.4848.13448.5625.00656.0775.09722 1.1779.09749 1.1811.00001.0001 0 .0001.00001.0002.10784 1.3052 1.46355 2.1014 2.63163 1.5474.00336-.0016.00624-.003.00959-.0046.07162-.0347.97416-.4719 1.05206-.5027.081-.032.3576-.1377.5472-.1631l1.168-.1563c4.832-.6468 7.7455-5.7687 5.8813-10.33958l-.4506-1.10485c-.0731-.17935-.1185-.3691-.1345-.56253l-.0975-1.18113c-.1079-1.30718-1.4674-2.10389-2.6367-1.54515Z"
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
@prop ariaLabel = 'lemon outline'
@prop ...restProps
-->
