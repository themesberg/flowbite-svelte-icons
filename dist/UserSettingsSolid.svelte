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
  ariaLabel = "user settings solid,",
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
		d="M17 10v1.1l1 .5.8-.8 1.4 1.4-.8.8.5 1H21v2h-1.1l-.5 1 .8.8-1.4 1.4-.8-.8a4 4 0 0 1-1 .5V20h-2v-1.1a4 4 0 0 1-1-.5l-.8.8-1.4-1.4.8-.8a4 4 0 0 1-.5-1H11v-2h1.1l.5-1-.8-.8 1.4-1.4.8.8a4 4 0 0 1 1-.5V10h2Zm.4 3.6c.4.4.6.8.6 1.4a2 2 0 0 1-3.4 1.4A2 2 0 0 1 16 13c.5 0 1 .2 1.4.6ZM5 8a4 4 0 1 1 8 .7 7 7 0 0 0-3.3 3.2A4 4 0 0 1 5 8Zm4.3 5H7a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h6.1a7 7 0 0 1-1.8-7Z"
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
@props:ariaLabel?:  string; = 'user settings solid,';
-->
