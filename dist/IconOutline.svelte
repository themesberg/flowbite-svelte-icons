<script>let { icon, size, role, ariaLabel, class: classname, ...restProps } = $props();
</script>

<svelte:component this={icon} {...restProps} {role} {size} class={classname} {ariaLabel} />
