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
let { size = ctx.size || "md", role, class: classname, ariaLabel = "file copy alt solid,", ...restProps } = $props();
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
	<path fill="currentColor" fill-rule="evenodd" d="M7 9v6a4 4 0 0 0 4 4h4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h1v2Z" clip-rule="evenodd" />
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M13 3v4H9.2c0-.2.2-.3.3-.4l2.4-2.9a2 2 0 0 1 1.1-.6Zm2 0v4a2 2 0 0 1-2 2H9v6c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Z"
		clip-rule="evenodd"
	/>
</svg>
