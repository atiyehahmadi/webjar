import { request, gql } from 'graphql-request'

const graphqlAPI = "https://challenge.webjar.ir/graphql"

export const getCategories = async () => {
    const query = gql`
      query getCategories  {
        getPostCategories {
            name
          }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.categories;
  };

