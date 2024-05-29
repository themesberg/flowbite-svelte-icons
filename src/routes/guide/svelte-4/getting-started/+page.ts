import type { MetaProps } from 'runes-meta-tags';

const title = 'Getting Started - Flowbite Svelte Icons v1'
const description = 'How to get started with Flowbite Svelte Icons v1'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-remix'

export const load = ({ url }) => {
  const pageMetaTags = Object.freeze({
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
