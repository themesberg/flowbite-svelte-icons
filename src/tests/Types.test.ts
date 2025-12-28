import { describe, it, expect } from 'vitest';
import type { Size, OutlineProps, Props } from '$lib/types';

describe('Type Definitions', () => {
  describe('Size type', () => {
    it('should accept valid size values', () => {
      const sizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl'];
      expect(sizes).toHaveLength(5);

      // Type checking at compile time ensures only valid values
      const validSize: Size = 'md';
      expect(validSize).toBe('md');
    });
  });

  describe('OutlineProps interface', () => {
    it('should extend OutlineBaseProps correctly', () => {
      const outlineProps: OutlineProps = {
        size: 'lg',
        color: 'red',
        strokeWidth: 2,
        class: 'custom-class',
        ariaLabel: 'Icon label'
      };

      expect(outlineProps.size).toBe('lg');
      expect(outlineProps.strokeWidth).toBe(2);
    });

    it('should allow optional width and height', () => {
      const propsWithDimensions: OutlineProps = {
        width: '100',
        height: '100',
        color: 'blue'
      };

      expect(propsWithDimensions.width).toBe('100');
      expect(propsWithDimensions.height).toBe('100');
    });

    it('should support title and desc for accessibility', () => {
      const propsWithAccessibility: OutlineProps = {
        title: {
          id: 'title-1',
          title: 'Title'
        },
        desc: {
          id: 'desc-1',
          desc: 'Description'
        }
      };

      expect(propsWithAccessibility.title?.id).toBe('title-1');
      expect(propsWithAccessibility.desc?.desc).toBe('Description');
    });
  });

  describe('Props interface', () => {
    it('should extend BaseProps correctly', () => {
      const props: Props = {
        size: 'sm',
        color: 'green',
        class: 'icon-class'
      };

      expect(props.size).toBe('sm');
      expect(props.color).toBe('green');
    });

    it('should allow width and height for solid icons', () => {
      const solidProps: Props = {
        width: '64',
        height: '64'
      };

      expect(solidProps.width).toBe('64');
      expect(solidProps.height).toBe('64');
    });

    it('should support all accessibility features', () => {
      const accessibleProps: Props = {
        ariaLabel: 'Solid icon',
        title: { id: 't1', title: 'Title' },
        desc: { id: 'd1', desc: 'Desc' }
      };

      expect(accessibleProps.ariaLabel).toBe('Solid icon');
      expect(accessibleProps.title).toBeDefined();
      expect(accessibleProps.desc).toBeDefined();
    });
  });

  describe('Size optional behavior', () => {
    it('should allow size to be undefined', () => {
      const propsNoSize: OutlineProps = {
        color: 'purple'
      };

      expect(propsNoSize.size).toBeUndefined();
    });

    it('should allow both size and dimensions', () => {
      const mixedProps: OutlineProps = {
        size: 'xl',
        width: '128',
        height: '128'
      };

      // Width/height should take precedence in component logic
      expect(mixedProps.size).toBe('xl');
      expect(mixedProps.width).toBe('128');
    });
  });
});

describe('Type Constraints and Unions', () => {
  it('should enforce Size union type', () => {
    // This test validates TypeScript compilation
    const validSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

    validSizes.forEach((size) => {
      const props: OutlineProps = { size };
      expect(props.size).toBe(size);
    });
  });

  it('should allow number or string for dimensions', () => {
    const stringDimensions: OutlineProps = {
      width: '50',
      height: '50'
    };

    const numericDimensions: OutlineProps = {
      width: 50,
      height: 50
    };

    expect(stringDimensions.width).toBe('50');
    expect(numericDimensions.width).toBe(50);
  });
});
