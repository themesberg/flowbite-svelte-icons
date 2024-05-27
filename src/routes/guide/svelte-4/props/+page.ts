import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Props - Flowbite Svelte Icons v1',
    description: 'How to use props with Flowbite Svelte Icons v1',
    og: {
      title: 'Props - Flowbite Svelte Icons v1',
      description: 'How to use props with Flowbite Svelte Icons v1'
    },
    twitter: {
      title: 'Props - Flowbite Svelte Icons v1',
      description: 'How to use props with Flowbite Svelte Icons v1'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
