<script context="module">
  import code from '../utils/code.svelte';
  import h2 from '../utils/h2.svelte';
  import h3 from '../utils/h3.svelte';
  export { h2, h3, code };
</script>

<script>
  import Toc from '../utils/Toc.svelte';
  import { extract } from '../utils/Anchor.svelte';
</script>

<main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
  <div class="flex w-full">
    <div
      class="flex flex-col max-w-4xl mx-auto px-4 min-w-0 lg:px-8 pb:12 xl:pb-24 lg:pb-16 divide-y divide-gray-200 dark:divide-gray-800"
    >
      <div id="mainContent" class="py-8">
        <slot />
      </div>
    </div>
    <Toc {extract} headingSelector="#mainContent > :where(h2, h3)" />
  </div>
</main>
