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
		ariaLabel = 'close sidebar solid',
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
		fill-rule="evenodd"
		d="M10 4H4c-1.10457 0-2 .89543-2 2v12c0 1.1046.89543 2 2 2h6V4ZM7.79283 9.29289c.39053.39053.39053 1.02371 0 1.41421L6.5 11.9999l1.29283 1.2929c.39053.3905.39053 1.0237 0 1.4142-.39052.3905-1.02368.3905-1.41421 0l-1.99994-2c-.39052-.3905-.39052-1.0236 0-1.4142l1.99994-1.99991c.39053-.39052 1.02369-.39052 1.41421 0Z"
		clip-rule="evenodd"
	/> <path d="M12 20h8c1.1046 0 2-.8954 2-2V6c0-1.10457-.8954-2-2-2h-8v16Z" />
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
@prop ariaLabel = 'close sidebar solid'
@prop ...restProps
-->
