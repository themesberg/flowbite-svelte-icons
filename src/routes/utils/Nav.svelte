<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { Component } from 'svelte';
  import {
    Navbar,
    NavLi,
    NavBrand,
    NavUl,
    uiHelpers,
    Darkmode,
    Dropdown,
    DropdownItem,
    Drawer
  } from 'svelte-5-ui-lib';
  import { page } from '$app/stores';
  import {
    GithubSolid,
    random_tailwind_color,
    DotsHorizontalOutline,
    XSolid,
    Sidebar,
    sidebarList
  } from 'runes-webkit';
  import DynamicCodeBlockStyle from './DynamicCodeBlockStyle.svelte';
  import { sineIn } from 'svelte/easing';
  import { newSidebarList } from '../+layout.svelte';

  function isIncluded(url: string, allowedUrls: string[]): boolean {
    return allowedUrls.some((allowedUrl) => url.startsWith(allowedUrl));
  }

  type LiType = {
    name: string;
    href: string;
    icon?: Component;
  };
  interface Props {
    lis?: LiType[];
    siteName?: string;
    twitterUrl?: string;
    githubUrl?: string;
    headerClass?: string;
    urlsToIncludeSwitcher?: string[];
  }
  let {
    lis,
    siteName,
    twitterUrl,
    githubUrl,
    headerClass,
    urlsToIncludeSwitcher = ['/guide'],
    ...restProps
  }: Props = $props();

  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
  let dropdownTransitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;

  const navDrawer = uiHelpers();
  let navDrawerStatus = $state(false);
  const closeNavDrawer = navDrawer.close;

  let currentUrl = $state($page.url.pathname);
  let nav = uiHelpers();

  let include = $derived(isIncluded(currentUrl, urlsToIncludeSwitcher));

  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let divClass = 'ml-auto w-full';
  let ulclass = 'dark:lg:bg-transparent lg:space-x-4';
  let navclass =
    'w-full divide-gray-200 border-gray-200 bg-gray-50 dark_bg_theme text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4';
  let headerCls = twMerge(
    'sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-sky-950',
    headerClass
  );

  $effect(() => {
    navDrawerStatus = navDrawer.isOpen;
    navStatus = nav.isOpen;
    dropdownStatus = dropdown.isOpen;
    currentUrl = $page.url.pathname;
  });
  const activeclass =
    'flex items-center p-2 text-base font-normal text-white bg-primary-500 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
</script>

{#snippet navLi(lis)}
  {#each lis as { name, href, icon }}
    {#if icon}
      <svelte:component this={icon} class="mb-3 h-8 w-8 {random_tailwind_color()}" />
    {/if}
    <NavLi {href}>{name}</NavLi>
  {/each}
{/snippet}

<header class={headerCls}>
  <Navbar {navclass} {toggleNav} {closeNav} {navStatus} breakPoint="lg" fluid div2class={divClass}>
    {#snippet brand()}
      <button
        onclick={navDrawer.toggle}
        type="button"
        class="z-50 mr-4 mt-1 lg:hidden"
        aria-controls="navbar-default"
      >
        <span class="sr-only">Open drawer menu</span>
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
      {#if siteName}
        <NavBrand
          {siteName}
          spanclass="self-center whitespace-nowrap text-2xl font-semibold text-primary-700 dark:text-primary-700"
        />
      {/if}
      <div class="ml-auto flex items-center lg:order-1">
        {#if include}
          <DynamicCodeBlockStyle />
        {/if}
        <DotsHorizontalOutline
          onclick={dropdown.toggle}
          class="ml-6 mr-4 dark:text-white"
          size="lg"
        />
        <div class="relative">
          <Dropdown
            {dropdownStatus}
            {closeDropdown}
            transitionParams={dropdownTransitionParams}
            divclass="absolute -left-[47px] top-8 w-12 pl-1.5"
          >
            {#if twitterUrl}
              <DropdownItem href={twitterUrl} target="_blank" aclass="p-2 m-0"
                ><XSolid /></DropdownItem
              >
            {/if}
            {#if githubUrl}
              <DropdownItem href={githubUrl} target="_blank" aclass="p-2 m-0">
                <GithubSolid />
              </DropdownItem>
            {/if}
            <DropdownItem>
              <Darkmode btnclass="p-2 m-0" />
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
    {/snippet}
    {#if lis}
      <NavUl {ulclass}>
        {@render navLi(lis)}
      </NavUl>
    {/if}
  </Navbar>
</header>

<Drawer
  width="w-64"
  drawerStatus={navDrawerStatus}
  closeDrawer={closeNavDrawer}
  {transitionParams}
  divclass="dark:bg-stone-900"
>
  <div class="flex items-center pb-4">
    <h5
      id="drawer-label"
      class="inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400"
    >
      Flowbite Svelte Icons
    </h5>
    <button
      type="button"
      onclick={closeNavDrawer}
      class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
      data-modal-hide="default-modal"
    >
      <svg
        class="h-3 w-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span class="sr-only">Close drawer</span>
    </button>
  </div>
  <Sidebar
    sidebarList={newSidebarList}
    s_b_aside="w-60 p-0 border-none mt-20 ml-4 !important"
    s_b_div="bg-transparent p-0"
    sidebarClose={closeNavDrawer}
  />
</Drawer>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: lis: LiType[];
@props:siteName: string;
@props:twitterUrl?: string;
@props:githubUrl?: string;
@props:headerClass?: string;
@props:urlsToIncludeSwitcher?: string[];
-->
