import type { MetaProps } from 'runes-meta-tags';
const title = 'Setting Global Icon - Flowbite Svelte Icons'
const description = 'How to create a global icon using setContext with Flowbite Svelte Icons'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/flowbite-svelte-icons'
export const load = () => {
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