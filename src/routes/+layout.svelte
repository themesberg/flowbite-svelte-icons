<script lang="ts">
	import '../app.css';
	import type { Component } from 'svelte';
	import { page } from '$app/state';
	import { newSidebarList } from './utils/helper';
	import {
		Footer,
		OnThisPage,
		extract,
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
		NavHamburger,
		NavUl,
		uiHelpers,
		DarkMode,
		Dropdown,
		DropdownItem,
		SidebarButton,
		Sidebar,
		SidebarGroup,
		SidebarDropdownWrapper,
		SidebarItem,
		SidebarBrand
	} from 'flowbite-svelte';
	import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
	import { Runatics } from 'runatics';
	import DynamicCodeBlockStyle from './utils/DynamicCodeBlockStyle.svelte';

	let activeUrl = $derived(page.url.pathname);

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
		{ name: 'Solid', href: '/solid-icons' },
		{ name: 'Icon sets', href: 'https://svelte-svg-icons.codewithshin.com/' }
	];
	const brand = {
		name: 'codewithshin.com',
		href: 'https://codewithshin.com'
	};
	const urlsToIncludeSwitcherAndSidebar = ['/guide/', '/guide2/', '/how-to-use', '/quick-start'];
	/*eslint no-undef: "off"*/
	const githubUrl = `https://github.com/shinokada/${__NAME__}`;
	const twitterUrl = 'https://twitter.com/shinokada';
	const blueskyUrl = 'https://bsky.app/profile/codewithshin.com';

	function isIncluded(url: string, allowedUrls: string[]): boolean {
		return allowedUrls.some((allowedUrl) => {
			// For home page '/', do exact matching
			if (allowedUrl === '/') {
				return url === '/' || url === '';
			}
			// For other URLs, continue using startsWith
			return url.startsWith(allowedUrl);
		});
	}
	let urlsToIncludeSwitcher = ['/guide', '/guide2', '/how-to-use', '/quick-start'];
	let include = $derived(isIncluded(currentUrl, urlsToIncludeSwitcher));

	$effect(() => {
		currentUrl = page.url.pathname;
		metaTags = page.data.pageMetaTags
			? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
			: data.layoutMetaTags;
		isOpen = sidebarUi.isOpen;
	});

	let activeClass = 'p-2 text-sm lg:text-base';
	let nonActiveClass = 'p-2 text-sm lg:text-base';
</script>

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags} />

<Navbar
	breakpoint="lg"
	fluid
	class="fixed top-0 left-0 z-50 border-b border-gray-100 bg-white sm:px-12 lg:py-0 dark:border-gray-700 dark:bg-stone-900"
	navContainerClass="lg:justify-between"
>
	<NavBrand href="/">
		<span
			class="text-primary-900 dark:text-primary-500 self-center text-xl font-semibold whitespace-nowrap lg:ml-8 lg:text-2xl"
			>Flowbite Svelte Icons</span
		>
	</NavBrand>
	<div class="flex justify-end lg:order-2">
		<NavHamburger class="order-3" />
		{#if include}
			<div class="hidden lg:block">
				<DynamicCodeBlockStyle />
			</div>
		{/if}
		<DotsHorizontalOutline class="mt-1.5 mr-4 ml-6 dark:text-white" size="lg" />
		<Dropdown simple class="p-1">
			{#if blueskyUrl}
				<DropdownItem href={blueskyUrl} target="_blank" class="m-0 p-0.5">
					<Bluesky size="30" />
				</DropdownItem>
			{/if}
			{#if twitterUrl}
				<DropdownItem href={twitterUrl} target="_blank" class="m-0 p-2"><XSolid /></DropdownItem>
			{/if}
			{#if githubUrl}
				<DropdownItem href={githubUrl} target="_blank" class="m-0 p-2">
					<GithubSolid />
				</DropdownItem>
			{/if}
		</Dropdown>
		<DarkMode class="m-0 p-2" />
	</div>

	<NavUl
		{activeUrl}
		class="order-2 lg:order-1"
		classes={{ active: activeClass, nonActive: nonActiveClass }}
	>
		{#each lis as { name, href, Icon }}
			{#if Icon}
				<Icon class="mb-3 h-6 w-6 {random_tailwind_color()}"></Icon>
			{/if}
			<NavLi {href}>{name}</NavLi>
		{/each}
	</NavUl>
</Navbar>

<div class="mt-20 lg:flex">
	{#if urlsToIncludeSwitcherAndSidebar.some((path) => currentUrl.startsWith(path))}
		<SidebarButton
			onclick={sidebarUi.toggle}
			class="fixed top-5 left-0
     z-100 mb-2"
			breakpoint="lg"
		/>
		<Sidebar
			{activeUrl}
			{isOpen}
			{closeSidebar}
			breakpoint="lg"
			classes={{
				div: 'dark:bg-stone-900 bg-gray-50',
				nonactive: 'p-1 hover:bg-gray-200',
				active:
					'flex items-center p-1 text-base font-normal text-white dark:hover:text-white hover:text-gray-900 bg-primary-700 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
			}}
			class="h-screen border-r border-gray-50 lg:top-[74px] dark:border-gray-700 dark:bg-stone-900"
		>
			<SidebarGroup>
				{#each newSidebarList as { name, Icon, children, href }}
					{#if children}
						<SidebarDropdownWrapper
							label={name}
							isOpen={hasPath('components')}
							svgClass="me-4"
							btnClass="p-1"
						>
							{#snippet icon()}
								<Icon />
							{/snippet}
							{#each children as { name, Icon, href }}
								<SidebarItem label={name} onclick={closeSidebar} {href} aClass="ml-4">
									{#snippet icon()}
										<Icon />
									{/snippet}
								</SidebarItem>
							{/each}
						</SidebarDropdownWrapper>
					{:else}
						<SidebarItem label={name} onclick={closeSidebar} {href}>
							{#snippet icon()}
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
