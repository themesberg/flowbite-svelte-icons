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
		ariaLabel = 'carrot solid',
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
		d="M16.0001 3c.5522 0 1 .44772 1 1v1.64215l1.5644-1.51254c.397-.38389 1.0301-.37322 1.414.02383.3839.39705.3732 1.03013-.0239 1.41401L18.473 6.99998l1.5271.00001c.5522 0 1 .44772.9999 1 0 .55229-.4477 1-1 1l-2.1048-.00001c.263.59002.4154 1.22712.4292 1.89222.0195.9368-.2372 1.8739-.7777 2.7561l-2.8459-2.7774c-.3952-.3857-1.0284-.378-1.4141.0173-.3857.3952-.378 1.0283.0172 1.4141l2.9486 2.8774c-.8296.7625-2.1057 1.7284-3.5125 2.6476-.0039-.0043-.0079-.0086-.0119-.0129l-2.88472-3.0631c-.37864-.402-1.01152-.421-1.41358-.0424-.40206.3787-.42104 1.0115-.0424 1.4136l2.6129 2.7745c-.189.1089-.3781.2152-.5666.3186-1.21703.6674-2.4674 1.2427-3.553 1.5412-.54097.1487-1.09271.2436-1.60567.2207-.51242-.0228-1.08874-.1699-1.53164-.6128-.44291-.4429-.58999-1.0192-.61281-1.5316-.02284-.513.07199-1.0647.22074-1.6057.29851-1.0856.87376-2.336 1.54118-3.553.62156-1.1334 1.35187-2.2891 2.07312-3.3185l2.71447 2.617c.39761.3834 1.03061.3718 1.41401-.0258.3833-.3976.3717-1.0306-.0259-1.414L8.17235 8.74115c.3837-.47727.7425-.88572 1.05449-1.19772 1.22356-1.22358 2.57606-1.84689 3.94556-1.84108.6464.00273 1.2596.1455 1.8277.39684V4c0-.55228.4477-1 1-1Z"
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
@prop ariaLabel = 'carrot solid'
@prop ...restProps
-->
