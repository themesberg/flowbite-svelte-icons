<script lang="ts">
  import type { Component } from 'svelte';
  const config = {
    size: "xl",
    color: '#FF5733'
  };
  import { IconSolid } from 'flowbite-svelte-icons';
  export let icon: Component;
</script>

<IconSolid {...config} {icon} />