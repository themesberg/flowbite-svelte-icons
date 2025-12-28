import { describe, it, expect } from 'vitest';
import { cn } from '$lib/helpers';

describe('Helpers - cn function', () => {
  describe('Basic functionality', () => {
    it('should merge simple class names', () => {
      expect(cn('foo', 'bar')).toBe('foo bar');
    });

    it('should handle single class name', () => {
      expect(cn('foo')).toBe('foo');
    });

    it('should handle empty input', () => {
      expect(cn()).toBe('');
    });

    it('should handle undefined values', () => {
      expect(cn('foo', undefined, 'bar')).toBe('foo bar');
    });

    it('should handle null values', () => {
      expect(cn('foo', null, 'bar')).toBe('foo bar');
    });

    it('should handle false values', () => {
      expect(cn('foo', false, 'bar')).toBe('foo bar');
    });
  });

  describe('TailwindCSS class merging', () => {
    it('should merge conflicting width classes', () => {
      const result = cn('w-4', 'w-6');
      // Should keep only the last width class
      expect(result).toBe('w-6');
    });

    it('should merge conflicting height classes', () => {
      const result = cn('h-4', 'h-8');
      expect(result).toBe('h-8');
    });

    it('should merge multiple conflicting utilities', () => {
      const result = cn('text-red-500', 'text-blue-500', 'bg-white', 'bg-black');
      expect(result).toContain('text-blue-500');
      expect(result).toContain('bg-black');
      expect(result).not.toContain('text-red-500');
      expect(result).not.toContain('bg-white');
    });

    it('should preserve non-conflicting classes', () => {
      const result = cn('w-6', 'h-6', 'text-red-500', 'shrink-0');
      expect(result).toContain('w-6');
      expect(result).toContain('h-6');
      expect(result).toContain('text-red-500');
      expect(result).toContain('shrink-0');
    });
  });

  describe('Icon component usage patterns', () => {
    it('should merge size classes correctly', () => {
      // Simulating what happens in icon components
      const sizes = { md: 'w-6 h-6', lg: 'w-8 h-8' };
      const result = cn('shrink-0', sizes.md, 'custom-class');
      
      expect(result).toContain('shrink-0');
      expect(result).toContain('w-6');
      expect(result).toContain('h-6');
      expect(result).toContain('custom-class');
    });

    it('should handle conditional size classes', () => {
      const hasCustomSize = true;
      const sizeClass = hasCustomSize ? 'w-10 h-10' : undefined;
      const result = cn('shrink-0', sizeClass, 'icon-base');
      
      expect(result).toContain('shrink-0');
      expect(result).toContain('w-10');
      expect(result).toContain('icon-base');
    });

    it('should handle undefined sizeClass when width/height provided', () => {
      const sizeClass = undefined; // When width/height are used
      const result = cn('shrink-0', sizeClass, 'custom');
      
      expect(result).toBe('shrink-0 custom');
    });
  });

  describe('Complex scenarios', () => {
    it('should handle arrays of classes', () => {
      const result = cn(['foo', 'bar'], 'baz');
      expect(result).toContain('foo');
      expect(result).toContain('bar');
      expect(result).toContain('baz');
    });

    it('should handle object notation', () => {
      const result = cn({
        'active': true,
        'disabled': false,
        'hover': true
      });
      expect(result).toContain('active');
      expect(result).toContain('hover');
      expect(result).not.toContain('disabled');
    });

    it('should handle mixed inputs', () => {
      const result = cn(
        'base',
        { active: true, disabled: false },
        ['foo', 'bar'],
        undefined,
        'custom'
      );
      expect(result).toContain('base');
      expect(result).toContain('active');
      expect(result).toContain('foo');
      expect(result).toContain('bar');
      expect(result).toContain('custom');
      expect(result).not.toContain('disabled');
    });
  });

  describe('Whitespace handling', () => {
    it('should trim whitespace', () => {
      const result = cn('  foo  ', '  bar  ');
      expect(result).toBe('foo bar');
    });

    it('should handle multiple spaces', () => {
      const result = cn('foo    bar', 'baz');
      expect(result).toContain('foo');
      expect(result).toContain('bar');
      expect(result).toContain('baz');
    });

    it('should handle empty strings', () => {
      const result = cn('foo', '', 'bar', '   ', 'baz');
      expect(result).toBe('foo bar baz');
    });
  });

  describe('Performance and edge cases', () => {
    it('should handle large number of classes', () => {
      const classes = Array(100).fill(0).map((_, i) => `class-${i}`);
      const result = cn(...classes);
      expect(result).toContain('class-0');
      expect(result).toContain('class-99');
    });

    it('should handle duplicate classes', () => {
      const result = cn('foo', 'foo', 'bar', 'bar');
      // Should deduplicate or keep all based on implementation
      expect(result).toContain('foo');
      expect(result).toContain('bar');
    });

    it('should handle special characters', () => {
      const result = cn('hover:text-blue-500', 'focus:ring-2', 'lg:w-full');
      expect(result).toContain('hover:text-blue-500');
      expect(result).toContain('focus:ring-2');
      expect(result).toContain('lg:w-full');
    });

    it('should handle important modifier', () => {
      const result = cn('!w-6', 'w-4');
      expect(result).toContain('w-6');
    });
  });
});