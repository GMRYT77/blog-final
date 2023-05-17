import { request, gql } from "graphql-request";
const graphqlAPI =
  "https://api-ap-south-1.hygraph.com/v2/clhpygv7j79qq01uo1d255vhf/master";

export const getPosts = async () => {
  const query = gql`
    query Assets {
      posts {
        title
        authors {
          slug
          name
          id
        }
        coverImage {
          url
        }
        slug
        tags
        publishedAt
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};
