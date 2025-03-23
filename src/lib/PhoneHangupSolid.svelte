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
		ariaLabel = 'phone hangup solid',
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
		d="M12.017 6.995c-2.306 0-4.534.408-6.215 1.507-1.737 1.135-2.788 2.944-2.797 5.451a4.8 4.8 0 0 0 .01.62c.015.193.047.512.138.763a2.557 2.557 0 0 0 2.579 1.677H7.31a2.685 2.685 0 0 0 2.685-2.684v-.645a.684.684 0 0 1 .684-.684h2.647a.686.686 0 0 1 .686.687v.645c0 .712.284 1.395.787 1.898.478.478 1.101.787 1.847.787h1.647a2.555 2.555 0 0 0 2.575-1.674c.09-.25.123-.57.137-.763.015-.2.022-.433.01-.617-.002-2.508-1.049-4.32-2.785-5.458-1.68-1.1-3.907-1.51-6.213-1.51Z"
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
@prop ariaLabel = 'phone hangup solid'
@prop ...restProps
-->
