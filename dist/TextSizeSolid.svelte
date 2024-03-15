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
  ariaLabel = "text size solid,",
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
		d="M2 5c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v1.2a1 1 0 1 1-2 0V6H9v12h2a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h2V6H4v.2a1 1 0 1 1-2 0V5Zm10 6c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v1.2a1 1 0 1 1-2 0V12h-2v6h.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h.5v-6h-2v.2a1 1 0 1 1-2 0V11Z"
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
@props:ariaLabel?:  string; = 'text size solid,';
-->
