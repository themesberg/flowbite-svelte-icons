<script lang="ts">
  import { AngleLeftOutline } from 'flowbite-svelte-icons';
  import MyIcon from 'path/to/MyIcon.svelte'
  const config: { size: IconOutline['Props']['size'], color: string, ariaLabel: string } = {
    size: "xl",
    color: '#FF5733',
    ariaLabel: "my addressbook icon",
  };
</script>

<MyIcon {...config} Icon={AngleLeftOutline} />
