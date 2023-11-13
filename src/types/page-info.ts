import type { RichTextContent } from '@graphcms/rich-text-types'

export type Social = {
  url: string;
  iconSvg: string;
};

export type KnownTech = {
  iconSvg: string;
  name: string;
  startDate: string;
};

export type BioPageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: KnownTech[];
  profilePicture: {
    url: string;
  };
  socials: Social[];
  knownTechs: KnownTech[];
};

export type HomePageData = {
  page: BioPageInfo;
};

export type Asset = {
  assets: any;
  createdAt: string;
  id: string;
  publishedAt: string;
  fileName: string;
  url: string;
  updatedAt: string;
};