<script>
  import * as Icon from '$lib/index.js';
  import DarkMode from 'flowbite-svelte/DarkMode.svelte';
  let myClass = 'inline m-1 ';
</script>

<DarkMode />
<div class="p-8 text-red-700 dark:text-green-300">
  <Icon.AddressCardSolid size="md" class={myClass} />
  <Icon.AdjustmentsHorizontalOutline size="md" class={myClass} />
  <Icon.AdjustmentsHorizontalSolid size="md" class={myClass} />
  <Icon.AdjustmentsVerticalOutline size="md" class={myClass} />
  <Icon.AdjustmentsVerticalSolid size="md" class={myClass} />
</div>
