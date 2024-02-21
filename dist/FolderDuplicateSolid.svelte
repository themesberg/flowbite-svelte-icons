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
let { size = ctx.size || "md", role, class: classname, ariaLabel = "folder duplicate solid,", ...restProps } = $props();
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
		d="M6 5c0-1.1.9-2 2-2h4.2a2 2 0 0 1 1.6.9L15.2 6H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v-5a3 3 0 0 0-3-3h-3.2l-1.2-1.7A3 3 0 0 0 9.2 6H6V5Z"
		clip-rule="evenodd"
	/>
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M3 9c0-1.1.9-2 2-2h4.2a2 2 0 0 1 1.6.9l1.4 2.1H3V9Zm0 3v7c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2v-7H3Z"
		clip-rule="evenodd"
	/>
</svg>
