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
let { size = ctx.size || "md", role, class: classname, ariaLabel = "file import outline,", ...restProps } = $props();
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
		d="M5 12V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1v-4m5-13v4c0 .6-.4 1-1 1H5m0 6h9m0 0-2-2m2 2-2 2"
	/>
</svg>
