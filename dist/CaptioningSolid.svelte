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
let { size = ctx.size || "md", role, class: classname, ariaLabel = "captioning solid,", ...restProps } = $props();
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
		d="M2 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm7 4.9a1.5 1.5 0 0 1 1.4 0 1 1 0 1 0 1.1-1.7 3.5 3.5 0 1 0-.2 6 1 1 0 1 0-1-1.8A1.5 1.5 0 1 1 9 11Zm6.1 0a1.5 1.5 0 0 1 1.5 0 1 1 0 1 0 1.1-1.7 3.5 3.5 0 1 0-.2 6 1 1 0 1 0-1-1.8 1.5 1.5 0 1 1-1.4-2.5Z"
		clip-rule="evenodd"
	/>
</svg>
