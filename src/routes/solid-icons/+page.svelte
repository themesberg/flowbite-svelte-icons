<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { IconPage, filterIconsByKeyword } from 'runes-webkit';
  import * as icons from '$lib';

  const keywordsToInclude = 'Solid';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage
  icons={keyIcons as ComponentType}
  sizeByTailwind
  title="Solid Icons - Flowbite Svelte Icons"
  defaultSize="6"
  maxSize="10"
  minSize="4"
  i_p_tabitem_div_1="md:grid-cols-2 lg:grid-cols-3"
/>
