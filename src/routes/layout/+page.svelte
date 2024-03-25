<script context="module">
  import code from '../utils/code.svelte';
  import h2 from '../utils/h2.svelte';
  import h3 from '../utils/h3.svelte';
  export { h2, h3, code };
</script>

<script>
  import Toc from '../utils/Toc.svelte';
  import { extract } from '../utils/Anchor.svelte';
  import MetaTag from '../utils/MetaTag.svelte';

  export let /** @type {string} */ title;
  export let /** @type {string} */ subtitle;
  export let /** @type {string} */ path;
  export let /** @type {string} */ description;
</script>

<MetaTag {path} {title} {subtitle} {description} />

<main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
  <div class="flex w-full">
    <div
      class="flex flex-col max-w-3xl 2xl:mx-auto px-4 min-w-0 lg:px-8 pb:12 xl:pb-24 lg:pb-16 divide-y divide-gray-200 dark:divide-gray-800"
    >
      <div id="mainContent" class="pb-20 pt-8">
        <slot />
      </div>
    </div>
    <Toc {extract} headingSelector="#mainContent > :where(h2, h3)" />
  </div>
</main>
