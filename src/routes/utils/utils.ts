import type { ComponentType } from 'svelte';

export function removeHyphensAndCapitalize(str: string) {
  // Handle empty string or strings without '-'
  if (!str || !str.includes('-')) {
    return str;
  }

  // Capitalize the first letter (including after hyphens)
  const capitalized = str.replace(/(^|\s|-)\w/g, (match) => match.toUpperCase());

  // Remove hyphens and ensure spaces after words
  return capitalized.replace(/-|\s{2,}/g, ' ');
}

// Function to filter items that have keyword in their keys
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function filterIconsByKeyword(icons: { [key: string]: any }, keyword: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filteredIcons: { [key: string]: any } = {};
  for (const key in icons) {
    if (key.includes(keyword)) {
      filteredIcons[key] = icons[key];
    }
  }
  return filteredIcons;
}

export function excludeItemsByKeywords(
  items: Record<string, ComponentType>,
  keywords: string
): Record<string, ComponentType> {
  const filteredItems: Record<string, ComponentType> = {};
  for (const key in items) {
    const doesNotContainKeyword = keywords.split(' ').every((keyword) => !key.includes(keyword));
    if (doesNotContainKeyword) {
      filteredItems[key] = items[key];
    }
  }
  return filteredItems;
}

export const random_tailwind_color = () => {
  const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
  const shades = ['300', '400', '500'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomShade = shades[Math.floor(Math.random() * shades.length)];
  return `text-${randomColor}-${randomShade} dark:text-${randomColor}-${randomShade} shrink-0`;
};

export const random_hex_color_code = () => {
  const n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
