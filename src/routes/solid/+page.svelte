<script>
  import Tabs from 'flowbite-svelte/Tabs.svelte';
  import TabItem from 'flowbite-svelte/TabItem.svelte';
  import TableSearch from 'flowbite-svelte/TableSearch.svelte';
  import * as Icons from '$lib';

  const random_tailwind_color = () => {
    const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
    const shades = ['300', '400', '500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomShade = shades[Math.floor(Math.random() * shades.length)];
    return `text-${randomColor}-${randomShade} dark:text-${randomColor}-${randomShade} shrink-0 h-8 w-8`;
  };
  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  const contentClass = ' rounded-lg dark:bg-gray-900 mt-4';
  let searchTerm = '';

  $: filteredEntries = Object.entries(Icons).filter(([name, component]) => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  let divClass = 'mx-16';
</script>

<TableSearch
  placeholder="Search by icon name"
  hoverable={true}
  bind:inputValue={searchTerm}
  {divClass}
>
  <Tabs style="pill" {contentClass} class="p-4">
    <TabItem open>
      <span slot="title" class="text-lg">Mono</span>
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">
        {#each filteredEntries as [name, component]}
          {#if name.includes('Solid')}
            <div class="flex gap-4 items-center text-lg">
              <svelte:component this={component} class="shrink-0 h-8 w-8" />
              {name}
            </div>
          {/if}
        {/each}
      </div>
    </TabItem>
    <TabItem>
      <span slot="title" class="text-lg">Random Hex Colors</span>
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">
        {#each filteredEntries as [name, component]}
          {#if name.includes('Solid')}
            <div class="flex gap-4 items-center text-lg">
              <svelte:component
                this={component}
                color={random_hex_color_code()}
                class="shrink-0 h-8 w-8"
              />
              {name}
            </div>
          {/if}
        {/each}
      </div>
    </TabItem>
    <TabItem>
      <span slot="title" class="text-lg">Random Tailwind CSS Colors</span>
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">
        {#each filteredEntries as [name, component]}
          {#if name.includes('Solid')}
            <div class="flex gap-4 items-center text-lg">
              <svelte:component this={component} class={random_tailwind_color()} />
              {name}
            </div>
          {/if}
        {/each}
      </div>
    </TabItem>
  </Tabs>
</TableSearch>
