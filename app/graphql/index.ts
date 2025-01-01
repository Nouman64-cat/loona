// graphql.ts
import { GraphQLClient, gql } from "graphql-request";
import { ProductsResponse } from "@/app/types/Product";

const URL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
const graphqlAPI = new GraphQLClient(URL as string);

export const fetchProducts = async (): Promise<ProductsResponse> => {
  const query = gql`
    query MyQuery {
      products {
        name
        id
        price
        brand
        color {
          hex
        }
        quality
        size
        dimensions
            image {
      url
    }
      }
    }
  `;
  try {
    const result = await graphqlAPI.request<{ products: ProductsResponse }>(
      query
    );
    return result.products; // Ensure this matches ProductsResponse
  } catch (error) {
    console.error("Error fetching products", error);
    return []; // Return an empty array in case of failure
  }
};
