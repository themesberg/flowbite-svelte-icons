<script>
  import '../app.postcss';
  import Footer from './Footer.svelte';
  import Navbar from './Navbar.svelte';
  import Sidebar from './Sidebar.svelte';
  import { page } from '$app/stores';
  import OnThisPage from './utils/OnThisPage.svelte';
  import { extract } from './utils/Anchor.svelte';
  $: currentUrl = $page.url.pathname;

  let drawerHidden = false;
</script>

<header
  class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
>
  <Navbar bind:drawerHidden />
</header>
<div class="lg:flex">
  {#if !['/', '/outline', '/solid'].includes(currentUrl)}
    <Sidebar bind:drawerHidden />
    <div class="relative">
      <OnThisPage {extract} headingSelector="#mainContent > :where(h2, h3)" />
    </div>
    <div class="relative h-full w-full overflow-y-auto lg:ml-64">
      <slot />
      <Footer />
    </div>
  {:else}
    <div class="relative h-full w-full overflow-y-auto">
      <slot />
      <Footer />
    </div>
  {/if}
</div>
