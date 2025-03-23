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
		ariaLabel = 'school xmark solid',
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
		d="M15.3077 15.7016c.3906-.3905 1.0237-.3905 1.4142 0l1.0607 1.0607 1.0607-1.0607c.3905-.3905 1.0237-.3905 1.4142 0 .3905.3905.3905 1.0237 0 1.4142l-1.0607 1.0607 1.0607 1.0606c.3905.3906.3905 1.0237 0 1.4143-.3905.3905-1.0237.3905-1.4142 0l-1.0607-1.0607-1.0607 1.0607c-.3905.3905-1.0236.3905-1.4142 0-.3905-.3906-.3905-1.0237 0-1.4143l1.0607-1.0606-1.0607-1.0607c-.3905-.3905-.3905-1.0237 0-1.4142Z"
		clip-rule="evenodd"
	/>
	<path
		fill-rule="evenodd"
		d="M11.4453 3.16795c.3359-.22393.7735-.22393 1.1094 0l6 4c.4595.30635.5837.92722.2773 1.38675-.1925.28877-.5092.44511-.832.44541-.1748.00016-.3515-.04546-.5112-.1406-.0146-.00873-.0292-.01789-.0435-.02746L16 7.86853v6.04017c-.6348.0038-1.2685.2478-1.7529.7322-.9763.9763-.9763 2.5592 0 3.5356-.7636.7635-.93 1.8982-.4991 2.8235H8V7.86853l-1.44532.96352c-.45952.30635-1.08039.18218-1.38675-.27735-.30635-.45953-.18217-1.0804.27735-1.38675l6.00002-4ZM11 11c-.5523 0-1 .4477-1 1s.4477 1 1 1h2c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2Zm-1-2c0-.55228.4477-1 1-1h2c.5523 0 1 .44772 1 1s-.4477 1-1 1h-2c-.5523 0-1-.44772-1-1Z"
		clip-rule="evenodd"
	/>
	<path
		d="M21 14.3714V12.125c0-.448-.298-.8414-.7293-.9627L18 10.5237v3.9235c.873-.6918 2.1011-.7171 3-.0758Zm-3 2.1735.8433-.8433c.3905-.3905 1.0237-.3905 1.4142 0 .3905.3905.3905 1.0237 0 1.4142l-1.0607 1.0607 1.0607 1.0606c.3905.3906.3905 1.0237 0 1.4143-.3905.3905-1.0237.3905-1.4142 0L18 19.8081v-3.2632Zm-2-1.1361c-.251.0037-.5008.1013-.6923.2928-.3905.3905-.3905 1.0237 0 1.4142l.6923.6923v-2.3993Zm0 3.1361v2.3992c-.251-.0037-.5008-.1013-.6923-.2927-.3905-.3906-.3905-1.0237 0-1.4143L16 18.5449ZM6 10.5237l-2.27075.6386C3.29797 11.2836 3 11.677 3 12.125V20c0 .5523.44772 1 1 1h2V10.5237Z"
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
@prop ariaLabel = 'school xmark solid'
@prop ...restProps
-->
