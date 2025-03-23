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
		ariaLabel = 'cubes stacked solid',
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
		d="M11.5039 3.13176c.3074-.17568.6848-.17568.9923 0l3.5554 2.0317L12 7.42604 7.94841 5.16346l3.55549-2.0317Zm-4.50388 3.7928L7 10.2768l-3.15822 1.8047 4.14118 2.205L11 12.5625V9.15832L7.00002 6.92456ZM3 13.8991v3.8152c0 .3588.19229.6902.50386.8682l3.49615 1.9978V16.029L3 13.8991Zm6.00001 6.6812L12 18.866l3 1.7143v-4.5714l-3-1.7143-2.99999 1.7142v4.5715Zm7.99999 0 3.4961-1.9978c.3116-.178.5039-.5094.5039-.8682v-3.8152l-4 2.1299v4.5513Zm3.1582-8.4988L17 10.2768V6.92457l-4 2.23375v3.40418l3.0171 1.724 4.1411-2.205Z"
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
@prop ariaLabel = 'cubes stacked solid'
@prop ...restProps
-->
