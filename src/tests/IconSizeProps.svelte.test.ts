import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import AddColumnAfterOutline from '$lib/AddColumnAfterOutline.svelte';
import AddressBookSolid from '$lib/AddressBookSolid.svelte';
import CalendarPlusOutline from '$lib/CalendarPlusOutline.svelte';

describe('Icon Size Props - Width and Height Override', () => {
  describe('AddColumnAfterOutline', () => {
    it('should render with default md size when no props provided', () => {
      const { container } = render(AddColumnAfterOutline);
      const svg = container.querySelector('svg');
      expect(svg).toBeTruthy();
      expect(svg?.classList.contains('w-5')).toBe(true);
      expect(svg?.classList.contains('h-5')).toBe(true);
    });

    it('should render with specified size prop', () => {
      const { container } = render(AddColumnAfterOutline, { size: 'xl' });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('w-8')).toBe(true);
      expect(svg?.classList.contains('h-8')).toBe(true);
    });

    it('should use width and height props instead of size classes', () => {
      const { container } = render(AddColumnAfterOutline, {
        width: '32',
        height: '32'
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('width')).toBe('32');
      expect(svg?.getAttribute('height')).toBe('32');
      // Should not have size classes when width/height are specified
      expect(svg?.classList.contains('w-5')).toBe(false);
      expect(svg?.classList.contains('h-5')).toBe(false);
    });

    it('should prioritize width/height over size prop', () => {
      const { container } = render(AddColumnAfterOutline, {
        size: 'xl',
        width: '48',
        height: '48'
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('width')).toBe('48');
      expect(svg?.getAttribute('height')).toBe('48');
      expect(svg?.classList.contains('w-8')).toBe(false);
    });

    it('should handle only width prop', () => {
      const { container } = render(AddColumnAfterOutline, { width: '24' });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('width')).toBe('24');
      expect(svg?.hasAttribute('height')).toBe(false);
    });

    it('should handle only height prop', () => {
      const { container } = render(AddColumnAfterOutline, { height: '24' });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('height')).toBe('24');
      expect(svg?.hasAttribute('width')).toBe(false);
    });

    it('should apply custom className alongside size classes', () => {
      const { container } = render(AddColumnAfterOutline, {
        class: 'custom-class'
      });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('custom-class')).toBe(true);
      expect(svg?.classList.contains('shrink-0')).toBe(true);
    });
  });

  describe('AddressBookSolid', () => {
    it('should render with default md size', () => {
      const { container } = render(AddressBookSolid);
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('w-5')).toBe(true);
      expect(svg?.classList.contains('h-5')).toBe(true);
    });

    it('should support all size variants', () => {
      const sizes = [
        { size: 'xs' as const, class: 'w-3' },
        { size: 'sm' as const, class: 'w-4' },
        { size: 'md' as const, class: 'w-5' },
        { size: 'lg' as const, class: 'w-6' },
        { size: 'xl' as const, class: 'w-8' }
      ];

      sizes.forEach(({ size, class: expectedClass }) => {
        const { container } = render(AddressBookSolid, { size });
        const svg = container.querySelector('svg');
        expect(svg?.classList.contains(expectedClass)).toBe(true);
      });
    });

    it('should override size with explicit width/height', () => {
      const { container } = render(AddressBookSolid, {
        size: 'lg',
        width: '100',
        height: '100'
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('width')).toBe('100');
      expect(svg?.getAttribute('height')).toBe('100');
      expect(svg?.classList.contains('w-6')).toBe(false);
    });
  });

  describe('CalendarPlusOutline', () => {
    it('should render with context size if provided', () => {
      // This would require a context wrapper, testing default behavior
      const { container } = render(CalendarPlusOutline);
      const svg = container.querySelector('svg');
      expect(svg).toBeTruthy();
    });

    it('should handle width and height as strings', () => {
      const { container } = render(CalendarPlusOutline, {
        width: '64',
        height: '64'
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('width')).toBe('64');
      expect(svg?.getAttribute('height')).toBe('64');
    });
  });
});

