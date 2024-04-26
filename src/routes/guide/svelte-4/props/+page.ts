import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Svelte 4 Props example - Runes Webkit',
    description: 'Svelte 4 Props example',
    og: {
      title: 'Svelte 4 Props example - Runes Webkit',
      description: 'Svelte 4 Props example'
    },
    twitter: {
      title: 'Svelte 4 Props example - Runes Webkit',
      description: 'Svelte 4 Props example'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
