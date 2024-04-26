import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Svelte 5 Props example - Runes Webkit',
    description: 'Svelte 5 Props example',
    og: {
      title: 'Svelte 5 Props example - Runes Webkit',
      description: 'Svelte 5 Props example'
    },
    twitter: {
      title: 'Svelte 5 Props example - Runes Webkit',
      description: 'Svelte 5 Props example'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
