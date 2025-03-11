<script lang="ts">
  import {
    removeHyphensAndCapitalize,
    HomeCards,
    SupportBanner,
    TechInfo,
    BellActiveAltOutline,
    InfoCircleOutline,
    cards,
    info,
    type CardType
  } from 'runes-webkit';

  const brand = {
    title: `${removeHyphensAndCapitalize(__NAME__)}`,
    description: `${__DESCRIPTION__}`,
    Icon: BellActiveAltOutline,
    icon_class: 'text-blue-500'
  };

  const filteredCards = [brand, ...cards];

  const originalSource = {
    title: 'Original source',
    description: `${__ORIGINAL_SOURCE_NAME__}`,
    Icon: InfoCircleOutline,
    href: `${__ORIGINAL_SOURCE_URL__}`,
    icon_class: 'text-orange-500'
  };
  const license = {
    title: 'License',
    description: 'Released under the MIT License.',
    Icon: InfoCircleOutline,
    href: `https://github.com/shinokada/${__NAME__}/blob/main/LICENSE`,
    icon_class: 'text-lime-500'
  };

  const newInfo = [originalSource, license, ...info];
  /*eslint no-undef: "off"*/
  const pkg = {
    pkgName: __NAME__,
    pkgVersion: __VERSION__,
    repoUrl: __GITHUBURL__,
    runaticsVersion: __RUNATICS_VERSION__,
    runesMetaTagsVersion: __RUNES_METATAGS_VERSION__,
    svelteVersion: __SVELTE_VERSION__,
    svelteKitVersion: __SVELTEKIT_VERSION__,
    flowbitesvelte: __FLOWBITE_SVELTE_VERSION__,
    svelteRuneHighlight: __SVELTE_RUNE_HIGHLIGHT_VERSION__,
    viteVersion: __VITE_VERSION__,
    tailwindcssVersion: __TAILWINDCSS_VERSION__,
  };
</script>

<div class="relative mx-auto mt-8 h-full max-w-7xl overflow-y-auto px-8 pb-20">
  <SupportBanner>
    To Keep It Going, Please Show Your Love.<a
      href="https://ko-fi.com/Z8Z2CHALG"
      target="_blank"
      aria-label="Buy Me a Coffee at ko-fi.com"
      ><img
        height="40"
        style="border:0px;height:40px;"
        src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
        alt="Buy Me a Coffee at ko-fi.com"
      /></a
    >
  </SupportBanner>

  <h1 class="my-8 flex justify-center">{removeHyphensAndCapitalize(__NAME__)}</h1>

  <HomeCards cards={filteredCards as CardType[]} />
  <h2 class="my-8 flex justify-center">Info</h2>
  <HomeCards cards={newInfo as CardType[]} />
  <TechInfo {...pkg} />
</div>
