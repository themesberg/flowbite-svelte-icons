import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Setting Global Icon - Flowbite Svelte Icons',
    description: 'Setting Global Icon using setContext with Flowbite Svelte Icons',
    og: {
      title: 'Setting Global Icon - Flowbite Svelte Icons',
      description: 'Setting Global Icon using setContext with Flowbite Svelte Icons'
    },
    twitter: {
      title: 'Setting Global Icon - Flowbite Svelte Icons',
      description: 'Setting Global Icon using setContext with Flowbite Svelte Icons'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
