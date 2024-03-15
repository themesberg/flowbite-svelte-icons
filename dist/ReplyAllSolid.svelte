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
  ariaLabel = "reply all solid,",
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
		d="M9.5 6.7c.4-.3.4-1 0-1.4a1 1 0 0 0-1.3 0l-5.5 4.9a2 2 0 0 0 0 3l5.5 5.1c.5.4 1 .4 1.5 0 .3-.5.3-1-.1-1.5l-5.6-5v-.1l5.5-5ZM16 16v-.4a4.1 4.1 0 0 1 2.7 2.4 1.7 1.7 0 0 0 2 1 1.7 1.7 0 0 0 1.3-1.7V16c0-3.8-2.5-7-6-7.6v-.7a2 2 0 0 0-2-2.1 2 2 0 0 0-1.1.4l-5.1 4.3a2.1 2.1 0 0 0 0 3.1l5 4.3h.1A2 2 0 0 0 16 16Z"
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
@props:ariaLabel?:  string; = 'reply all solid,';
-->
