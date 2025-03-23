<script lang="ts">
	import { IconPage, filterIconsByKeyword, excludeItemsByKeywords } from 'runes-webkit';
	import * as icons from '$lib';

	const keywordsToInclude = 'Outline';
	const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
	const finalIcons = excludeItemsByKeywords(keyIcons, 'IconOutline');
</script>

<IconPage
	icons={finalIcons}
	sizeByTailwind
	title="Outline Icons - Flowbite Svelte Icons"
	defaultSize="6"
	maxSize="10"
	minSize="4"
	tab1Class="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
/>
