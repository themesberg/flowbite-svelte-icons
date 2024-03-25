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
</script>

<Navbar {fluid} class="text-black dark:bg-neutral-900" color="default" let:NavContainer>
  <NavContainer class="mb-px mt-px px-1" {fluid}>
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
    <div class="max-w-md mx-auto md:block md:w-auto order-1 md:order-none">
      <NavUl
        class="ml-2"
        ulClass="flex flex-col py-3 my-4 md:flex-row md:my-0 font-medium gap-4 dark:md:bg-transparent md:bg-white md:border-0"
        activeUrl="/"
        activeClass="text-primary-600 dark:text-primary-500"
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
    </div>
    <div class="ms-auto flex items-center text-gray-500 dark:text-gray-400 order-1 sm:order-2 mr-4">
      <DotsHorizontalOutline class="dots-menu dark:text-white" size="lg" />
      <Dropdown triggeredBy=".dots-menu">
        <DropdownItem
          ><a href="https://twitter.com/shinokada">
            <XSolid />
          </a></DropdownItem
        >
        <DropdownItem>
          <a href="https://github.com/themesberg/flowbite-svelte-icons">
            <GithubSolid class="" />
          </a>
        </DropdownItem>
        <DropdownItem>
          <DarkMode btnClass="p-0 m-0 text-blue-900 dark:text-blue-400" />
        </DropdownItem>
      </Dropdown>
    </div>
  </NavContainer>
</Navbar>
