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
let { size = ctx.size || "md", role, class: classname, ariaLabel = "ordored list solid,", ...restProps } = $props();
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
		d="M6.5 3.1c.3.2.5.6.5.9v5h1a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2h1V5.6l-.6.3A1 1 0 0 1 3.6 4l2-1a1 1 0 0 1 1 0ZM11 6c0-.6.4-1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm0 6c0-.6.4-1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm-4.6 3A1 1 0 0 0 5 16a1 1 0 0 1-2 0 3 3 0 1 1 5 2.3L7 19h2a1 1 0 1 1 0 2H4a1 1 0 0 1-.6-1.8l3.3-2.5a1 1 0 0 0-.3-1.6Zm4.6 3c0-.6.4-1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z"
		clip-rule="evenodd"
	/>
</svg>
