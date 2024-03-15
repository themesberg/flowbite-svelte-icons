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
  ariaLabel = "rocket outline,",
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
		d="m10 8.1-3.7.3-2 2a1 1 0 0 0 .5 1.6l2.7.3M16 14l-.3 3.7-2 2a1 1 0 0 1-1.6-.5l-.4-2.7m8.2-11.1a1.4 1.4 0 0 0-1.2-1.2c-1.6-.2-4.9-.6-6.3.9a70.7 70.7 0 0 0-6.5 10.6c0 .2.2.4.3.5l.8.9.9.8a1 1 0 0 0 1 .2A71 71 0 0 0 19 11.8c1.5-1.5 1.1-4.8.9-6.4Zm-3 3.7A1.9 1.9 0 1 1 13 9a1.9 1.9 0 0 1 3.8 0Z"
	/>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
@props:role?: string;
@props:class?: string;
@props:ariaLabel?:  string; = 'rocket outline,';
-->
