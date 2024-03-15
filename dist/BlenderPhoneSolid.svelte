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
  ariaLabel = "blender phone solid,",
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
		d="M11 4a1 1 0 0 0-1 1v10h10.5l.5-3h-5a1 1 0 1 1 0-2h5.3l.2-1H16a1 1 0 1 1 0-2h5.9v-.7A2 2 0 0 0 20.2 4H11ZM9 18c0-.4 0-.7.2-1h11.6l.2 1v1c0 .6-.4 1-1 1H10a1 1 0 0 1-1-1v-1Zm-7-7c0 2 .3 4.1 1 6.1.2.5 1.6.9 2.2.9h1.3l.5-.1c.2 0 .3-.1.4-.3.2 0 .2-.2.3-.4v-.4l-.2-2.2a1 1 0 0 0-.4-.7c-.2-.2-.5-.3-.8-.3h-1L5 11c0-.9 0-1.7.2-2.6h1.2l.9-.3.4-.7.2-2.2v-.4a1 1 0 0 0-.3-.4c-.1-.2-.3-.2-.4-.3L6.8 4H4.3c-.3 0-.6 0-.8.2-.3.2-.5.4-.6.7-.6 2-1 4-.9 6.1Z"
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
@props:ariaLabel?:  string; = 'blender phone solid,';
-->
