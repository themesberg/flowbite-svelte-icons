import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import AddColumnAfterOutline from '$lib/AddColumnAfterOutline.svelte';

describe('AddColumnAfterOutline (stroke-based outline)', () => {
  describe('Size Presets', () => {
    it('renders with default md size', () => {
      const { container } = render(AddColumnAfterOutline);
      const svg = container.querySelector('svg');
      expect(svg).toBeTruthy();
      expect(svg?.classList.contains('w-5')).toBe(true);
      expect(svg?.classList.contains('h-5')).toBe(true);
    });

    it('renders with xs size', () => {
      const { container } = render(AddColumnAfterOutline, { props: { size: 'xs' } });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('w-3')).toBe(true);
      expect(svg?.classList.contains('h-3')).toBe(true);
    });

    it('renders with sm size', () => {
      const { container } = render(AddColumnAfterOutline, { props: { size: 'sm' } });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('w-4')).toBe(true);
      expect(svg?.classList.contains('h-4')).toBe(true);
    });

    it('renders with lg size', () => {
      const { container } = render(AddColumnAfterOutline, { props: { size: 'lg' } });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('w-6')).toBe(true);
      expect(svg?.classList.contains('h-6')).toBe(true);
    });

    it('renders with xl size', () => {
      const { container } = render(AddColumnAfterOutline, { props: { size: 'xl' } });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('w-8')).toBe(true);
      expect(svg?.classList.contains('h-8')).toBe(true);
    });
  });

  describe('Explicit Dimensions', () => {
    it('renders with numeric width and height', () => {
      const { container } = render(AddColumnAfterOutline, {
        props: { width: 32, height: 32 }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('width')).toBe('32');
      expect(svg?.getAttribute('height')).toBe('32');
      // Should not have size classes when using explicit dimensions
      expect(svg?.classList.contains('w-5')).toBe(false);
    });

    it('renders with string width and height', () => {
      const { container } = render(AddColumnAfterOutline, {
        props: { width: '2rem', height: '2rem' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('width')).toBe('2rem');
      expect(svg?.getAttribute('height')).toBe('2rem');
      expect(svg?.classList.contains('w-5')).toBe(false);
    });
  });

  describe('Stroke Properties', () => {
    it('has stroke="currentColor" on path', () => {
      const { container } = render(AddColumnAfterOutline);
      const path = container.querySelector('path');
      expect(path?.getAttribute('stroke')).toBe('currentColor');
    });

    it('renders with default strokeWidth of 2', () => {
      const { container } = render(AddColumnAfterOutline);
      const path = container.querySelector('path');
      expect(path?.getAttribute('stroke-width')).toBe('2');
    });

    it('accepts custom strokeWidth', () => {
      const { container } = render(AddColumnAfterOutline, {
        props: { strokeWidth: 3 }
      });
      const path = container.querySelector('path');
      expect(path?.getAttribute('stroke-width')).toBe('3');
    });

    it('has fill="none" on svg', () => {
      const { container } = render(AddColumnAfterOutline);
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('fill')).toBe('none');
    });
  });

  describe('Color Handling', () => {
    it('renders with default currentColor', () => {
      const { container } = render(AddColumnAfterOutline);
      const svg = container.querySelector('svg');
      // Color is passed as a prop but used in stroke="currentColor"
      expect(svg).toBeTruthy();
    });

    it('accepts custom color prop', () => {
      const { container } = render(AddColumnAfterOutline, {
        props: { color: '#ff0000' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('color')).toBe('#ff0000');
    });
  });

  describe('Custom Classes', () => {
    it('accepts custom class', () => {
      const { container } = render(AddColumnAfterOutline, {
        props: { class: 'custom-class' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('custom-class')).toBe(true);
    });

    it('merges custom class with default classes', () => {
      const { container } = render(AddColumnAfterOutline, {
        props: { class: 'text-blue-500' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('shrink-0')).toBe(true);
      expect(svg?.classList.contains('text-blue-500')).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('has aria-hidden by default', () => {
      const { container } = render(AddColumnAfterOutline);
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('aria-hidden')).toBe('true');
    });

    it('renders with ariaLabel', () => {
      const { container } = render(AddColumnAfterOutline, {
        props: { ariaLabel: 'Add column' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('aria-label')).toBe('Add column');
      expect(svg?.getAttribute('aria-hidden')).toBe('false');
    });

    it('renders with title', () => {
      const { container } = render(AddColumnAfterOutline, {
        props: {
          title: { id: 'title-1', title: 'Add Column' }
        }
      });
      const title = container.querySelector('title');
      expect(title?.textContent).toBe('Add Column');
      expect(title?.id).toBe('title-1');
    });

    it('renders with description', () => {
      const { container } = render(AddColumnAfterOutline, {
        props: {
          desc: { id: 'desc-1', desc: 'Add a new column' }
        }
      });
      const desc = container.querySelector('desc');
      expect(desc?.textContent).toBe('Add a new column');
      expect(desc?.id).toBe('desc-1');
    });

    it('sets aria-describedby when title or desc present', () => {
      const { container } = render(AddColumnAfterOutline, {
        props: {
          title: { id: 'title-1', title: 'Title' },
          desc: { id: 'desc-1', desc: 'Description' }
        }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('aria-describedby')).toBe('title-1 desc-1');
    });
  });

  describe('Additional SVG Attributes', () => {
    it('passes through other SVG attributes', () => {
      const { container } = render(AddColumnAfterOutline, {
        props: {
          id: 'my-icon',
          'data-testid': 'test-icon'
        }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('id')).toBe('my-icon');
      expect(svg?.getAttribute('data-testid')).toBe('test-icon');
    });

    it('has correct viewBox', () => {
      const { container } = render(AddColumnAfterOutline);
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
    });

    it('has correct xmlns', () => {
      const { container } = render(AddColumnAfterOutline);
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg');
    });
  });
});
