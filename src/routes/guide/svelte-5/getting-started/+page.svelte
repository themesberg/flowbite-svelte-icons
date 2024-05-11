<script lang="ts">
  import {
    HighlightCompo,
    CodeWrapper,
    Code,
    H2,
    H3,
    removeHyphensAndCapitalize
  } from 'runes-webkit';
  import { A } from 'svelte-5-ui-lib';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Flowbite Svelte Icons: v2</h1>

<div class="my-8 flex gap-2">
  <a href="https://github.com/sponsors/shinokada" target="_blank"
    ><img
      src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86"
      alt="sponsor"
    /></a
  >
  <a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"
    ><img src="https://img.shields.io/npm/v/flowbite-svelte-icons/next" alt="npm" /></a
  >
  <a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"
    ><img
      src="https://img.shields.io/github/license/shinokada/flowbite-svelte-icons"
      alt="License"
    /></a
  >
  <a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"
    ><img src="https://img.shields.io/npm/dw/flowbite-svelte-icons.svg" alt="npm" /></a
  >
</div>

<H2>Requirements</H2>

<HighlightCompo codeLang="ts" code={modules['./md/requirement.md'] as string} />

<H2>Installation</H2>

<p>Install Svelte and TailwindCSS:</p>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />

<p>Install <Code>flowbite-svelte-icons:next</Code>:</p>

<HighlightCompo codeLang="ts" code={modules['./md/installation-2.md'] as string} />

<p>Enable Runes in <Code>svelte.config.js</Code>:</p>

<HighlightCompo codeLang="ts" code={modules['./md/svelte-config.md'] as string} />

<p>
  To make sure the classes used by flowbite-svelte-icons are included by the Tailwindcss, add the
  following to <Code>tailwind.config.cjs</Code>.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/tailwind-config.md'] as string} />

<H2>Basic Usages</H2>

<p>In a svelte file:</p>

<HighlightCompo codeLang="ts" code={modules['./md/basic-usage.md'] as string} />

<H2>Faster compiling</H2>

<p>
  If you need only a few icons from this library in your Svelte app, import them directly. This can
  optimize compilation speed and improve performance by reducing the amount of code processed during
  compilation.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/faster-compiling.md'] as string} />

<H2>Passing down other attributes</H2>

<p>Since all icons have <Code>...$$restProps</Code>, you can pass other attibutes as well.</p>

<HighlightCompo codeLang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} />

<H2>Using svelte:component</H2>

<HighlightCompo codeLang="ts" code={modules['./md/using-svelte-component.md'] as string} />

<H2>Import all</H2>

<p>Use <Code>import * as Icon from 'flowbite-svelte-icons</Code>.</p>

<HighlightCompo codeLang="ts" code={modules['./md/import-all.md'] as string} />
