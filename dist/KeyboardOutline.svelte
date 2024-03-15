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
  ariaLabel = "keyboard outline,",
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
		stroke-linecap="square"
		stroke-width="2"
		d="M8 15h7v0h0-7Zm12-9H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1ZM6 9h0v0h0v0Zm0 3h0v0h0v0Zm0 3h0v0h0v0Zm3-6h0v0h0v0Zm0 3h0v0h0v0Zm3-3h0v0h0v0Zm0 3h0v0h0v0Zm3 0h0v0h0v0Zm3 0h0v0h0v0Zm0 3h0v0h0v0Zm-3-6h0v0h0v0Zm3 0h0v0h0v0Z"
	/>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
@props:role?: string;
@props:class?: string;
@props:ariaLabel?:  string; = 'keyboard outline,';
-->
