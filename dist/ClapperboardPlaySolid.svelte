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
let { size = ctx.size || "md", role, class: classname, ariaLabel = "clapperboard play solid,", ...restProps } = $props();
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
		fill-rule="evenodd"
		d="M19 3a2 2 0 0 1 2 2v2h-2V5.4L17.4 7h-2.8l2-2h-2.2l-2 2H9.6l2-2H9.4l-2 2H3V5c0-1.1.9-2 2-2h14ZM3 9v10c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V9H3Zm2-2.4L6.6 5H5v1.6ZM9.6 11a1 1 0 0 1 1 .1l4 3a1 1 0 0 1 0 1.6l-4 3A1 1 0 0 1 9 18v-6c0-.4.2-.7.6-.9Z"
		clip-rule="evenodd"
	/>
</svg>
