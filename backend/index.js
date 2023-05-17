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
export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        id
        category {
          ... on Category {
            id
            category
            slug
          }
        }
        coverImage {
          url
        }
        date
        slug
        title
        tags
        authors {
          bio
          name
          slug
          picture {
            url
          }
        }
        content {
          html
          json
          markdown
          raw
          text
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};
