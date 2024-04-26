<script lang="ts">
  import {
    removeHyphensAndCapitalize,
    HomeCards,
    SupportBanner,
    TechInfo,
    BellActiveAltOutline,
    insertObjectToArray,
    excludeByTitle,
    cards,
    info,
    pkg
  } from 'runes-webkit';
  import { A } from 'svelte-5-ui-lib';
  const cardsToExclude = ['Seven Props'];
  const brand = {
    title: 'Brands, Regular, and Solid Icons',
    description: '2000+ SVG Icons.',
    icon: BellActiveAltOutline,
    icon_class: 'text-green-500'
  };
  let filteredCards = $state(excludeByTitle(cards, cardsToExclude));

  const runaticsVersion = __RUNATICS_VERSION__;
  const runesMetaTagsVersion = __RUNES_METATAGS_VERSION__;
  let newPkg = $state({ ...pkg, runaticsVersion, runesMetaTagsVersion });
</script>

<div class="relative mx-auto h-full max-w-7xl overflow-y-auto px-8 pb-20">
  <SupportBanner>
    To Keep It Going, Please Show Your Love.<a href="https://ko-fi.com/Z8Z2CHALG" target="_blank"
      ><img
        height="40"
        style="border:0px;height:40px;"
        src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
        alt="Buy Me a Coffee at ko-fi.com"
      /></a
    >
  </SupportBanner>

  <h1 class="my-8 flex justify-center">{removeHyphensAndCapitalize(__NAME__)}</h1>

  <HomeCards cards={filteredCards} />
  <h2 class="my-8 flex justify-center">Info</h2>
  <HomeCards cards={info} />
  <TechInfo {...newPkg} />
</div>
