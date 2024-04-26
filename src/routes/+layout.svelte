<script>
  import '../app.postcss';
  import Footer from './Footer.svelte';
  import Navbar from './Navbar.svelte';
  import Sidebar from './Sidebar.svelte';
  import { page } from '$app/stores';
  import OnThisPage from './utils/OnThisPage.svelte';
  import { extract } from './utils/Anchor.svelte';
  import Runatics from './utils/Runatics.svelte';
  export let data;
  const analyticsId = data.ANALYTICS_ID;

  $: currentUrl = $page.url.pathname;

  let drawerHidden = false;
</script>

<Runatics {analyticsId} />
<Navbar bind:drawerHidden />

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
