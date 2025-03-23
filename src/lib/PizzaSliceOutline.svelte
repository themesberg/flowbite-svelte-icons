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
		ariaLabel = 'pizza slice outline',
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
	<g clip-path="url(#a)">
		<path
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width={strokeWidth}
			d="m10.4149 10.7623.0005.0109m3.0868 3.0764.0005.0108M8.91554 15.349l.00046.0108m-.8276-8.44549L4.39857 19.9133l12.95163-3.7371m-.8271-8.43475c2.0971 2.09707 3.269 4.77055 3.5172 7.51635.067.7413-.4619 1.3752-1.1869 1.5293-1.0146.2158-1.9613-.5811-2.0926-1.615-.2412-1.9-.9437-3.5721-2.52-5.1484-1.5779-1.57793-3.3173-2.3457-5.25302-2.61955-1.02139-.1445-1.79555-1.1099-1.5387-2.10314.17236-.66653.76818-1.14208 1.45754-1.08543 2.78088.22851 5.49388 1.40332 7.61648 3.52587Z"
		/>
	</g> <defs> <clipPath id="a"> <path fill="#fff" d="M0 0h24v24H0z" /> </clipPath> </defs>
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
@prop ariaLabel = 'pizza slice outline'
@prop ...restProps
-->
