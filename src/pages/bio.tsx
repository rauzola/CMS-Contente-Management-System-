// pages/bio.tsx
import { GetStaticProps } from 'next';
import { GraphQLClient } from 'graphql-request';
import { AssetPageProps } from '@/components/Bio/types';
import { Asset } from '@/types/page-info';
import BioComponents from '@/components/Bio';
import { GET_ASSETS } from '@/components/Bio/graphql';

export default function AssetPage({ data }: AssetPageProps) {
  return (
    <div>
      {data.map(({ id, fileName, createdAt, publishedAt, url, updatedAt }) => (
        <div key={id}>
          <BioComponents
            fileName={fileName}
            createdAt={createdAt}
            publishedAt={publishedAt}
            updatedAt={updatedAt}
            url={url}
            assets={undefined}
            id={''}
          />
          <br />
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps<AssetPageProps> = async () => {
  const hygraph = new GraphQLClient(process.env.HYGRAPH_URL as string);

  try {
    const data: { assets: Asset[] } = await hygraph.request(GET_ASSETS);

    return {
      props: {
        data: data.assets,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [],
      },
    };
  }
};
