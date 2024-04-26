import type { MetaProps } from 'runes-meta-tags';
import { metaTitle, metaDescription, metaImg, splitAndCapitalize } from 'runes-meta-tags';

export const load = ({ url }) => {
  const title = metaTitle(url.pathname, __NAME__);
  const basicDesc = splitAndCapitalize(__NAME__);
  const description = metaDescription(url.pathname, basicDesc);
  const image = metaImg(url.pathname, __NAME__);

  const pageMetaTags = Object.freeze({
    title,
    description,
    og: {
      title,
      description
    },
    twitter: {
      title,
      description
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
