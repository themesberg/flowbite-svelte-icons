---
layout: mainLayout
title: Flowbite Svelte Icons v1 Props
subtitle: Version 1 Props
path: svelte-4/props
description: Learn how to use props for style, color, size, HEX, dark mode, accessibility, events, and passing attributes.
---

# Props: v1

## Outline

```markdown
- size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
- role = ctx.role || 'img';
- withEvents = ctx.withEvents || false;
- title: TitleType = {};
- desc: DescType = {};
- strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | undefined =  ctx.strokeLinecap || 'round';
- strokeWidth = ctx.strokeWidth || '2';
- ariaLabel = '<icon file name>';
```

## Solid

```markdown
- size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
- role = ctx.role || 'img';
- color = ctx.color || 'currentColor';
- withEvents = ctx.withEvents || false;
- title: TitleType = {};
- desc: DescType = {};
- ariaLabel = '<icon file name>';
```

## Size

The following table provides details about the available sizes for icons:

```markdown
Size  CSS classes
xs    'w-3 h-3'
sm    'w-4 h-4'
md    'w-5 h-5'
lg    'w-6 h-6'
xl    'w-8 h-8'
```

To change the size of an icon, use the `size` prop and specify the desired size. For example:

```html
<AddressBookOutline size="md" />
```

If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by including the desired classes in the `class` prop. For example:

```html
<AddressBookOutline class="h-24 w-24 text-blue-700 mr-4" />
```

## Color

You can apply Tailwind CSS color directly to the icon component or its parent tag using the `class` prop.

```html
<AddressBookOutline size="md" class="text-red-700 dark:text-green-300 inline m-1"/>

<div class="text-red-700 dark:text-green-300 inline m-1">
  <AddressBookOutline size="md" />
</div>
```

## CSS HEX Colors

Use the color attribute to change colors with HEX color code for Filled and Outlined components.

```html
<AddressBookOutline color="#ff0000" size="md"/> 
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<AddressBookOutline class="text-blue-700 dark:text-red-500" />
```

## A11y

All icons have aria-label. For example `BxAbacus` has `aria-label="bx abacus"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<AddressBookOutline ariaLabel="address card outline" />
```

Use `title`, `desc`, and `ariaLabel` props to make your icons accessible.

```html
<HeartSolid
  title={{ id: 'my-title', title: 'Red heart' }}
  desc={{ id: 'my-descrip', desc: 'The shape of a red heart' }}
  ariaLabel="red heart"
  color="red"
/>
```

## withEvents

As default all icons are unfocusable. However you can add `withEvents` prop to make your icons focusable.

```html
<AddressBookOutline withEvents/>
<ArchiveSolid withEvents />
```

It is possible to add `tabindex="0"`, but it is not recommended for A11y.
If you want to use it add `withEvents` prop as well.

```html
<AddressBookOutline tabindex="0" withEvents/>
```

## Events

Use `withEvents` prop to use the following events:

```markdown
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
```

```html
<AddressBookOutline withEvents on:click={handleClick}/>
```

## Passing down other attributes

Since all icons have `{...$$restProps}`, you can pass other attibutes as well.

```html
<AddressBookOutline id="my-svg" transform="rotate(45)"/>
```