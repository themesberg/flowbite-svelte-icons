<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2 } from 'runes-webkit';
  import { HeartSolid } from '$lib';
  import {
    GitHubSponsor,
    type GitHubSponsorPropsType,
    NpmVersion,
    type NpmVersionPropsType,
    License,
    type LicensePropsType,
    NpmDownload,
    type NpmDownloadPropsType
  } from 'svelte-shields';

  const sponsor: GitHubSponsorPropsType = {
    user: 'shinokada',
    logo: 'github'
  };
  const npmversion: NpmVersionPropsType = {
    packageName: 'flowbite-svelte-icons',
    tag: 'v1-latest',
    logo: 'svelte'
  };
  const license: LicensePropsType = {
    source: 'github',
    github_user: 'themesberg',
    github_repo: 'flowbite-svelte-icons'
  };
  const downloads: NpmDownloadPropsType = {
    packageName: 'flowbite-svelte-icons'
  };
  const modules = import.meta.glob('./examples/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Getting Started - Flowbite Svelte Icons v1</h1>

<div class="my-8 flex gap-2">
  <GitHubSponsor {...sponsor} />
  <NpmVersion {...npmversion} />
  <License {...license} />
  <NpmDownload {...downloads} />
</div>

<H2>Requirements</H2>

<p>You need to use the following:</p>
<HighlightCompo codeLang="ts" code={modules['./examples/requirement.md'] as string} />

<H2>Installation</H2>

<p>Install Svelte and TailwindCSS:</p>

<HighlightCompo codeLang="ts" code={modules['./examples/installation.md'] as string} />

<p>
  To make sure the classes used by flowbite-svelte-icons are included by the Tailwindcss, add the
  following to tailwind.config.cjs.
</p>

<HighlightCompo codeLang="ts" code={modules['./examples/tailwind-config.md'] as string} />

<H2>Basic Usage</H2>

<p>In a svelte file:</p>

<HighlightCompo codeLang="ts" code={modules['./examples/basic-usage.md'] as string} />

<H2>A11y friendly</H2>

<p>
  Use <Code>title</Code>, <Code>desc</Code>, and <Code>ariaLabel</Code> props to make your icons accessible.
</p>

<HighlightCompo codeLang="ts" code={modules['./examples/a11y-friendly.md'] as string} />

<p>Check out this icon in the console:</p>

<CodeWrapper>
  <HeartSolid
    title={{ id: 'my-title', title: 'Red heart' }}
    desc={{ id: 'my-description', desc: 'The shape of a red heart' }}
    ariaLabel="red heart"
    color="red"
  />
</CodeWrapper>

<H2>Faster compiling</H2>

<p>
  If you need only a few icons from this library in your Svelte app, import them directly. This can
  optimize compilation speed and improve performance by reducing the amount of code processed during
  compilation.
</p>

<HighlightCompo codeLang="ts" code={modules['./examples/faster-compiling.md'] as string} />

<H2>Passing down other attributes</H2>

<p>Since all icons have <Code>...$$restProps</Code>, you can pass other attibutes as well.</p>

<HighlightCompo codeLang="ts" code={modules['./examples/passing-down-other-attributes.md'] as string} />

<H2>Using svelte:component</H2>

<HighlightCompo codeLang="ts" code={modules['./examples/using-svelte-component.md'] as string} />

<H2>Using onMount</H2>
<HighlightCompo codeLang="ts" code={modules['./examples/using-onmount.md'] as string} />

<H2>Import all</H2>

<p>Use <Code>import * as Icon from 'svelte-awesome-icons</Code>.</p>

<HighlightCompo codeLang="ts" code={modules['./examples/import-all.md'] as string} />
