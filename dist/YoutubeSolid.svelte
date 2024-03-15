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
  ariaLabel = "youtube solid,",
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
		d="M21.7 8c0-.7-.4-1.3-.8-2-.5-.5-1.2-.8-2-.8C16.2 5 12 5 12 5s-4.2 0-7 .2c-.7 0-1.4.3-2 .9-.3.6-.6 1.2-.7 2l-.2 3.1v1.5c0 1.1 0 2.2.2 3.3 0 .7.4 1.3.8 2 .6.5 1.4.8 2.2.8l6.7.2s4.2 0 7-.2c.7 0 1.4-.3 2-.9.3-.5.6-1.2.7-2l.2-3.1v-1.6c0-1 0-2.1-.2-3.2ZM10 14.6V9l5.4 2.8-5.4 2.8Z"
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
@props:ariaLabel?:  string; = 'youtube solid,';
-->
