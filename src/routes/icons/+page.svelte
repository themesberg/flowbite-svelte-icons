<script>
  import * as Icons from '$lib';
  import { filterIconsByKeyword, random_tailwind_color, random_hex_color_code } from '../utils/helpers';
  const keywordsToInclude = '';
  const keyIcons = filterIconsByKeyword(Icons, keywordsToInclude);
  let searchTerm = '';

  let filteredEntries = Object.entries(keyIcons).filter(([name, component]) => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  // let size = $state(6);
</script>

<div class="grid grid-cols-1 gap-8 px-4 dark:text-white md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {#each filteredEntries as [name, component]}
    <div class="flex items-center gap-4 text-lg">
      <svelte:component this={component} class="shrink-0" size='xl'/>
      {name}
    </div>
  {/each}
</div>