<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: "xl",
    color: '#FF5733'
  };
  import { IconSolid } from 'flowbite-svelte-icons';
  export let icon: ComponentType;
</script>

<IconSolid {...config} {icon} />