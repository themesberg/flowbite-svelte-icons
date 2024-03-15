<script>
  import { setContext } from 'svelte';
  import { MapLocationOutline } from 'flowbite-svelte-icons';
  const iconCtx = {
    size: 'xl'
  };
  setContext('iconCtx', iconCtx);
</script>

<MapLocationOutline color="#ff4488" />