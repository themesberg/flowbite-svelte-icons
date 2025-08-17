<script lang="ts">
	import { HighlightCompo, Code, H2 } from 'runes-webkit';

	const modules = import.meta.glob('./md/*.md', {
		query: '?raw',
		import: 'default',
		eager: true
	});
</script>

<h1>Props - Flowbite Svelte Icons v1</h1>

<H2>Props</H2>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} clipboardClass="top-2"/>

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={modules['./md/types.md'] as string} clipboardClass="top-2"/>

<H2>Size</H2>

<p>The following table provides details about the available sizes for icons:</p>

<HighlightCompo codeLang="ts" code={modules['./md/size.md'] as string} clipboardClass="top-2"/>

<p>
	To change the size of an icon, use the <Code>size</Code> prop and specify the desired size. For example:
</p>

<HighlightCompo codeLang="ts" code={modules['./md/size-2.md'] as string} clipboardClass="top-2"/>

<p>
	If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by
	including the desired classes in the <Code>class</Code> prop. For example:
</p>

<HighlightCompo codeLang="ts" code={modules['./md/size-3.md'] as string} clipboardClass="top-2"/>

<H2>Color</H2>

<p>
	You can apply Tailwind CSS color directly to the icon component or its parent tag using the <Code
		>class</Code
	> prop.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/color.md'] as string} clipboardClass="top-2"/>

<H2>CSS HEX Colors</H2>

<p>
	Use the color attribute to change colors with HEX color code for Filled and Outlined components.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/css-hex-colors.md'] as string} clipboardClass="top-2"/>

<H2>Dark mode</H2>

<p>
	If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the <Code
		>class</Code
	> prop.
</p>

<p>Let's use <Code>dark</Code> for the dark mode class as an example.</p>

<HighlightCompo codeLang="ts" code={modules['./md/dark-mode.md'] as string} clipboardClass="top-2"/>

<H2>A11y</H2>

<p>
	All icons have aria-label. For example <Code>BxAbacus</Code> has <Code
		>aria-label="bx abacus"</Code
	>. Use <Code>ariaLabel</Code> prop to modify the <Code>aria-label</Code> value.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/a11y.md'] as string} clipboardClass="top-2"/>

<p>
	Use <Code>title</Code>, <Code>desc</Code>, and <Code>ariaLabel</Code> props to make your icons accessible.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/a11y-2.md'] as string} clipboardClass="top-2"/>

<H2>withEvents</H2>

<p>
	As default all icons are unfocusable. However you can add <Code>withEvents</Code> prop to make your
	icons focusable.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/withevents.md'] as string} clipboardClass="top-2"/>

<p>
	It is possible to add <Code>tabindex="0"</Code>, but it is not recommended for A11y. If you want
	to use it add <Code>withEvents</Code> prop as well.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/withevents-2.md'] as string} clipboardClass="top-2"/>

<H2>Events</H2>

<p>Use <Code>withEvents</Code> prop to use the following events:</p>

<HighlightCompo codeLang="ts" code={modules['./md/events.md'] as string} clipboardClass="top-2"/>

<HighlightCompo codeLang="ts" code={modules['./md/events-2.md'] as string} clipboardClass="top-2"/>

<H2>Passing down other attributes</H2>

<p>Since all icons have <Code>...$$restProps</Code>, you can pass other attibutes as well.</p>

<HighlightCompo codeLang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} clipboardClass="top-2"/>
