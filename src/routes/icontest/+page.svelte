<script>
  import Icon from '$lib/Icon.svelte';
  import icons from '$lib/icons.js';
  import { onMount } from 'svelte';
  const props = {
    name: 'address-card-solid',
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Icon({ target: document.body, props });
  });
</script>
<h1>Flowbite Svelte Icons</h1>
<h2>Default</h2>
<Icon name="address-card-solid" />
<h2>Size</h2>
"xs" | "sm" | "md" | "lg" | "xl"
<Icon name="address-card-solid" size="xs" />
<Icon name="address-card-solid" size="sm" />
<Icon name="address-card-solid" size="md" />
<Icon name="address-card-solid" size="lg" />
<Icon name="address-card-solid" size="xl" />
h-24 w-24
<Icon name="address-card-solid" class="h-24 w-24 text-blue-700 mr-4" />

<h2>Color</h2>

<Icon name="address-card-solid" size="md" class="text-red-700 dark:text-green-300 inline m-1"/>

<div class="text-red-700 dark:text-green-300 inline m-1">
  <Icon name="address-card-solid" size="md" />
</div>

<h2>Dark mode</h2>
<Icon name="address-card-solid" class="text-blue-700 dark:text-red-500" />

<h2>Aria label</h2>
<Icon name="address-card-solid" class="text-red-700"  ariaLabel="red address card solid" />

<h2>Unfocusible</h2>
<Icon name="address-card-solid" tabindex="-1" />

<h2>Other attributes</h2>
<Icon name="address-card-solid" tabindex="0" />

<h2>Svelte component</h2>
<svelte:component this="{Icon}" name="address-card-solid" />

<h2>onMount</h2>

<h2>Import all</h2>
<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">
{#each Object.keys(icons) as name}
<div class="flex gap-4 items-center text-lg inline">
  <Icon name={name} size="md" class="inline" />
  {name}
</div>
{/each}
</div>