<script>
  import { setContext } from 'svelte';
  import { AdjustmentsHorizontalOutline, AlignCenterOutline } from '$lib';
  const iconCtx = {
    size: 'xl', // Icon size in pixels
    role: 'svg icon image'
  };
  setContext('iconCtx', iconCtx);
</script>

<AdjustmentsHorizontalOutline color="#ff2233" />
<AlignCenterOutline color="#990022" />
