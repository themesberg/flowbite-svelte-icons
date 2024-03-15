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
  ariaLabel = "building solid,",
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
		fill="currentColor"
		fill-rule="evenodd"
		d="M4 4c0-.6.4-1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H9Zm5 0a1 1 0 0 0-1 1v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1H9Zm5 0a1 1 0 0 0-1 1v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z"
		clip-rule="evenodd"
	/>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
@props:role?: string;
@props:class?: string;
@props:ariaLabel?:  string; = 'building solid,';
-->
