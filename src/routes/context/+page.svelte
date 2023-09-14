<script>
  import { setContext } from 'svelte';
  import { AddressCardSolid, WindowRestoreOutline } from '$lib';
  const iconCtx = {
    size: 'xl', // Icon size in pixels
    role: 'svg icon image'
  };
  setContext('iconCtx', iconCtx);
</script>

<AddressCardSolid color="#ff2233" />
<WindowRestoreOutline color="#990022" />
