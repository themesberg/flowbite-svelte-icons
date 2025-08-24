<script lang="ts">
  import { DocPage } from 'runes-webkit';
  import type { Snippet } from 'svelte';
  interface Props {
    children: Snippet;
  }
  let { children }: Props = $props();
</script>

<DocPage mainClass="mx-auto lg:pl-64">
  {@render children()}
</DocPage>
