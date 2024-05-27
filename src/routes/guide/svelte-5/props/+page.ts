import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Props - Flowbite Svelte Icons v2',
    description: 'How to use props with Flowbite Svelte Icons v2',
    og: {
      title: 'Props - Flowbite Svelte Icons v2',
      description: 'How to use props with Flowbite Svelte Icons v2'
    },
    twitter: {
      title: 'Props - Flowbite Svelte Icons v2',
      description: 'How to use props with Flowbite Svelte Icons v2'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
