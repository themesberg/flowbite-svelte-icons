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
		ariaLabel = 'hotdog solid',
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
		fill-rule="evenodd"
		d="M10 2.53528c.5883-.34034 1.2714-.53513 2-.53513.7286 0 1.4117.19479 2 .53513V21.465c-.5883.3404-1.2714.5352-2 .5352-.7286 0-1.4117-.1948-2-.5352V2.53528Zm3.2071 5.17192c.3905-.39053.3905-1.02369 0-1.41422-.3905-.39052-1.0237-.39052-1.4142 0l-1 1c-.3905.39053-.3905 1.02369 0 1.41422.3905.39052 1.0237.39052 1.4142 0l1-1Zm0 4.5c.3905-.3905.3905-1.0237 0-1.4142-.3905-.3905-1.0237-.3905-1.4142 0l-1 1c-.3905.3905-.3905 1.0237 0 1.4142.3905.3905 1.0237.3905 1.4142 0l1-1Zm0 4.5c.3905-.3905.3905-1.0237 0-1.4142-.3905-.3905-1.0237-.3905-1.4142 0l-1 1c-.3905.3905-.3905 1.0237 0 1.4142.3905.3905 1.0237.3905 1.4142 0l1-1Z"
		clip-rule="evenodd"
	/>
	<path
		fill="currentColor"
		d="M8 3.02762c-2.24998.24872-4 2.15626-4 4.47253v9.00005c0 2.3162 1.75002 4.2238 4 4.4725V3.02762Zm8 17.94508c2.25-.2487 4-2.1563 4-4.4725V7.50015c0-2.31627-1.75-4.22381-4-4.47253V20.9727Z"
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
@prop ariaLabel = 'hotdog solid'
@prop ...restProps
-->
