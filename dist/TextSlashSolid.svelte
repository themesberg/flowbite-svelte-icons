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
let { size = ctx.size || "md", role, class: classname, ariaLabel = "text slash solid,", ...restProps } = $props();
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
		d="M13.2 4H7a1 1 0 0 0-1 .6l-.3-.3a1 1 0 0 0-1.4 1.4l14 14a1 1 0 0 0 1.4-1.4l-7-7L14 6h4v.2a1 1 0 1 0 2 0V5c0-.6-.4-1-1-1h-5.8ZM11 9.6 12 6H8v.5l3 3Zm-.1 4.4c.5.2.8.7.7 1.2l-.7 2.8H13a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2h1.8l.9-3.2a1 1 0 0 1 1.2-.8Z"
		clip-rule="evenodd"
	/>
</svg>
