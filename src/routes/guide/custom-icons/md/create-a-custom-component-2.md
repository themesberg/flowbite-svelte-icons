<script lang="ts">
  import { IconOutline } from 'flowbite-svelte-icons';
  import { type Component } from 'svelte';
  const config: { size: IconOutline['Props']['size'], color: string, ariaLabel: string } = {
    size: "md",
    color: '#FF5733',
    ariaLabel: "my youtube icon",
  };
  interface Props {
    Icon: Component
  }

  let { Icon }: Props = $props();
</script>
<IconOutline {...config} {Icon} />
