<script lang="ts">
  import { Button, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
  import { ChevronDownOutline } from '$lib';
  interface LinkType {
    name: string;
    href?: string;
    rel?: string;
    active?: boolean;
  }

  export let extract: (x: HTMLElement) => LinkType = (x: HTMLElement) => ({
    name: x.textContent ?? ''
  });
  export let headingSelector: string;

  let headings: LinkType[] = [];

  function init(_: any) {
    const observer: MutationObserver = new MutationObserver(toc);
    observer.observe(document.body, { childList: true, subtree: true });

    return {
      destroy() {
        observer.disconnect();
      }
    };
  }

  function indent(name: string | undefined) {
    return name === 'H2' ? 'pl-2.5' : 'pl-6';
  }

  function toc() {
    if (typeof document === `undefined`) return; // for SSR

    headings = [...document.querySelectorAll<HTMLElement>(headingSelector)]
      .map(extract)
      .filter((x) => x.name);
  }
</script>

<div
  class="xl:hidden z-20 fixed top-20 p-2 right-6 flex dark:bg-neutral-900 dark:text-white on-this-page"
>
  On this page
  <ChevronDownOutline class="flex-inline w-5 h-5 ms-2 mt-1 text-white dark:text-white" />
</div>
<div use:init>
  {#if headings.length}
    <Dropdown
      triggeredBy=".on-this-page"
      containerClass="w-64 z-20 dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-lg "
    >
      <DropdownItem href="#top" class="ml-2">Return to top</DropdownItem>
      <DropdownDivider />
      {#each headings as { rel, href, name }}
        <DropdownItem>
          <a {href} class={indent(rel)}>{name}</a>
        </DropdownItem>
      {/each}
    </Dropdown>
  {/if}
</div>
