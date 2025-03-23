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
		ariaLabel = 'shrimp outline',
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
		d="M13.5241 12.4701H8c-1.65685 0-3-1.3432-3-3.00001V8.00003h5m3.5241 4.47007c1.6367 0 2.733 1.6825 2.072 3.1798-.3623.8206-1.1749 1.3501-2.072 1.3501H11c-1.10457 0-2 .8955-2 2v1h6.5m-1.9759-7.5299L15.5 7.76388m-5.5.23615c1.8455-1.2511 3.0772-1.40822 5.5-.23615m-5.5.23615v4.47007L8 14m7.5-6.23612c3.1804-.24503 5.5559 2.36222 4.7544 5.44972-.1054.4062-.2247.8398-.3594 1.3107.0165.8114-.0058 1.4881-.0632 2.0873C19.6315 18.7026 17.6006 20 15.5 20m0 0-1.2042-3.1354M15.6675 14h4.3753M10 4.00003H6c-1.10457 0-2 .89543-2 2s.89543 2 2 2"
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
@prop ariaLabel = 'shrimp outline'
@prop ...restProps
-->
