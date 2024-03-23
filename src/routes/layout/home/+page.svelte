<script context="module">
  import code from '../../utils/code.svelte';
  import h2 from '../../utils/h2.svelte';
  import h3 from '../../utils/h3.svelte';
  export { h2, h3, code };
</script>

<main id="mainContent" class="max-w-6xl mx-auto px-8">
  <slot />
</main>
