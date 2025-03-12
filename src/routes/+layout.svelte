<script lang="ts">
  import '../app.css';
  import { sineIn } from 'svelte/easing';
  import type { Component } from 'svelte';
  import { page } from '$app/state';
  import { newSidebarList } from './utils/helpers';
  import {
    Footer,
    OnThisPage,
    extract,
    removeHyphensAndCapitalize,
    DotsHorizontalOutline,
    GithubSolid,
    random_tailwind_color,
    XSolid,
    Bluesky
  } from 'runes-webkit';
  import {
    Navbar,
    NavLi,
    NavBrand,
    NavUl,
    uiHelpers,
    Darkmode,
    Dropdown,
    DropdownUl,
    DropdownLi,
    Sidebar,
    SidebarGroup,
    SidebarDropdownWrapper,
    SidebarItem,
    CloseButton,
    SidebarBrand
  } from 'svelte-5-ui-lib';
  import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  import { Runatics } from 'runatics';
  import DynamicCodeBlockStyle from './utils/DynamicCodeBlockStyle.svelte';

  let activeUrl = $state(page.url.pathname);
  $effect(() => {
    activeUrl = page.url.pathname;
  });

  type LiType = {
    name: string;
    href: string;
    Icon?: Component;
  };
  let { children, data } = $props();
  const analyticsId = data.ANALYTICS_ID_ICONS;
  // metaTags
  let metaTags = $state(
    page.data.pageMetaTags
      ? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
      : data.layoutMetaTags
  );

  // sidebar
  const sidebarUi = uiHelpers();
  let isOpen = $state(false);
  const closeSidebar = sidebarUi.close;

  let currentUrl = $state(page.url.pathname);
  const hasPath = (key: string) => currentUrl.includes(key);

  const lis: LiType[] = [
    { name: 'Guide', href: '/guide/svelte-5/getting-started' },
    { name: 'Outline', href: '/outline-icons' },
    { name: 'Solid', href: '/solid-icons' }
  ];
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com'
  };
  const urlsToIncludeSwitcherAndSidebar = ['/guide/', '/guide2/', '/how-to-use', '/quick-start'];
  /*eslint no-undef: "off"*/
  const siteName = removeHyphensAndCapitalize(__NAME__);
  const githubUrl = 'https://github.com/themesberg/flowbite-svelte-icons';
  const twitterUrl = 'https://twitter.com/shinokada';
  const blueskyUrl = 'https://bsky.app/profile/codewithshin.com';

  // nav
  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let headerCls =
    'sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark_bg_theme';
  let navClass =
    'w-full divide-gray-200 border-gray-200 bg-gray-50 dark_bg_theme text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4';
  let divClass = 'ml-auto w-full';
  let ulclass = 'dark:lg:bg-transparent lg:space-x-4';
  function isIncluded(url: string, allowedUrls: string[]): boolean {
    return allowedUrls.some((allowedUrl) => url.startsWith(allowedUrl));
  }
  let urlsToIncludeSwitcher = ['/guide', '/guide2', '/how-to-use', '/quick-start'];
  let include = $derived(isIncluded(currentUrl, urlsToIncludeSwitcher));
  // dropdown
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  let dropdownTransitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };

  $effect(() => {
    navStatus = nav.isOpen;
    dropdownStatus = dropdown.isOpen;
    currentUrl = page.url.pathname;
    metaTags = page.data.pageMetaTags
      ? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
      : data.layoutMetaTags;
    isOpen = sidebarUi.isOpen;
  });
</script>

