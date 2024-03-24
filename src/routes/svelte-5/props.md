---
layout: mainLayout
title: Flowbite Svelte Icons v2 Props
subtitle: Version 2 Props
path: svelte-5/props
description: Learn how to use props for color, size, HEX, dark mode, accessibility, and passing attributes.
---

# Props: v2

## Outline

```markdown
- size: "xs" | "sm" | "md" | "lg" | "xl" = ctx.size || 'md';
- role = ctx.role || 'img';
- ariaLabel="address book outline"
- class
- ariaLabel =  "<icon file name>"
- ...restProps
```

## Solid

```md
- size: "xs" | "sm" | "md" | "lg" | "xl" = ctx.size || 'md';
- role = ctx.role || 'img';
- ariaLabel="address book outline"
- class
- ariaLabel =  "<icon file name>"
- ...restProps
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

## aria-label

All icons have aria-label. For example `BxAbacus` has `aria-label="bx abacus"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<AddressBookOutline ariaLabel="address card outline" />
```

## Passing down other attributes

Since all icons have `{...restProps}`, you can pass other attibutes as well.

```html
<AddressBookOutline id="my-svg" transform="rotate(45)"/>
```