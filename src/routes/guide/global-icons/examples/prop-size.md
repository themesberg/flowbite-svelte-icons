<script>
  import { setContext } from 'svelte';
  import { MapPinOutline } from 'flowbite-svelte-icons';
  const iconCtx = {
    size: 'xl'
  };
  setContext('iconCtx', iconCtx);
</script>

<MapPinOutline color="#ff4488" />
