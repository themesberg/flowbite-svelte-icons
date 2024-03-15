<script>import { getContext } from "svelte";
import { twMerge } from "tailwind-merge";
const ctx = getContext("iconCtx") ?? {};
const sizes = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8"
};
let {
  size = ctx.size || "md",
  role,
  class: classname,
  ariaLabel = "face grin stars outline,",
  ...restProps
} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	{...restProps}
	class={twMerge('shrink-0', sizes[size], classname)}
	{role}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"
>
	<path
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
	/>
	<path
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M17 13c0 2-2.2 4.5-5 4.5S7 15 7 13c0 1.4 10 1.4 10 0Z"
	/>
	<path
		fill="currentColor"
		d="m9 6.8.6 1.3 1.4.2-1 1 .2 1.3L9 10l-1.2.6.2-1.4-1-1 1.4-.1.6-1.3Zm6 0 .6 1.3 1.4.2-1 1 .2 1.3L15 10l-1.2.6.2-1.4-1-1 1.4-.1.6-1.3Z"
	/>
	<path
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		d="m9 6.8.6 1.3 1.4.2-1 1 .2 1.3L9 10l-1.2.6.2-1.4-1-1 1.4-.1.6-1.3Zm6 0 .6 1.3 1.4.2-1 1 .2 1.3L15 10l-1.2.6.2-1.4-1-1 1.4-.1.6-1.3Z"
	/>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
@props:role?: string;
@props:class?: string;
@props:ariaLabel?:  string; = 'face grin stars outline,';
-->