{#snippet navLi(lis: LiType[])}
  {#each lis as { name, href, Icon }}
    {#if Icon}
      <Icon class="mb-3 h-8 w-8 {random_tailwind_color()}"></Icon>
    {/if}
    <NavLi {href}>{name}</NavLi>
  {/each}
{/snippet}

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags} />

<header class={headerCls}>
  <Navbar {navClass} {toggleNav} {closeNav} {navStatus} breakPoint="lg" fluid div2Class={divClass}>
    {#snippet brand()}
      {#if urlsToIncludeSwitcherAndSidebar.some((path) => currentUrl.startsWith(path))}
        <button
          onclick={sidebarUi.toggle}
          type="button"
          class="z-100 mr-4 mt-1 lg:hidden"
          aria-controls="navbar-default"
        >
          <span class="sr-only">Toggle sidebar menu</span>
          <svg
            class="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      {/if}
      {#if siteName}
        <NavBrand
          {siteName}
          spanClass="self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-primary-500"
        />
      {/if}
      <div class="ml-auto flex items-center lg:order-1">
        {#if include}
          <div class="hidden sm:block">
            <DynamicCodeBlockStyle />
          </div>
        {/if}
        <DotsHorizontalOutline
          onclick={dropdown.toggle}
          class="ml-6 mr-4 dark:text-white"
          size="lg"
        />
        <Darkmode class="m-0 p-2" />
        <div class="relative">
          <Dropdown
            {dropdownStatus}
            {closeDropdown}
            params={dropdownTransitionParams}
            class="absolute -left-[88px] top-2 w-12 p-1.5"
          >
            <DropdownUl class="py-0">
              {#if blueskyUrl}
                <DropdownLi href={blueskyUrl} target="_blank" aClass="p-0.5 m-0">
                  <Bluesky size="30" />
                </DropdownLi>
              {/if}
              {#if twitterUrl}
                <DropdownLi href={twitterUrl} target="_blank" aClass="p-2 m-0"
                  ><XSolid /></DropdownLi
                >
              {/if}
              {#if githubUrl}
                <DropdownLi href={githubUrl} target="_blank" aClass="p-2 m-0">
                  <GithubSolid />
                </DropdownLi>
              {/if}
            </DropdownUl>
          </Dropdown>
        </div>
      </div>
    {/snippet}
    {#if lis}
      <NavUl {activeUrl} class={ulclass}>
        {@render navLi(lis)}
      </NavUl>
    {/if}
  </Navbar>
</header>

<div class="lg:flex">
  {#if urlsToIncludeSwitcherAndSidebar.some((path) => currentUrl.startsWith(path))}
    <Sidebar
      {activeUrl}
      {isOpen}
      {closeSidebar}
      breakpoint="lg"
      activeClass="flex items-center p-1 text-base font-normal text-white dark:hover:text-white hover:text-gray-900 bg-primary-700 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
      nonActiveClass="p-1 hover:bg-gray-200"
      divClass="dark_bg_theme bg-gray-50"
      class="dark_bg_theme h-screen border-r border-gray-50 lg:top-[58px] dark:border-gray-700"
    >
      <CloseButton
        onclick={closeSidebar}
        color="gray"
        class="absolute right-1 top-3 p-2 lg:hidden"
      />
      <SidebarGroup>
        <SidebarBrand>
          <span class="self-center whitespace-nowrap text-lg font-semibold dark:text-white"
            >Flowbite Svelte Icons</span
          >
        </SidebarBrand>
        {#each newSidebarList as { name, Icon, children, href }}
          {#if children}
            <SidebarDropdownWrapper
              label={name}
              isOpen={hasPath('components')}
              svgClass="me-4"
              btnClass="p-1"
            >
              {#snippet iconSlot()}
                <Icon />
              {/snippet}
              {#each children as { name, Icon, href }}
                <SidebarItem label={name} onclick={closeSidebar} {href} aClass="ml-4">
                  {#snippet iconSlot()}
                    <Icon />
                  {/snippet}
                </SidebarItem>
              {/each}
            </SidebarDropdownWrapper>
          {:else}
            <SidebarItem label={name} onclick={closeSidebar} {href}>
              {#snippet iconSlot()}
                <Icon />
              {/snippet}
            </SidebarItem>
          {/if}
        {/each}
      </SidebarGroup>
    </Sidebar>
  {/if}
  {#if urlsToIncludeSwitcherAndSidebar.some((path) => currentUrl.startsWith(path))}
    <div class="relative">
      <OnThisPage {extract} headingSelector="#mainContent > :where(h2, h3)" />
    </div>
  {/if}
  {@render children()}
</div>
<Footer {brand} {lis} />
