# Icon Component Tests

This directory contains unit tests for the Flowbite Svelte Icons library.

## Testing Strategy

Rather than creating 700+ redundant tests for all icons, we test **3 representative icons** that validate the entire system:

### Representative Icons Tested

1. **AddColumnAfterOutline** - Stroke-based outline icon
   - Uses `stroke="currentColor"` for coloring
   - Supports `strokeWidth` prop
   - Has `fill="none"` on SVG element

2. **CalendarPlusOutline** - Fill-based outline icon
   - Uses `fill="currentColor"` for coloring
   - No stroke properties
   - Has `fill={color}` on SVG element

3. **AddressBookSolid** - Solid icon
   - Uses `fill` for the entire icon
   - No stroke properties
   - Simpler structure than outline icons

## Why This Approach Works

All icons share the **exact same component structure and logic**. The only differences are:

- SVG path data (icon shape)
- Stroke vs fill rendering (handled by the template)

Testing these 3 icons validates:

- ✅ Size preset system (`xs`, `sm`, `md`, `lg`, `xl`)
- ✅ Explicit dimensions (`width`, `height`)
- ✅ Mutual exclusivity (size vs width/height)
- ✅ Color handling (stroke vs fill)
- ✅ Context inheritance
- ✅ Custom classes and attributes
- ✅ Accessibility features
- ✅ Props pass-through

## Test Coverage

Each test file covers:

### Size & Dimensions

- Default size (md)
- All size presets (xs, sm, md, lg, xl)
- Explicit numeric dimensions
- Explicit string dimensions (rem, em, etc.)
- Size class disabling when using explicit dimensions

### Rendering Properties

- Stroke/fill attributes
- Color handling
- SVG attributes (viewBox, xmlns)
- Custom strokeWidth (outline icons only)

### Customization

- Custom classes
- Class merging
- Additional SVG attributes
- Event handlers

### Accessibility

- Default aria-hidden
- ariaLabel support
- Title and description elements
- aria-describedby generation

## Running Tests

```bash
# Run all tests
npm run test:unit

# Run tests in watch mode
pnpm test:unit

# Run specific test file
pnpm test:unit AddColumnAfterOutline
```

## Adding New Tests

If you add new icon behavior or props, update the relevant test file:

- Stroke-based outline changes → `AddColumnAfterOutline.test.ts`
- Fill-based outline changes → `CalendarPlusOutline.test.ts`
- Solid icon changes → `AddressBookSolid.test.ts`

## Test Structure

Tests use:

- **Vitest** - Test runner
- **@testing-library/svelte** - Component testing utilities
- **jsdom** - DOM environment for testing

Each test:

1. Renders the component with specific props
2. Queries the rendered SVG/elements
3. Asserts expected attributes and classes
