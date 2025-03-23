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
		ariaLabel = 'jar wheat outline',
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
		d="M16 6H8m8 0s3 2.5 3 5v8.002C19 20.6589 17.6569 22 16 22H8c-1.65685 0-3-1.3411-3-2.998V11c0-2.5 3-5 3-5m8 0V3H8v3m4 3v10M6 6h12m-4.8345 9.7454c-.323.2567-.9647 1.1716-.9257 1.2279.039.0563 1.0454-.4292 1.4008-.6387.3554-.2095.9274-1.1943.9-1.2298-.0275-.0356-1.0771.4039-1.3751.6406Zm0-3.972c-.323.2567-.9647 1.1716-.9257 1.228.039.0563 1.0454-.4292 1.4008-.6387.3554-.2096.9274-1.1943.9-1.2299-.0275-.0355-1.0771.404-1.3751.6406Zm-2.331 3.972c.323.2567.9647 1.1716.9257 1.2279-.0391.0563-1.0455-.4292-1.4009-.6387-.3553-.2095-.92738-1.1943-.8999-1.2298.02748-.0356 1.0771.4039 1.3751.6406Zm0-3.972c.323.2567.9647 1.1716.9257 1.228-.0391.0563-1.0455-.4292-1.4009-.6387-.3553-.2096-.92738-1.1943-.8999-1.2299.02748-.0355 1.0771.404 1.3751.6406Z"
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
@prop ariaLabel = 'jar wheat outline'
@prop ...restProps
-->
