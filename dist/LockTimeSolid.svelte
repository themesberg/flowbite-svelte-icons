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
  ariaLabel = "lock time solid,",
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
		d="M10 5a2 2 0 0 0-2 2v3h2.4a7.5 7.5 0 0 0 0 11H5a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1V7a4 4 0 1 1 8 0v1.2c-.7 0-1.3.3-2 .6V7a2 2 0 0 0-2-2Z"
		clip-rule="evenodd"
	/>
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M10 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm6.5-1.5a1 1 0 1 0-2 0v1.5c0 .3.1.5.3.7l1 1a1 1 0 0 0 1.4-1.4l-.7-.7V14Z"
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
@props:ariaLabel?:  string; = 'lock time solid,';
-->
