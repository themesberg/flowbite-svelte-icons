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
		ariaLabel = 'cheese solid',
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
		d="M15 3c-.1786 0-.3148.04901-.3477.06086l-.0019.00067c-.0536.01922-.0966.03945-.1218.05185-.0518.02551-.0982.05265-.1303.07208-.0678.04099-.1431.0911-.2151.14063-.1473.10137-.3263.23197-.4968.36132-.1692.12838-.3437.266-.4787.38123-.0636.05432-.1392.12126-.2038.18822-.0266.02752-.088.09218-.1456.17829-.0249.03726-.0901.13788-.133.281-.0354.11767-.1317.53104.1752.91753.2792.35149.2765.58359.2431.72327-.0431.18039-.193.41708-.5073.64046-.4465.31726-1.0772.21057-1.3944-.2359-.1546-.21753-.3897-.36425-.653-.40752-.2634-.04326-.5331.02052-.74913.17715L3.67565 11H20.9672c-.2133-3.17401-1.4351-5.16089-2.7614-6.3653-.7159-.65012-1.4371-1.04951-1.9922-1.28791-.2778-.11933-.5168-.19955-.6971-.25131-.0899-.02583-.1674-.04518-.2298-.05899-.0308-.0068-.0614-.01302-.0904-.01815-.0141-.00248-.0326-.00556-.0533-.00839C15.1364 3.00899 15.0741 3 15 3Z"
	/>
	<path
		fill-rule="evenodd"
		d="M21 13H3v7c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1v-7ZM7 15c0-.5523.44772-1 1-1h.01c.55228 0 1 .4477 1 1s-.44772 1-1 1H8c-.55228 0-1-.4477-1-1Zm8 0c0-.5523.4477-1 1-1h.01c.5523 0 1 .4477 1 1s-.4477 1-1 1H16c-.5523 0-1-.4477-1-1Zm-4 2c0-.5523.4477-1 1-1h.01c.5523 0 1 .4477 1 1s-.4477 1-1 1H12c-.5523 0-1-.4477-1-1Z"
		clip-rule="evenodd"
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
@prop ariaLabel = 'cheese solid'
@prop ...restProps
-->
