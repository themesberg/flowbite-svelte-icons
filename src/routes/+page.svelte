<script>
	import * as Icons from '$lib';
	import { filterIconsByKeyword, random_tailwind_color, random_hex_color_code } from './utils/helpers.js';
	const keywordsToInclude = 'Outline';
	const keyIcons = filterIconsByKeyword(Icons, keywordsToInclude);
	let searchTerm = '';

	let filteredEntries = Object.entries(keyIcons).filter(([name, component]) => {
		return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
	});
	let size = $state(6);
</script>

Hi

<div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">
	{#each filteredEntries as [name, component]}
		<div class="flex gap-4 items-center text-lg">
			<svelte:component this={component} class="shrink-0 h-{size} w-{size}" />
			{name}
		</div>
	{/each}
</div>
