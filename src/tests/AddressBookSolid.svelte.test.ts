import { render, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import AddressBookSolid from '$lib/AddressBookSolid.svelte';

describe('AddressBookSolid (solid icon)', () => {
  describe('Size Presets', () => {
    it('renders with default md size', () => {
      const { container } = render(AddressBookSolid);
      const svg = container.querySelector('svg');
      expect(svg).toBeTruthy();
      expect(svg?.classList.contains('w-5')).toBe(true);
      expect(svg?.classList.contains('h-5')).toBe(true);
    });

    it('renders with xs size', () => {
      const { container } = render(AddressBookSolid, { props: { size: 'xs' } });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('w-3')).toBe(true);
      expect(svg?.classList.contains('h-3')).toBe(true);
    });

    it('renders with sm size', () => {
      const { container } = render(AddressBookSolid, { props: { size: 'sm' } });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('w-4')).toBe(true);
      expect(svg?.classList.contains('h-4')).toBe(true);
    });

    it('renders with lg size', () => {
      const { container } = render(AddressBookSolid, { props: { size: 'lg' } });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('w-6')).toBe(true);
      expect(svg?.classList.contains('h-6')).toBe(true);
    });

    it('renders with xl size', () => {
      const { container } = render(AddressBookSolid, { props: { size: 'xl' } });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('w-8')).toBe(true);
      expect(svg?.classList.contains('h-8')).toBe(true);
    });
  });

  describe('Explicit Dimensions', () => {
    it('renders with numeric width and height', () => {
      const { container } = render(AddressBookSolid, {
        props: { width: 32, height: 32 }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('width')).toBe('32');
      expect(svg?.getAttribute('height')).toBe('32');
      expect(svg?.classList.contains('w-5')).toBe(false);
    });

    it('renders with string width and height', () => {
      const { container } = render(AddressBookSolid, {
        props: { width: '2rem', height: '2rem' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('width')).toBe('2rem');
      expect(svg?.getAttribute('height')).toBe('2rem');
      expect(svg?.classList.contains('w-5')).toBe(false);
    });
  });

  describe('Fill Properties', () => {
    it('svg has fill attribute with color', () => {
      const { container } = render(AddressBookSolid);
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('fill')).toBe('currentColor');
    });

    it('does NOT have stroke attributes', () => {
      const { container } = render(AddressBookSolid);
      const paths = container.querySelectorAll('path');
      paths.forEach((path) => {
        expect(path?.getAttribute('stroke')).toBe(null);
        expect(path?.getAttribute('stroke-width')).toBe(null);
      });
    });

    it('paths inherit fill from parent svg', () => {
      const { container } = render(AddressBookSolid, {
        props: { color: '#ff0000' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('fill')).toBe('#ff0000');
    });
  });

  describe('Color Handling', () => {
    it('renders with default currentColor', () => {
      const { container } = render(AddressBookSolid);
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('fill')).toBe('currentColor');
    });

    it('accepts custom color prop', () => {
      const { container } = render(AddressBookSolid, {
        props: { color: '#0000ff' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('fill')).toBe('#0000ff');
    });
  });

  describe('Custom Classes', () => {
    it('accepts custom class', () => {
      const { container } = render(AddressBookSolid, {
        props: { class: 'custom-class' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('custom-class')).toBe(true);
    });

    it('merges custom class with default classes', () => {
      const { container } = render(AddressBookSolid, {
        props: { class: 'text-green-500' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.classList.contains('shrink-0')).toBe(true);
      expect(svg?.classList.contains('text-green-500')).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('has aria-hidden by default', () => {
      const { container } = render(AddressBookSolid);
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('aria-hidden')).toBe('true');
    });

    it('renders with ariaLabel', () => {
      const { container } = render(AddressBookSolid, {
        props: { ariaLabel: 'Address book' }
      });
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('aria-label')).toBe('Address book');
      expect(svg?.getAttribute('aria-hidden')).toBe('false');
    });

    it('renders with title', () => {
      const { container } = render(AddressBookSolid, {
        props: {
          title: { id: 'title-1', title: 'Address Book' }
        }
      });
      const title = container.querySelector('title');
      expect(title?.textContent).toBe('Address Book');
      expect(title?.id).toBe('title-1');
    });

    it('renders with description', () => {
      const { container } = render(AddressBookSolid, {
        props: {
          desc: { id: 'desc-1', desc: 'Contact information' }
        }
      });
      const desc = container.querySelector('desc');
      expect(desc?.textContent).toBe('Contact information');
      expect(desc?.id).toBe('desc-1');
    });

    it('sets aria-describedby when title or desc present', () => {
      const { container } = render(AddressBookSolid, {
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
      const { container } = render(AddressBookSolid, {
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
      const { container } = render(AddressBookSolid);
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
    });

    it('has correct xmlns', () => {
      const { container } = render(AddressBookSolid);
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg');
    });
  });

  describe('Difference from Outline Icons', () => {
    it('uses fill for the entire icon', () => {
      const { container } = render(AddressBookSolid, {
        props: { color: '#ff00ff' }
      });
      const svg = container.querySelector('svg');

      // SVG has fill attribute
      expect(svg?.getAttribute('fill')).toBe('#ff00ff');
      // No stroke attributes anywhere
      const paths = container.querySelectorAll('path');
      paths.forEach((path) => {
        expect(path?.getAttribute('stroke')).toBe(null);
      });
    });

    it('does not have fill="none" like stroke-based outlines', () => {
      const { container } = render(AddressBookSolid);
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('fill')).not.toBe('none');
      expect(svg?.getAttribute('fill')).toBe('currentColor');
    });

    it('does not accept or use strokeWidth', () => {
      const { container } = render(AddressBookSolid);
      const paths = container.querySelectorAll('path');
      paths.forEach((path) => {
        expect(path?.getAttribute('stroke-width')).toBe(null);
      });
    });
  });

  describe('Event Handlers', () => {
    it('supports onclick handler', async () => {
      let clicked = false;
      const { container } = render(AddressBookSolid, {
        props: {
          onclick: () => {
            clicked = true;
          }
        }
      });
      const svg = container.querySelector('svg');
      if (svg) {
        await fireEvent.click(svg);
      }
      expect(clicked).toBe(true);
    });
  });
});
