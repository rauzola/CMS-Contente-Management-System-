import { GetStaticProps } from 'next';
import { GraphQLClient } from 'graphql-request';

interface Asset {
  createdAt: string;
  id: string;
  publishedAt: string;
  fileName: string;
  url: string;
  updatedAt: string;
}

interface AssetPageProps {
  data: Asset[];
}

const AssetPage: React.FC<AssetPageProps> = ({ data }) => (
  <div>
    {data.map(({ id, fileName, createdAt, publishedAt, url, updatedAt }) => (
      <div key={id}>
        <a>{fileName}</a><br />
        <a>{createdAt}</a><br />
        <a>{publishedAt}</a><br />
        <a>{url}</a><br />
        <a>{updatedAt}</a>
        <br />
        <br />
      </div>
    ))}
  </div>
);

export const getStaticProps: GetStaticProps<AssetPageProps> = async () => {
  const hygraph = new GraphQLClient(process.env.HYGRAPH_URL as string);


  const data: { assets: Asset[] } = await hygraph.request(
    `
    query Assets {
      assets {
        createdAt
        id
        publishedAt
        fileName
        url
        updatedAt
      }
    }
    `
  );

  return {
    props: {
      data: data.assets,
    },
  };
};

export default AssetPage;
