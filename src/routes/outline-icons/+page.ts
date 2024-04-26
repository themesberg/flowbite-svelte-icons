import type { MetaProps } from 'runes-meta-tags';
import { metaTitle, metaDescription, metaImg } from 'runes-meta-tags';

export const load = ({ url }) => {
  const siteName = metaTitle('/', __NAME__);
  const title = metaTitle(url.pathname, __NAME__);
  // const basicDesc = 'A quick start for a Svelte Runes project.'
  const description = metaDescription(url.pathname, siteName);
  const image = metaImg(url.pathname, __NAME__);
  // const keywords = 'svelte, runes, webkit, ui, components';

  const pageMetaTags = Object.freeze({
    title,
    description,
    og: {
      title,
      description,
      image
    },
    twitter: {
      title,
      description,
      image
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
