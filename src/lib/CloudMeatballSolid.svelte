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
		ariaLabel = 'cloud meatball solid',
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
		d="M5.99997 17c-.55229 0-1 .4477-1 1s.44771 1 1 1h.01c.55228 0 1-.4477 1-1s-.44772-1-1-1h-.01ZM18 17c-.5523 0-1 .4477-1 1s.4477 1 1 1h.01c.5523 0 1-.4477 1-1s-.4477-1-1-1H18Z"
	/>
	<path
		fill-rule="evenodd"
		d="M12 13c.5523 0 1 .4477 1 1v.5858l.4142-.4142c.3905-.3905 1.0237-.3905 1.4142 0 .3905.3905.3905 1.0237 0 1.4142L14.4141 16l.5859.0001c.5523 0 1 .4477 1 1s-.4478 1-1.0001 1L14.4141 18l.4143.4143c.3905.3906.3905 1.0237 0 1.4142-.3906.3906-1.0237.3905-1.4143 0L13 19.4143v.5858c0 .5522-.4477 1-1 1s-1-.4478-1-1v-.5859l-.4143.4142c-.3905.3906-1.02365.3906-1.41417 0-.39053-.3905-.39053-1.0236 0-1.4142L9.58571 18l-.58572.0001c-.55228 0-1.00001-.4477-1.00002-1-.00001-.5523.44769-1 .99998-1L9.58571 16l-.41416-.4141c-.39054-.3905-.39056-1.0237-.00005-1.4142.39052-.3905 1.0237-.3906 1.4142 0l.4143.4142V14c0-.5523.4477-1 1-1Z"
		clip-rule="evenodd"
	/>
	<path
		d="M9.21869 3.96216c1.18841-.77809 2.61801-1.10041 4.02531-.90756 1.4073.19285 2.6974.88787 3.6327 1.95696.8431.96375 1.3466 2.17293 1.4406 3.44244.6029.16797 1.1584.48908 1.6088.93946C20.6137 10.0811 21 11.0137 21 11.9862c0 .9449-.3677 1.9573-1.0739 2.6636-.6417.6416-1.4561.9281-2.2516.9899-.1439-.2824-.3312-.539-.5532-.761 0-.7677-.2929-1.5355-.8787-2.1213-.5858-.5858-1.3535-.8787-2.1213-.8787-.5429-.5429-1.2929-.8786-2.1213-.8786-.8285 0-1.5785.3358-2.12139.8787-.76778 0-1.53555.2929-2.12133.8788-.58574.5857-.87861 1.3535-.87862 2.1212-.18576.1858-.34727.3958-.47938.6249-.77455-.2033-1.48895-.6091-2.06499-1.1851C3.47996 13.4642 3 12.3055 3 11.0973c0-1.1581.38455-2.34287 1.27157-3.22989.74279-.74279 1.74607-1.18271 2.75928-1.2962.45424-1.06098 1.21293-1.97073 2.18784-2.60905Z"
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
@prop ariaLabel = 'cloud meatball solid'
@prop ...restProps
-->
