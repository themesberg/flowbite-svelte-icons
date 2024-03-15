<script lang="ts">
  type IconConfig = {
    config1: {
      size: string;
      color: string;
    };
    config2: {
      size: string;
      color: string;
    };
  };
  import config from '$lib/icon.config.json';
  import { IconOutline, IconSolid, AngleLeftOutline, ArrowRightSolid } from 'flowbite-svelte-icons';
  const iconConfig: IconConfig = config;
  const config1 = iconConfig.config1;
  const config2 = iconConfig.config2;
</script>

<IconOutline {...config1} icon="{AngleLeftOutline}" />
<IconSolid {...config2} icon="{ArrowRightSolid}" />