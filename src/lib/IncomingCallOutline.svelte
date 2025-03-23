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
		ariaLabel = 'incoming call outline',
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
		d="M19.0225 4 14 8.98132m0 0 3.03.00002M14 8.98132V5.99998m4.2327 8.51492-1.1431-1.1439c-1.143-1.1439-1.9758-.3696-2.8382.4565-.3159.3161-.7443.4936-1.1911.4936-.4467 0-.8751-.1775-1.191-.4936L9.998 11.9549c-.65643-.6564-.92477-1.4591 0-2.38383.8488-.86837 1.6837-1.61177.4926-2.8037L9.2995 5.57544c-.90492-.90556-1.99137-.383-2.61843.23625-3.13257 3.1118-1.72021 6.77001 1.41066 9.90141s6.78747 4.5465 9.90477 1.4254c.1744-.1461.551-.565.6473-.7712.0962-.2062.1461-.4311.1461-.6587 0-.2277-.0499-.4525-.1461-.6588-.0963-.2062-.2366-.3888-.4111-.5349Z"
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
@prop ariaLabel = 'incoming call outline'
@prop ...restProps
-->
