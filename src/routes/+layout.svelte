<script>
  import '../app.postcss';
  import { page } from '$app/stores';
  import DarkMode from 'flowbite-svelte/DarkMode.svelte';
  import Navbar from 'flowbite-svelte/Navbar.svelte';
  import NavBrand from 'flowbite-svelte/NavBrand.svelte';
  import NavLi from 'flowbite-svelte/NavLi.svelte';
  import NavUl from 'flowbite-svelte/NavUl.svelte';
  import NavHamburger from 'flowbite-svelte/NavHamburger.svelte';

  $: activeUrl = $page.url.pathname
</script>

<Navbar let:hidden let:toggle class="mb-8">
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite Svelte Icons
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={activeUrl === '/'} >Home</NavLi>
    <NavLi href="/outline" active={activeUrl === '/outline'} >Outline</NavLi>
    <NavLi href="/solid" active={activeUrl === '/solid'} >Solid</NavLi>
    <NavLi href="https://github.com/themesberg/flowbite-svelte-icons" >GitHub</NavLi>
  </NavUl>
  <DarkMode />
</Navbar>
<slot />
