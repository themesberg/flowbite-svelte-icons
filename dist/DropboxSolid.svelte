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
let { size = ctx.size || "md", role, class: classname, ariaLabel = "dropbox solid,", ...restProps } = $props();
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
	<path fill="currentColor" d="M12 6.2 7 9.4l5 3.2-5 3.2-5-3.3 5-3.1-5-3.2L7 3l5 3.2ZM7 17.8l5-3.2 5 3.2-5 3.2-5-3.2Z" />
	<path fill="currentColor" d="m12 12.5 5-3.1-5-3.2L17 3l5 3.2-5 3.2 5 3.2-5 3.2-5-3.3Z" />
</svg>
