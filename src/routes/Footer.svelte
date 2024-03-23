<script lang="ts">
  import { Card, Frame, type LinkType } from 'flowbite-svelte';
  import { DiscordSolid, GithubSolid, TwitterSolid } from '$lib';
  import type { ComponentType } from 'svelte';

  const links: LinkType[] = [
    { name: 'Released under the MIT License. ' },
    { name: 'Copyright © 2022-present Shinichi Okada' }
  ];

  const brands: [ComponentType, string][] = [
    [DiscordSolid, 'https://discord.com/invite/4eeurUVvTy'],
    [TwitterSolid, 'https://twitter.com/shinokada'],
    [GithubSolid, 'https://github.com/themesberg/flowbite-svelte-icons']
  ];
</script>

<Frame
  tag="footer"
  rounded
  shadow
  class="bg-white p-4 shadow dark:bg-neutral-900 md:flex md:items-center md:justify-between md:p-6 mt-24 border-t xl:p-8"
>
  <ul class="mb-6 flex flex-wrap items-center space-y-1 sm:gap-4 md:mb-0 xl:gap-6">
    {#each links as { name }}
      <li>
        <span class="mr-4 text-sm font-normal text-gray-500 dark:text-gray-400 sm:mr-6">
          {name}
        </span>
      </li>
    {/each}
  </ul>
  <div class="flex space-x-6 sm:justify-center">
    {#each brands as [component, href]}
      <a {href} class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
        <svelte:component this={component} size="md" />
      </a>
    {/each}
  </div>
</Frame>
