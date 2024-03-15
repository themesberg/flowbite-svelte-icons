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
  ariaLabel = "rectangle list solid,",
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
		d="M2 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm5 2a1 1 0 0 0 0 2 1 1 0 1 0 0-2Zm4 0a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-4 3a1 1 0 1 0 0 2 1 1 0 1 0 0-2Zm4 0a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-4 3a1 1 0 1 0 0 2 1 1 0 1 0 0-2Zm4 0a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z"
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
@props:ariaLabel?:  string; = 'rectangle list solid,';
-->
