import { gql } from 'graphql-request';

export const GET_ASSETS = gql`
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
`;