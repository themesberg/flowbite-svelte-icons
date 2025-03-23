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
		ariaLabel = 'lemon solid',
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
		d="M14.2357 3.27869c1.8195-.86945 3.9007.38069 4.0645 2.36516l.0975 1.18113c.0076.09216.0292.1823.0638.26716l.4506 1.10484c2.1046 5.16042-1.1766 10.97242-6.6746 11.70842l-1.1662.1561s-.0119.002-.0374.0087c-.0288.0074-.0633.0177-.1013.0301-.0764.0249-.1452.0514-.1755.0633.0117-.0046.007-.0024-.0213.0108-.021.0098-.0549.0257-.1048.0494-.0942.0447-.2147.1024-.3364.1609-.2429.1168-.48538.2343-.52094.2515l-.01715.0082c-1.81776.8622-3.89304-.387-4.05675-2.3686-.00127-.0155-.08435-1.0237-.09627-1.1666-.0008-.0054-.0021-.0137-.00399-.0249-.00463-.0272-.01145-.0632-.01997-.1022-.00858-.0394-.01778-.0769-.02671-.1085-.00811-.0288-.01333-.0433-.0143-.046l-.45069-1.1051C2.9832 10.562 6.26445 4.75002 11.7625 4.01408l.066-.00884h.0667c-.0154 0-.0147-.00007.0069-.00241.0242-.00264.0748-.00813.1587-.01959.1294-.01768.2935-.04317.4638-.07293.1709-.02985.3404-.06263.4824-.09437.0709-.01587.1301-.03039.1764-.043.0198-.00541.0347-.00976.0451-.01294l1.0072-.48131Zm-1.5623 5.94643c.5136-.2031.7653-.78409.5622-1.29767-.2031-.51359-.7841-.76529-1.2977-.56219-1.5354.60719-2.6205 1.4812-3.26395 2.67734-.63096 1.1729-.76717 2.5276-.66985 3.9645.03732.551.51427.9674 1.06529.9301.55102-.0373.96741-.5143.93014-1.0653-.08486-1.2529.05647-2.1767.43577-2.8818.3668-.6819 1.0247-1.28514 2.2381-1.76498Z"
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
@prop ariaLabel = 'lemon solid'
@prop ...restProps
-->
