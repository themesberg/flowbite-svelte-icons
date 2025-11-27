<script lang="ts">
  import { Code, H2 } from 'runes-webkit';
  import { HighlightCompo } from 'svelte-rune-highlight';

  const modules = import.meta.glob('./examples/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Props - Flowbite Svelte Icons v1</h1>

<H2>Props</H2>

<HighlightCompo lang="ts" code={modules['./examples/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo lang="ts" code={modules['./examples/types.md'] as string} />

<H2>Size</H2>

<p>The following table provides details about the available sizes for icons:</p>

<HighlightCompo lang="ts" code={modules['./examples/size.md'] as string} />

<p>
  To change the size of an icon, use the <Code>size</Code> prop and specify the desired size. For example:
</p>

<HighlightCompo lang="ts" code={modules['./examples/size-2.md'] as string} />

<p>
  If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by
  including the desired classes in the <Code>class</Code> prop. For example:
</p>

<HighlightCompo lang="ts" code={modules['./examples/size-3.md'] as string} />

<H2>Color</H2>

<p>
  You can apply Tailwind CSS color directly to the icon component or its parent tag using the <Code
    >class</Code
  > prop.
</p>

<HighlightCompo lang="ts" code={modules['./examples/color.md'] as string} />

<H2>CSS HEX Colors</H2>

<p>
  Use the color attribute to change colors with HEX color code for Filled and Outlined components.
</p>

<HighlightCompo lang="ts" code={modules['./examples/css-hex-colors.md'] as string} />

<H2>Dark mode</H2>

<p>
  If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the <Code
    >class</Code
  > prop.
</p>

<p>Let's use <Code>dark</Code> for the dark mode class as an example.</p>

<HighlightCompo lang="ts" code={modules['./examples/dark-mode.md'] as string} />

<H2>A11y</H2>

<p>
  All icons have aria-label. For example <Code>BxAbacus</Code> has <Code
    >aria-label="bx abacus"</Code
  >. Use <Code>ariaLabel</Code> prop to modify the <Code>aria-label</Code> value.
</p>

<HighlightCompo lang="ts" code={modules['./examples/a11y.md'] as string} />

<p>
  Use <Code>title</Code>, <Code>desc</Code>, and <Code>ariaLabel</Code> props to make your icons accessible.
</p>

<HighlightCompo lang="ts" code={modules['./examples/a11y-2.md'] as string} />

<H2>withEvents</H2>

<p>
  As default all icons are unfocusable. However you can add <Code>withEvents</Code> prop to make your
  icons focusable.
</p>

<HighlightCompo lang="ts" code={modules['./examples/withevents.md'] as string} />

<p>
  It is possible to add <Code>tabindex="0"</Code>, but it is not recommended for A11y. If you want
  to use it add <Code>withEvents</Code> prop as well.
</p>

<HighlightCompo lang="ts" code={modules['./examples/withevents-2.md'] as string} />

<H2>Events</H2>

<p>Use <Code>withEvents</Code> prop to use the following events:</p>

<HighlightCompo lang="ts" code={modules['./examples/events.md'] as string} />

<HighlightCompo lang="ts" code={modules['./examples/events-2.md'] as string} />

<H2>Passing down other attributes</H2>

<p>Since all icons have <Code>...$$restProps</Code>, you can pass other attibutes as well.</p>

<HighlightCompo lang="ts" code={modules['./examples/passing-down-other-attributes.md'] as string} />
