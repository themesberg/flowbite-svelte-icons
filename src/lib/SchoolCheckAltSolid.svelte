<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
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
		ariaLabel = 'school check alt solid',
		...restProps
	}: Props = $props();

	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill={color}
	{...restProps}
	class={twMerge(clsx('shrink-0', sizes[size], className))}
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
		d="M21.7071 14.2929c.3905.3905.3905 1.0237 0 1.4142l-4 4c-.3905.3905-1.0237.3905-1.4142 0l-2-2c-.3905-.3905-.3905-1.0237 0-1.4142.3905-.3905 1.0237-.3905 1.4142 0L17 17.5858l3.2929-3.2929c.3905-.3905 1.0237-.3905 1.4142 0Z"
		clip-rule="evenodd"
	/>
	<path
		d="M6.65111 11.6306 12 5.04736l5.3489 6.58324c.1899.2337.475.3694.7761.3694h2.8655c-.7646.0024-1.5284.2953-2.1118.8787l-1.8821 1.8821c-.6135-.548-1.3982-.8-2.1691-.7559C14.9392 13.6908 15 13.3525 15 13c0-1.6568-1.3432-3-3-3-1.6569 0-3.00001 1.3432-3.00001 3 0 1.6569 1.34311 3 3.00001 3 .0579 0 .1154-.0016.1726-.0049-.3747 1.0565-.1393 2.2808.7061 3.1262l.8787.8787H4c-.55228 0-1-.4477-1-1v-7h2.87499c.30113 0 .58623-.1357.77612-.3694Z"
	/>
	<path
		d="M12 12c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4477 1-1-.4477-1-1-1Zm-9.5-2 2.7-3.59999c.18885-.2518.48524-.4.8-.4h2.64902L5.39902 10H2.5Zm12.851-3.99999L18.601 10H21.5l-2.7-3.59999c-.1888-.2518-.4852-.4-.8-.4h-2.649Z"
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
@prop ariaLabel = 'school check alt solid'
@prop ...restProps
-->
