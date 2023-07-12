<script>
  import '../app.postcss';
  import { page } from '$app/stores';
  import DarkMode from 'flowbite-svelte/DarkMode.svelte';
  import Navbar from 'flowbite-svelte/Navbar.svelte';
  import NavBrand from 'flowbite-svelte/NavBrand.svelte';
  import NavLi from 'flowbite-svelte/NavLi.svelte';
  import NavUl from 'flowbite-svelte/NavUl.svelte';
  import NavHamburger from 'flowbite-svelte/NavHamburger.svelte';
  import Footer from 'flowbite-svelte/Footer.svelte'
  import FooterBrand from 'flowbite-svelte/FooterBrand.svelte'
  import FooterLinkGroup from 'flowbite-svelte/FooterLinkGroup.svelte'
  import FooterLink from 'flowbite-svelte/FooterLink.svelte'
  import { MetaTags } from 'svelte-meta-tags';

  $: activeUrl = $page.url.pathname;
</script>

<MetaTags
  title="Flowbite Svelte Icons"
  description="Flowbite icon set for Svelte"
  openGraph={{
    type: 'website',
    url: 'https://flowbite-svelte-icons.vercel.app/',
    title: "Flowbite Svelte Icons",
    description: "Flowbite icon set for Svelte",
    images: [{ url: 'https://open-graph-vercel.vercel.app/api/flowbite-svelte-icons', width: 1200, height: 630, alt: "Flowbite Svelte Icons" }],
    site_name: 'Flowbite Svelte'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: "Flowbite Svelte Icons",
    description: "Flowbite icon set for Svelte",
    image:'https://open-graph-vercel.vercel.app/api/flowbite-svelte-icons',
    imageAlt: "Flowbite Svelte Icons"
  }} />

<Navbar let:hidden let:toggle class="dark:bg-neutral-900">
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite Svelte Icons
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={activeUrl === '/'}>Home</NavLi>
    <NavLi href="/outline" active={activeUrl === '/outline'}>Outline</NavLi>
    <NavLi href="/solid" active={activeUrl === '/solid'}>Solid</NavLi>
    <NavLi href="/docs" active={activeUrl === '/docs'}>Docs</NavLi>
    <NavLi href="https://github.com/themesberg/flowbite-svelte-icons">GitHub</NavLi>
    <NavLi href="https://svelte-svg-icons.vercel.app/">Icon sets</NavLi>
  </NavUl>
  <DarkMode />
</Navbar>
<div class="mx-16 mb-16">
  <slot />
</div>


<Footer footerType="logo" class="dark:bg-neutral-900">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand
    href="https://svelte-coreui-icons.vercel.app/"
    name="Svelte CoreUI Icons"
  />
  <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <FooterLink href="/outline">Outline</FooterLink>
    <FooterLink href="/solid">Solid</FooterLink>
    <FooterLink href="/docs">Docs</FooterLink>
    <FooterLink href="https://github.com/shinokada/flowbite-svelte-icons/blob/main/LICENSE">Licensing</FooterLink>
    <FooterLink href="https://github.com/themesberg/flowbite-svelte-icons">GitHub</FooterLink>
  </FooterLinkGroup>
  </div>
</Footer>
