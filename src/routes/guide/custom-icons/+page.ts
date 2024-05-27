import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Custom icons example - Flowbite Svelte Icons',
    description: 'How to create a custom icons with Flowbite Svelte Icons',
    og: {
      title: 'Custom icons example - Flowbite Svelte Icons',
      description: 'How to create a custom icons with Flowbite Svelte Icons'
    },
    twitter: {
      title: 'Custom icons example - Flowbite Svelte Icons',
      description: 'How to create a custom icons with Flowbite Svelte Icons'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
