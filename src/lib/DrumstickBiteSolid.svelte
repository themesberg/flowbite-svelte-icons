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
		ariaLabel = 'drumstick bite solid',
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
		d="M10.6223 3.90741c-1.20712-1.20714-3.09489-1.23486-4.30929-.02046-.41495.41495-.71699.96417-.84122 1.55432-.59015.12423-1.13937.42627-1.55432.84122-1.2144 1.2144-1.18669 3.10218.02046 4.30931.96862.9686 2.37548 1.1779 3.52103.5953l1.47896 1.3553c-.05911.3509-.08406.7078-.07998 1.0623.01453 1.26.39197 2.5758 1.00914 3.7262.13522.252.37182.4341.65002.5002.2782.0661.5714.0099.8055-.1543.5376-.3772.9988-.4969 1.3707-.4979.3764-.0009.7303.1199 1.0473.3317.5919.3956.8671 1.1024.4524 2.0481-.1383.3154-.1045.6799.0894.9646.1939.2847.5207.4495.8649.4362 1.437-.0553 2.7584-.8034 3.8989-1.9439 1.1842-1.1842 1.7637-2.5978 1.6758-4.071-.0866-1.4527-.8131-2.8268-1.9736-3.9873-1.1796-1.17955-2.7171-1.95508-4.2554-2.16837-.5785-.08021-1.1679-.08125-1.7413.01127l-1.5065-1.42739c.548-1.13519.3301-2.5124-.6229-3.4654Zm.0919 5.71744L9.2479 8.23554c-.19592-.18563-.30849-.44256-.31213-.71243-.00363-.26987.10196-.52975.29281-.72059.41457-.41457.42454-1.03588-.02046-1.48089-.44501-.44501-1.06633-.43503-1.4809-.02046-.26525.26524-.35944.64193-.30022.89134.08017.33765-.02045.69273-.26584.93813-.2454.2454-.60048.34602-.93813.26584-.24941-.05922-.6261.03498-.89135.30022-.41457.41457-.42455 1.03589.02046 1.4809.44501.44501 1.06633.43503 1.4809.02046.37853-.37854.98803-.39183 1.38271-.03016l1.5307 1.4027c.11824-.1603.24972-.314.39525-.4595.1813-.1813.3728-.34306.5725-.48625Z"
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
@prop ariaLabel = 'drumstick bite solid'
@prop ...restProps
-->
