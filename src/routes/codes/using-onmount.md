<script>
  import { AddressBookOutline } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new AddressBookOutline({ target: document.body, props });
  });
</script>