import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';

describe('Icon Context Support', () => {
  describe('Context-based default props', () => {
    it('should use default values when no context provided', async () => {
      // Import dynamically to test without context
      const AddColumnAfterOutline = (await import('$lib/AddColumnAfterOutline.svelte')).default;
      const { container } = render(AddColumnAfterOutline);
      const svg = container.querySelector('svg');

      // Should use built-in defaults
      expect(svg?.classList.contains('w-5')).toBe(true); // md size
      expect(svg?.getAttribute('color')).toBe('currentColor');
    });

    it('should fallback to md size when context has no size', async () => {
      const AddColumnAfterOutline = (await import('$lib/AddColumnAfterOutline.svelte')).default;
      const { container } = render(AddColumnAfterOutline, { size: undefined });
      const svg = container.querySelector('svg');

      expect(svg?.classList.contains('w-5')).toBe(true);
    });

    it('should use default strokeWidth of 2', async () => {
      const AddColumnAfterOutline = (await import('$lib/AddColumnAfterOutline.svelte')).default;
      const { container } = render(AddColumnAfterOutline);
      const path = container.querySelector('path');

      expect(path?.getAttribute('stroke-width')).toBe('2');
    });
  });

  describe('Props override context', () => {
    it('should override context size with prop size', async () => {
      const AddColumnAfterOutline = (await import('$lib/AddColumnAfterOutline.svelte')).default;
      const { container } = render(AddColumnAfterOutline, { size: 'xl' });
      const svg = container.querySelector('svg');

      expect(svg?.classList.contains('w-8')).toBe(true);
    });

    it('should override context color with prop color', async () => {
      const AddColumnAfterOutline = (await import('$lib/AddColumnAfterOutline.svelte')).default;
      const { container } = render(AddColumnAfterOutline, { color: '#FF5733' });
      const svg = container.querySelector('svg');

      expect(svg?.getAttribute('color')).toBe('#FF5733');
    });

    it('should override context strokeWidth with prop strokeWidth', async () => {
      const AddColumnAfterOutline = (await import('$lib/AddColumnAfterOutline.svelte')).default;
      const { container } = render(AddColumnAfterOutline, { strokeWidth: 4 });
      const path = container.querySelector('path');

      expect(path?.getAttribute('stroke-width')).toBe('4');
    });
  });

  describe('Width/height prop behavior with context', () => {
    it('should ignore context size when width/height provided', async () => {
      const AddColumnAfterOutline = (await import('$lib/AddColumnAfterOutline.svelte')).default;
      const { container } = render(AddColumnAfterOutline, {
        width: '50',
        height: '50'
      });
      const svg = container.querySelector('svg');

      expect(svg?.getAttribute('width')).toBe('50');
      expect(svg?.getAttribute('height')).toBe('50');
      expect(svg?.classList.contains('w-6')).toBe(false);
    });

    it('should use effectiveSize logic correctly', async () => {
      const AddColumnAfterOutline = (await import('$lib/AddColumnAfterOutline.svelte')).default;

      // Without width/height: should use size classes
      const { container: container1 } = render(AddColumnAfterOutline, { size: 'lg' });
      const svg1 = container1.querySelector('svg');
      expect(svg1?.classList.contains('w-6')).toBe(true);

      // With width/height: should not use size classes
      const { container: container2 } = render(AddColumnAfterOutline, {
        size: 'lg',
        width: '32',
        height: '32'
      });
      const svg2 = container2.querySelector('svg');
      expect(svg2?.classList.contains('w-6')).toBe(false);
      expect(svg2?.getAttribute('width')).toBe('32');
    });
  });
});

describe('Context Fallback Chain', () => {
  it('should follow prop -> context -> default chain for size', async () => {
    const AddColumnAfterOutline = (await import('$lib/AddColumnAfterOutline.svelte')).default;

    // No prop, no context -> default (md)
    const { container: c1 } = render(AddColumnAfterOutline);
    expect(c1.querySelector('svg')?.classList.contains('w-5')).toBe(true);

    // Prop provided -> use prop
    const { container: c2 } = render(AddColumnAfterOutline, { size: 'xs' });
    expect(c2.querySelector('svg')?.classList.contains('w-3')).toBe(true);
  });

  it('should follow prop -> context -> default chain for color', async () => {
    const AddColumnAfterOutline = (await import('$lib/AddColumnAfterOutline.svelte')).default;

    // Default color
    const { container: c1 } = render(AddColumnAfterOutline);
    expect(c1.querySelector('svg')?.getAttribute('color')).toBe('currentColor');

    // Custom color
    const { container: c2 } = render(AddColumnAfterOutline, { color: 'red' });
    expect(c2.querySelector('svg')?.getAttribute('color')).toBe('red');
  });

  it('should follow prop -> context -> default chain for strokeWidth', async () => {
    const AddColumnAfterOutline = (await import('$lib/AddColumnAfterOutline.svelte')).default;

    // Default strokeWidth
    const { container: c1 } = render(AddColumnAfterOutline);
    expect(c1.querySelector('path')?.getAttribute('stroke-width')).toBe('2');

    // Custom strokeWidth
    const { container: c2 } = render(AddColumnAfterOutline, { strokeWidth: 5 });
    expect(c2.querySelector('path')?.getAttribute('stroke-width')).toBe('5');
  });
});
