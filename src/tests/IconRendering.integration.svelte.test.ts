import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import AddColumnAfterOutline from '$lib/AddColumnAfterOutline.svelte';
import AddColumnBeforeOutline from '$lib/AddColumnBeforeOutline.svelte';
import AddressBookOutline from '$lib/AddressBookOutline.svelte';
import AddressBookSolid from '$lib/AddressBookSolid.svelte';
import CalendarPlusOutline from '$lib/CalendarPlusOutline.svelte';

describe('Icon Rendering Integration Tests', () => {
  describe('SVG Structure Validation', () => {
    it('should render valid SVG with correct namespace', () => {
      const { container } = render(AddColumnAfterOutline);
      const svg = container.querySelector('svg');

      expect(svg?.namespaceURI).toBe('http://www.w3.org/2000/svg');
      expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
    });

    it('should render path elements with correct attributes', () => {
      const { container } = render(AddColumnAfterOutline);
      const path = container.querySelector('path');

      expect(path).toBeTruthy();
      expect(path?.getAttribute('stroke')).toBe('currentColor');
      expect(path?.getAttribute('stroke-linecap')).toBe('round');
      expect(path?.getAttribute('stroke-linejoin')).toBe('round');
    });

    it('should render solid icon with fill attribute', () => {
      const { container } = render(AddressBookSolid);
      const svg = container.querySelector('svg');
      const path = container.querySelector('path');

      expect(svg?.getAttribute('fill')).toBe('currentColor');
      expect(path?.getAttribute('fill-rule')).toBeTruthy();
    });
  });

  describe('Multiple Icon Instances', () => {
    it('should render multiple icons with different props', () => {
      const { container: container1 } = render(AddColumnAfterOutline, {
        size: 'sm',
        color: 'red'
      });
      const { container: container2 } = render(AddColumnAfterOutline, {
        size: 'xl',
        color: 'blue'
      });

      const svg1 = container1.querySelector('svg');
      const svg2 = container2.querySelector('svg');

      expect(svg1?.classList.contains('w-4')).toBe(true);
      expect(svg2?.classList.contains('w-8')).toBe(true);
      expect(svg1?.getAttribute('color')).toBe('red');
      expect(svg2?.getAttribute('color')).toBe('blue');
    });

    it('should render different icon components', () => {
      const icons = [
        AddColumnAfterOutline,
        AddColumnBeforeOutline,
        AddressBookOutline,
        AddressBookSolid,
        CalendarPlusOutline
      ];

      icons.forEach((IconComponent) => {
        const { container } = render(IconComponent);
        const svg = container.querySelector('svg');
        expect(svg).toBeTruthy();
        expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
      });
    });
  });

  describe('Responsive Sizing Behavior', () => {
    it('should handle size changes correctly', () => {
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
      const expectedClasses = ['w-3', 'w-4', 'w-5', 'w-6', 'w-8'];

      sizes.forEach((size, index) => {
        const { container } = render(AddColumnAfterOutline, { size });
        const svg = container.querySelector('svg');
        expect(svg?.classList.contains(expectedClasses[index])).toBe(true);
      });
    });

    it('should handle dynamic dimension updates', () => {
      const dimensions = [
        { width: '20', height: '20' },
        { width: '40', height: '40' },
        { width: '80', height: '80' }
      ];

      dimensions.forEach(({ width, height }) => {
        const { container } = render(AddColumnAfterOutline, { width, height });
        const svg = container.querySelector('svg');
        expect(svg?.getAttribute('width')).toBe(width);
        expect(svg?.getAttribute('height')).toBe(height);
      });
    });
  });

  describe('Class Merging and Conflicts', () => {
    it('should merge custom classes with default classes', () => {
      const { container } = render(AddColumnAfterOutline, {
        class: 'text-red-500 hover:text-red-700'
      });
      const svg = container.querySelector('svg');

      expect(svg?.classList.contains('shrink-0')).toBe(true);
      expect(svg?.classList.contains('text-red-500')).toBe(true);
      expect(svg?.classList.contains('hover:text-red-700')).toBe(true);
    });

    it('should not have size classes when width/height provided', () => {
      const { container } = render(AddColumnAfterOutline, {
        size: 'lg',
        width: '100',
        height: '100',
        class: 'custom-icon'
      });
      const svg = container.querySelector('svg');

      expect(svg?.classList.contains('w-6')).toBe(false);
      expect(svg?.classList.contains('h-6')).toBe(false);
      expect(svg?.classList.contains('custom-icon')).toBe(true);
      expect(svg?.classList.contains('shrink-0')).toBe(true);
    });
  });

  describe('Accessibility Features', () => {
    it('should create proper ARIA structure with title and desc', () => {
      const { container } = render(AddColumnAfterOutline, {
        title: { id: 'icon-title', title: 'Add Column' },
        desc: { id: 'icon-desc', desc: 'Adds a new column after the current one' },
        ariaLabel: 'Add Column After'
      });

      const svg = container.querySelector('svg');
      const title = container.querySelector('title');
      const desc = container.querySelector('desc');

      expect(svg?.getAttribute('aria-label')).toBe('Add Column After');
      expect(svg?.getAttribute('aria-describedby')).toBe('icon-title icon-desc');
      expect(svg?.getAttribute('role')).toBe('img');
      expect(title?.id).toBe('icon-title');
      expect(title?.textContent).toBe('Add Column');
      expect(desc?.id).toBe('icon-desc');
      expect(desc?.textContent).toBe('Adds a new column after the current one');
    });

    it('should handle aria-hidden when no label provided', () => {
      const { container } = render(AddColumnAfterOutline);
      const svg = container.querySelector('svg');

      expect(svg?.getAttribute('aria-hidden')).toBe('true');
      expect(svg?.hasAttribute('role')).toBe(false);
    });

    it('should handle partial accessibility props', () => {
      const { container } = render(AddColumnAfterOutline, {
        title: { id: 'just-title', title: 'Title Only' }
      });
      const svg = container.querySelector('svg');

      expect(svg?.getAttribute('aria-describedby')).toBe('just-title');
      expect(svg?.getAttribute('role')).toBe('img');
    });
  });

  describe('Performance and Optimization', () => {
    it('should render efficiently without unnecessary wrappers', () => {
      const { container } = render(AddColumnAfterOutline);

      // Should have direct SVG element without extra wrappers
      const children = Array.from(container.children);
      expect(children.length).toBe(1);
      expect(children[0].tagName).toBe('svg');
    });

    it('should not create duplicate elements', () => {
      const { container } = render(AddColumnAfterOutline, {
        title: { id: 't1', title: 'Title' },
        desc: { id: 'd1', desc: 'Desc' }
      });

      const titles = container.querySelectorAll('title');
      const descs = container.querySelectorAll('desc');

      expect(titles.length).toBe(1);
      expect(descs.length).toBe(1);
    });
  });

  describe('Edge Case Handling', () => {
    it('should handle empty className prop', () => {
      const { container } = render(AddColumnAfterOutline, { class: '' });
      const svg = container.querySelector('svg');
      expect(svg).toBeTruthy();
      expect(svg?.classList.contains('shrink-0')).toBe(true);
    });

    it('should handle zero dimensions', () => {
      const { container } = render(AddColumnAfterOutline, {
        width: '0',
        height: '0'
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('width')).toBe('0');
      expect(svg?.getAttribute('height')).toBe('0');
    });

    it('should handle very large dimensions', () => {
      const { container } = render(AddColumnAfterOutline, {
        width: '9999',
        height: '9999'
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('width')).toBe('9999');
      expect(svg?.getAttribute('height')).toBe('9999');
    });

    it('should handle special characters in custom props', () => {
      const { container } = render(AddColumnAfterOutline, {
        'data-testid': 'icon-!@#$%',
        id: 'icon_123-test'
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('data-testid')).toBe('icon-!@#$%');
      expect(svg?.getAttribute('id')).toBe('icon_123-test');
    });
  });
});

describe('Solid vs Outline Icon Differences', () => {
  it('should render outline icon with stroke', () => {
    const { container } = render(AddColumnAfterOutline);
    const path = container.querySelector('path');

    expect(path?.getAttribute('stroke')).toBeTruthy();
    expect(path?.hasAttribute('fill')).toBe(false);
  });

  it('should render solid icon with fill', () => {
    const { container } = render(AddressBookSolid);
    const path = container.querySelector('path');
    const svg = container.querySelector('svg');

    expect(svg?.getAttribute('fill')).toBe('currentColor');
    expect(path?.getAttribute('fill-rule')).toBeTruthy();
  });

  it('should apply strokeWidth only to outline icons', () => {
    const { container: outlineContainer } = render(AddColumnAfterOutline, {
      strokeWidth: 3
    });
    const { container: solidContainer } = render(AddressBookSolid);

    const outlinePath = outlineContainer.querySelector('path');
    const solidPath = solidContainer.querySelector('path');

    expect(outlinePath?.getAttribute('stroke-width')).toBe('3');
    expect(solidPath?.hasAttribute('stroke-width')).toBe(false);
  });
});
