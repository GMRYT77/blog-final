import { request, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Assets {
      postsConnection {
        edges {
          node {
            authors {
              name
              slug
              picture {
                url
              }
            }
            category {
              ... on Category {
                id
                category
                slug
              }
            }
            date
            createdAt
            excerpt
            slug
            tags
            title
            coverImage {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
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
export const getRelatedPosts = async (tag) => {
  const query = gql`
    query GetRelatedPosts($tag: [String!]) {
      posts(where: { tags_contains_some: $tag }) {
        authors {
          name
          picture {
            url
          }
          slug
        }
        date
        title
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { tag });
  return result.posts;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetFeaturedPost {
      posts(where: { featuredPost: true }, last: 6, orderBy: publishedAt_DESC) {
        authors {
          name
          picture {
            url
          }
          slug
        }
        category {
          ... on Category {
            id
            slug
            category
          }
        }
        coverImage {
          url
        }
        createdAt
        date
        slug
        title
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};
export const getRecentPosts = async () => {
  const query = gql`
    query GetLatestPost {
      postsConnection(
        last: 12
        orderBy: publishedAt_DESC
        where: { featuredPost: false }
      ) {
        edges {
          node {
            authors {
              name
              slug
              picture {
                url
              }
            }
            category {
              ... on Category {
                id
                category
                slug
              }
            }
            date
            createdAt
            excerpt
            slug
            tags
            title
            coverImage {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};
