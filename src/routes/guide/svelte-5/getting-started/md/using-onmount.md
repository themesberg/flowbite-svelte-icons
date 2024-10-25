<script>
  import { CalendarCheckRegular } from 'svelte-awesome-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new CalendarCheckRegular({ target: document.body, props });
  });
</script>