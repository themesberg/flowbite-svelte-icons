<script>
  import * as Icons from '$lib';
  import { filterIconsByKeyword, random_tailwind_color, random_hex_color_code } from '../utils/helpers';
  const keywordsToInclude = '';
  const keyIcons = filterIconsByKeyword(Icons, keywordsToInclude);
  let searchTerm = '';

  let filteredEntries = Object.entries(keyIcons).filter(([name, component]) => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  let size = $state(6);
</script>

<div
class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white"
>
{#each filteredEntries as [name, component]}
  <div class="flex gap-4 items-center text-lg">
    <svelte:component
      this={component}
      class="{random_tailwind_color()} shrink-0 h-{size} w-{size}"
    />
    {name}
  </div>
{/each}
</div>