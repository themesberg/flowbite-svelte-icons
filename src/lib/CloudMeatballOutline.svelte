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
		ariaLabel = 'cloud meatball outline',
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
		d="M17.3333 14.6528c.7073 0 1.3856-.2101 1.8857-.7101.5-.5001.781-1.2493.781-1.9565 0-.7073-.281-1.3856-.781-1.8857-.5001-.50007-1.1784-.78102-1.8857-.78102h-.0222c.0133-.14755.0222-.296.0222-.44444-.0033-1.17924-.4328-2.31753-1.2092-3.20508-.7765-.88756-1.8476-1.46455-3.0159-1.62465-1.1683-.1601-2.3551.10749-3.34174.75344-.98658.64596-1.70644 1.62675-2.0269 2.76162-.06223-.00355-.12089-.01866-.184-.01866-.943 0-1.91009.36598-2.57689 1.03277C4.31188 9.24128 4 10.1543 4 11.0973c0 .943.3746 1.8473 1.0414 2.5141.45292.4529 1.01546.7711 1.62527.9285M12 14v3m0 0v3m0-3-2.12134-2.1212M12 17l2.1213 2.1214M12 17H9m3 0h3m-3 0-2.12134 2.1213M12 17l2.1213-2.1213M6 18h.01M18 18h.01"
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
@prop ariaLabel = 'cloud meatball outline'
@prop ...restProps
-->
