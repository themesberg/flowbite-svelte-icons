<script>let { icon, size, role, ariaLabel, strokeLinecap, strokeLinejoin, strokeWidth, class: classname, ...restProps } = $props();
</script>

<svelte:component this={icon} {...restProps} {role} {size} {strokeLinecap} {strokeLinejoin} {strokeWidth} class={classname} {ariaLabel} />
