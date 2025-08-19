<script lang="ts">
	import { HighlightCompo, Code, H2 } from 'runes-webkit';
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
		logo: 'github',
		color: 'red'
	};
	const npmversion: NpmVersionPropsType = {
		packageName: 'flowbite-svelte-icons',
		color: 'red',
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
	const modules = import.meta.glob('./md/*.md', {
		query: '?raw',
		import: 'default',
		eager: true
	});
</script>

<h1>Getting Started - Flowbite Svelte Icons v2</h1>

<div class="my-8 flex gap-2">
	<GitHubSponsor {...sponsor} />
	<NpmVersion {...npmversion} />
	<License {...license} />
	<NpmDownload {...downloads} />
</div>

<H2>Requirements</H2>

<HighlightCompo
	codeLang="ts"
	code={modules['./md/requirement.md'] as string}
	
/>

<H2>Installation</H2>

<HighlightCompo
	codeLang="ts"
	code={modules['./md/installation.md'] as string}
	
/>

<p>
	To make sure the classes used by flowbite-svelte-icons are included by the Tailwindcss, add the
	following to <Code>app.css</Code>.
</p>

<HighlightCompo
	codeLang="ts"
	code={modules['./md/tailwind-config.md'] as string}
	
/>

<H2>Basic Usages</H2>

<p>In a svelte file:</p>

<HighlightCompo
	codeLang="ts"
	code={modules['./md/basic-usage.md'] as string}
	
/>

<H2>Faster compiling</H2>

<p>
	If you need only a few icons from this library in your Svelte app, import them directly. This can
	optimize compilation speed and improve performance by reducing the amount of code processed during
	compilation.
</p>

<HighlightCompo
	codeLang="ts"
	code={modules['./md/faster-compiling.md'] as string}
	
/>

<H2>Passing down other attributes</H2>

<p>Since all icons have <Code>...restProps</Code>, you can pass other attibutes as well.</p>

<HighlightCompo
	codeLang="ts"
	code={modules['./md/passing-down-other-attributes.md'] as string}
	
/>

<H2>Import all</H2>

<p>Use <Code>import * as Icon from 'flowbite-svelte-icons</Code>.</p>

<HighlightCompo
	codeLang="ts"
	code={modules['./md/import-all.md'] as string}
	
/>

<H2>IconSolid and IconOutline</H2>
<p>You can use <Code>IconSolid</Code> and <Code>IconOutline</Code> to create a custom icon.</p>
