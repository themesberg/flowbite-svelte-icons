<script>
  import Range from 'flowbite-svelte/Range.svelte';
  import Label from 'flowbite-svelte/Label.svelte';
  import Tabs from 'flowbite-svelte/Tabs.svelte';
  import TabItem from 'flowbite-svelte/TabItem.svelte';
  import TableSearch from 'flowbite-svelte/TableSearch.svelte';
  import {
    filterIconsByKeyword,
    random_tailwind_color,
    random_hex_color_code
  } from '../utils/utils';
  import * as Icons from '$lib';
  const keywordsToInclude = 'Outline';
  const keyIcons = filterIconsByKeyword(Icons, keywordsToInclude);

  const contentClass = ' rounded-lg dark:bg-gray-800 mt-4';
  let searchTerm = '';

  $: filteredEntries = Object.entries(keyIcons).filter(([name]) => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  $: size = 6;
</script>

<div class="m-8 w-full dark:bg-gray-800">
  <h1>Flowbite Svelte Icons: Outline</h1>
  <TableSearch
    placeholder="Search by icon name"
    hoverable={true}
    bind:inputValue={searchTerm}
    divClass="relative overflow-x-auto"
  >
    <div class="xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-3/4 w-full p-4">
      <Label class="text-lg py-4 ">Icon size: {size}</Label>
      <Range id="range1" min="4" max="10" bind:value={size} />
    </div>
    <Tabs style="pill" {contentClass} class="p-4">
      <TabItem open>
        <span slot="title" class="text-lg">Mono</span>
        <div class="grid grid-cols-8 p-2 dark:text-white border dark:bg-sky-950 w-72">
          {#each filteredEntries.slice(50, 90) as [, component]}
            <div class="flex gap-0 items-center text-lg">
              <svelte:component this={component} class="shrink-0 h-{size} w-{size}" />
            </div>
          {/each}
        </div>
      </TabItem>
      <TabItem>
        <span slot="title" class="text-lg">Random Hex Colors</span>
        <div class="grid grid-cols-12 px-4 dark:text-white">
          {#each filteredEntries as [, component]}
            <div class="flex gap-4 items-center text-lg">
              <svelte:component
                this={component}
                color={random_hex_color_code()}
                class="shrink-0 h-{size} w-{size}"
              />
            </div>
          {/each}
        </div>
      </TabItem>
      <TabItem>
        <span slot="title" class="text-lg">Random Tailwind CSS Colors</span>
        <div class="grid grid-cols-12 px-4 dark:text-white">
          {#each filteredEntries as [, component]}
            <div class="flex gap-4 items-center text-lg">
              <svelte:component
                this={component}
                class="{random_tailwind_color()} shrink-0 h-{size} w-{size}"
              />
            </div>
          {/each}
        </div>
      </TabItem>
    </Tabs>
  </TableSearch>
</div>
