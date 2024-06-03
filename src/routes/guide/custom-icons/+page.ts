import type { MetaProps } from 'runes-meta-tags';
const title = 'Custom icons - Flowbite Svelte Icons'
const description = 'How to create a custom icons with Flowbite Svelte Icons'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/flowbite-svelte-icons'
export const load = () => {
  const pageMetaTags: MetaProps = {
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
  };
  return { pageMetaTags };
};