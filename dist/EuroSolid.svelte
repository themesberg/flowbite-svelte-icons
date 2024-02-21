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
let { size = ctx.size || "md", role, class: classname, ariaLabel = "euro solid,", ...restProps } = $props();
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
		d="M7.3 9c1-3.4 3.8-6 7.3-6a7 7 0 0 1 4 1.3 1 1 0 1 1-1.2 1.6 5 5 0 0 0-2.8-.9c-2.2 0-4.3 1.6-5.2 4h5.8a1 1 0 1 1 0 2H9a8.7 8.7 0 0 0 0 2h6.3a1 1 0 1 1 0 2H9.4c1 2.4 3 4 5.2 4 1 0 2-.3 2.8-.9a1 1 0 1 1 1.2 1.6 7 7 0 0 1-4 1.3c-3.5 0-6.3-2.6-7.3-6H6a1 1 0 1 1 0-2h.9a10.4 10.4 0 0 1 0-2H6a1 1 0 1 1 0-2h1.3Z"
		clip-rule="evenodd"
	/>
</svg>
