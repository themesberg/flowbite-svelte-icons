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
let { size = ctx.size || "md", role, class: classname, ariaLabel = "star half stroke solid,", ...restProps } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="currentColor"
	{...restProps}
	class={twMerge('shrink-0', sizes[size], classname)}
	{role}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"
>
	<path
		fill="currentColor"
		d="m13 20 2.9 1.7a2 2 0 0 0 3-2.2l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.4L13.8 4a2 2 0 0 0-.8-1v17ZM11 3a2 2 0 0 0-.8 1L8.4 8.2l-4.6.4A2 2 0 0 0 2.7 12l3.5 3-1 4.4A2 2 0 0 0 8 21.7l2.9-1.8V3Z"
	/>
</svg>
