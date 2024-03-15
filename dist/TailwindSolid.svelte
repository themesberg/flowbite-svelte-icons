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
  ariaLabel = "tailwind solid,",
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
		d="M11.8 5.7A4.8 4.8 0 0 0 7 10a3.4 3.4 0 0 1 2.7-1.7c1.7 0 3 2 3.8 2.6a5.7 5.7 0 0 0 5.4 1c2-.7 2.9-3 3.1-4-1 1.4-2.4 2.2-4.3 1.2-1.2-.6-2.1-3.4-6-3.3Zm-5 6.3A4.8 4.8 0 0 0 2 16.2a3.4 3.4 0 0 1 2.7-1.7c1.7 0 3 2 3.8 2.6a5.7 5.7 0 0 0 5.4.9c2-.7 3-2.9 3.1-4-1 1.4-2.4 2.3-4.2 1.3-1.3-.7-2.2-3.4-6-3.3Z"
	/>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
@props:role?: string;
@props:class?: string;
@props:ariaLabel?:  string; = 'tailwind solid,';
-->
