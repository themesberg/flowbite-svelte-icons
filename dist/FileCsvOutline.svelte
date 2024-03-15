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
  ariaLabel = "file csv outline,",
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
		d="M5 10V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1v6M5 19v1c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-1M10 3v4c0 .6-.4 1-1 1H5m2.7 9h-1A1.6 1.6 0 0 1 5 15.4v-1.8A1.6 1.6 0 0 1 6.6 12h1m8.4 0 1.4 4.8L19 12m-6-.2h-1a1.3 1.3 0 0 0-1.4 1.2 1.3 1.3 0 0 0 1.2 1.5h.5a1.3 1.3 0 0 1 1.3 1.7c-.2.6-.7.8-1.4.8h-1"
	/>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
@props:role?: string;
@props:class?: string;
@props:ariaLabel?:  string; = 'file csv outline,';
-->
