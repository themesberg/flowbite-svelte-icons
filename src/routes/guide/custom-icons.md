---
layout: mainLayout
title: Flowbite Svelte Icons - Custom Default Icons
subtitle: Custom Default Icons
path: guide/custom-icons
description: Learn how to create a custom default icons.
---

# Custom Default Icons

You can create a custom default icon, by using `IconSolid` or `IconOutline`:

## Create a custom component

Create a Svelte component named `src/lib/MyIcon.svelte`:

```html
<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: "xl",
    color: '#FF5733'
  };
  import { IconSolid } from 'flowbite-svelte-icons';
  export let icon: ComponentType;
</script>

<IconSolid {...config} {icon} />
```

This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

## Implementation in a Page

To use your custom default icon in a Svelte page, do the following:

```html
<script>
  import MyIcon from '$lib/MyIcon.svelte';
  import { AngleLeftSolid } from 'flowbite-svelte-icons';
</script>

<MyIcon icon="{AngleLeftSolid}" />
```

Here, we import the `MyIcon` component and the `AngleLeftSolid` icon. By passing the `AngleLeftSolid` icon to the `icon` prop of MyIcon, you apply the default configuration to the icon.