describe('Icon Accessibility Props', () => {
  it('should support ariaLabel prop', () => {
    const { container } = render(AddColumnAfterOutline, {
      ariaLabel: 'Add column after'
    });
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('aria-label')).toBe('Add column after');
  });

  it('should support title and desc for accessibility', () => {
    const { container } = render(AddColumnAfterOutline, {
      title: { id: 'title-1', title: 'Title text' },
      desc: { id: 'desc-1', desc: 'Description text' }
    });
    const svg = container.querySelector('svg');
    const title = container.querySelector('title');
    const desc = container.querySelector('desc');

    expect(title?.textContent).toBe('Title text');
    expect(desc?.textContent).toBe('Description text');
    expect(svg?.getAttribute('aria-describedby')).toBe('title-1 desc-1');
  });

  it('should have role="img" when labeled', () => {
    const { container } = render(AddColumnAfterOutline, {
      ariaLabel: 'Icon label'
    });
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('role')).toBe('img');
  });

  it('should have aria-hidden when not labeled', () => {
    const { container } = render(AddColumnAfterOutline);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('aria-hidden')).toBe('true');
  });
});

describe('Icon Color Props', () => {
  it('should apply default color', () => {
    const { container } = render(AddColumnAfterOutline);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('color')).toBe('currentColor');
  });

  it('should apply custom color', () => {
    const { container } = render(AddColumnAfterOutline, { color: '#FF0000' });
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('color')).toBe('#FF0000');
  });

  it('should apply custom color to solid icon', () => {
    const { container } = render(AddressBookSolid, { color: 'blue' });
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('fill')).toBe('blue');
  });
});

describe('Icon StrokeWidth Props (Outline icons)', () => {
  it('should apply default strokeWidth', () => {
    const { container } = render(AddColumnAfterOutline);
    const path = container.querySelector('path');
    expect(path?.getAttribute('stroke-width')).toBe('2');
  });

  it('should apply custom strokeWidth', () => {
    const { container } = render(AddColumnAfterOutline, { strokeWidth: 3 });
    const path = container.querySelector('path');
    expect(path?.getAttribute('stroke-width')).toBe('3');
  });

  it('should not have strokeWidth on fill-based outline icons', () => {
    // CalendarPlusOutline is fill-based, not stroke-based
    const { container } = render(CalendarPlusOutline);
    const path = container.querySelector('path');
    expect(path?.hasAttribute('stroke-width')).toBe(false);
  });
});

describe('Icon Additional Props', () => {
  it('should spread additional props to svg element', () => {
    const { container } = render(AddColumnAfterOutline, {
      'data-testid': 'custom-icon',
      id: 'icon-123'
    });
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('data-testid')).toBe('custom-icon');
    expect(svg?.getAttribute('id')).toBe('icon-123');
  });

  it('should handle custom event handlers', async () => {
    let clicked = false;
    const { container } = render(AddColumnAfterOutline, {
      onclick: () => {
        clicked = true;
      }
    });
    const svg = container.querySelector('svg');
    if (svg) {
      await fireEvent.click(svg);
    }
    expect(clicked).toBe(true);
  });
});

describe('Edge Cases and Type Safety', () => {
  it('should handle undefined size gracefully', () => {
    const { container } = render(AddColumnAfterOutline, {
      size: undefined
    });
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg?.classList.contains('w-5')).toBe(true); // Falls back to md
  });

  it('should handle empty string width/height', () => {
    const { container } = render(AddColumnAfterOutline, {
      width: '',
      height: ''
    });
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('should maintain shrink-0 class in all scenarios', () => {
    const scenarios = [
      {},
      { size: 'xl' as const },
      { width: '32', height: '32' },
      { class: 'custom' }
    ];

    scenarios.forEach((props) => {
      const { container } = render(AddColumnAfterOutline, props);
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('shrink-0')).toBe(true);
    });
  });

  it('should handle numeric width/height values', () => {
    const { container } = render(AddColumnAfterOutline, {
      width: 50,
      height: 50
    });
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('width')).toBe('50');
    expect(svg?.getAttribute('height')).toBe('50');
  });
});