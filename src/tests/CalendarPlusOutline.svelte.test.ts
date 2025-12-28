import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import CalendarPlusOutline from '$lib/CalendarPlusOutline.svelte';

describe('CalendarPlusOutline (fill-based outline)', () => {
  describe('Size Presets', () => {
    it('renders with default md size', () => {
      const { container } = render(CalendarPlusOutline);
      const svg = container.querySelector('svg');
      expect(svg).toBeTruthy();
      expect(svg?.classList.contains('w-5')).toBe(true);
      expect(svg?.classList.contains('h-5')).toBe(true);
    });

    it('renders with xs size', () => {
      const { container } = render(CalendarPlusOutline, { props: { size: 'xs' } });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('w-3')).toBe(true);
      expect(svg?.classList.contains('h-3')).toBe(true);
    });

    it('renders with sm size', () => {
      const { container } = render(CalendarPlusOutline, { props: { size: 'sm' } });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('w-4')).toBe(true);
      expect(svg?.classList.contains('h-4')).toBe(true);
    });

    it('renders with lg size', () => {
      const { container } = render(CalendarPlusOutline, { props: { size: 'lg' } });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('w-6')).toBe(true);
      expect(svg?.classList.contains('h-6')).toBe(true);
    });

    it('renders with xl size', () => {
      const { container } = render(CalendarPlusOutline, { props: { size: 'xl' } });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('w-8')).toBe(true);
      expect(svg?.classList.contains('h-8')).toBe(true);
    });
  });

  describe('Explicit Dimensions', () => {
    it('renders with numeric width and height', () => {
      const { container } = render(CalendarPlusOutline, {
        props: { width: 32, height: 32 }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('width')).toBe('32');
      expect(svg?.getAttribute('height')).toBe('32');
      expect(svg?.classList.contains('w-5')).toBe(false);
    });

    it('renders with string width and height', () => {
      const { container } = render(CalendarPlusOutline, {
        props: { width: '2rem', height: '2rem' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('width')).toBe('2rem');
      expect(svg?.getAttribute('height')).toBe('2rem');
      expect(svg?.classList.contains('w-5')).toBe(false);
    });
  });

  describe('Fill Properties', () => {
    it('has fill="currentColor" on path', () => {
      const { container } = render(CalendarPlusOutline);
      const path = container.querySelector('path');
      expect(path?.getAttribute('fill')).toBe('currentColor');
    });

    it('svg has fill attribute set to color prop', () => {
      const { container } = render(CalendarPlusOutline);
      const svg = container.querySelector('svg');
      // Default color is currentColor
      expect(svg?.getAttribute('fill')).toBe('currentColor');
    });

    it('does NOT have stroke attributes on path', () => {
      const { container } = render(CalendarPlusOutline);
      const path = container.querySelector('path');
      expect(path?.getAttribute('stroke')).toBe(null);
      expect(path?.getAttribute('stroke-width')).toBe(null);
    });
  });

  describe('Color Handling', () => {
    it('renders with default currentColor', () => {
      const { container } = render(CalendarPlusOutline);
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('fill')).toBe('currentColor');
    });

    it('accepts custom color prop', () => {
      const { container } = render(CalendarPlusOutline, {
        props: { color: '#ff0000' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('fill')).toBe('#ff0000');
    });
  });

  describe('Custom Classes', () => {
    it('accepts custom class', () => {
      const { container } = render(CalendarPlusOutline, {
        props: { class: 'custom-class' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('custom-class')).toBe(true);
    });

    it('merges custom class with default classes', () => {
      const { container } = render(CalendarPlusOutline, {
        props: { class: 'text-blue-500' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('shrink-0')).toBe(true);
      expect(svg?.classList.contains('text-blue-500')).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('has aria-hidden by default', () => {
      const { container } = render(CalendarPlusOutline);
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('aria-hidden')).toBe('true');
    });

    it('renders with ariaLabel', () => {
      const { container } = render(CalendarPlusOutline, {
        props: { ariaLabel: 'Add calendar event' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('aria-label')).toBe('Add calendar event');
      expect(svg?.getAttribute('aria-hidden')).toBe('false');
    });

    it('renders with title', () => {
      const { container } = render(CalendarPlusOutline, {
        props: {
          title: { id: 'title-1', title: 'Calendar Plus' }
        }
      });
      const title = container.querySelector('title');
      expect(title?.textContent).toBe('Calendar Plus');
      expect(title?.id).toBe('title-1');
    });

    it('renders with description', () => {
      const { container } = render(CalendarPlusOutline, {
        props: {
          desc: { id: 'desc-1', desc: 'Add a calendar event' }
        }
      });
      const desc = container.querySelector('desc');
      expect(desc?.textContent).toBe('Add a calendar event');
      expect(desc?.id).toBe('desc-1');
    });

    it('sets aria-describedby when title or desc present', () => {
      const { container } = render(CalendarPlusOutline, {
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
      const { container } = render(CalendarPlusOutline, {
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
      const { container } = render(CalendarPlusOutline);
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
    });

    it('has correct xmlns', () => {
      const { container } = render(CalendarPlusOutline);
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg');
    });
  });

  describe('Difference from Stroke-based Outlines', () => {
    it('uses fill instead of stroke for coloring', () => {
      const { container } = render(CalendarPlusOutline, {
        props: { color: '#0000ff' }
      });
      const svg = container.querySelector('svg');
      const path = container.querySelector('path');

      // SVG uses fill attribute
      expect(svg?.getAttribute('fill')).toBe('#0000ff');
      // Path uses fill="currentColor"
      expect(path?.getAttribute('fill')).toBe('currentColor');
      // No stroke attributes
      expect(path?.getAttribute('stroke')).toBe(null);
    });

    it('does not accept strokeWidth prop (fill-based)', () => {
      const { container } = render(CalendarPlusOutline);
      const path = container.querySelector('path');
      // Fill-based outlines don't use stroke-width
      expect(path?.getAttribute('stroke-width')).toBe(null);
    });
  });
});
