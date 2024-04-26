<script>
  import {
    DarkMode,
    Dropdown,
    DropdownItem,
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl,
    Navbar
  } from 'flowbite-svelte';
  import { page } from '$app/stores';
  import { ChevronDownOutline, XSolid, DotsHorizontalOutline, GithubSolid } from '$lib';

  export let fluid = true;
  export let drawerHidden = false;
  export let list = false;
  $: currentUrl = $page.url.pathname;

  let divClass = 'w-full ms-auto lg:block lg:w-auto order-1 lg:order-none';
  let ulClass =
    'flex flex-col py-3 my-4 lg:flex-row lg:my-0 text-sm font-medium text-gray-900 dark:text-gray-300 gap-4';
</script>

<div class="relative px-8">
  <Navbar {fluid} color="default" let:toggle>
    {#if currentUrl !== '/'}
      <NavHamburger
        onClick={() => (drawerHidden = !drawerHidden)}
        class="m-0 me-3 md:block lg:hidden"
      />
    {/if}
    <NavBrand href="/" class={list ? 'w-40' : 'lg:w-60'}>
      <img
        src="/images/flowbite-svelte-icon-logo.svg"
        class="me-2.5 h-6 sm:h-8"
        alt="Flowbite Logo"
      />
      <span
        class="sm:text-3xl self-center whitespace-nowrap text-2xl font-semibold text-primary-800 dark:text-primary-600"
      >
        Flowbite Svelte Icons
      </span>
    </NavBrand>

    <NavUl
      class="ml-2"
      {divClass}
      {ulClass}
      nonActiveClass="md:!ps-3 md:!py-2 lg:!ps-0 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:text-white lg:dark:hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
      activeClass="md:!ps-3 md:!py-2 lg:!ps-0 text-white bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:dark:text-primary-700 dark:bg-primary-600 lg:dark:bg-transparent cursor-default"
    >
      <NavLi href="/svelte-4/getting-started">Guide</NavLi>
      <NavLi href="/outline">Outline</NavLi>
      <NavLi href="/solid">Solid</NavLi>
      <NavLi class="cursor-pointer">
        Resources
        <ChevronDownOutline class=" inline h-5 w-5 text-primary-800 dark:text-white" />
      </NavLi>
      <Dropdown class="z-20 w-64">
        <DropdownItem href="https://flowbite-svelte.com">Flowbite Svelte</DropdownItem>
        <DropdownItem href="https://flowbite-svelte-blocks.codewithshin.com/"
          >Flowbite Svelte Block</DropdownItem
        >
        <DropdownItem href="https://flowbite-svelte-admin-dashboard.vercel.app/"
          >Flowbite Svelte Admin Dashboard</DropdownItem
        >
      </Dropdown>
      <NavLi href="https://svelte-svg-icons.codewithshin.com/">Icon Sets</NavLi>
    </NavUl>

    <NavHamburger />
  </Navbar>
</div>
