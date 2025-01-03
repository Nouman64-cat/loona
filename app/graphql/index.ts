import { GraphQLClient, gql } from "graphql-request";
import { Product } from "@/app/types/Product";

const URL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
const graphqlAPI = new GraphQLClient(URL as string);

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
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
    const result = await graphqlAPI.request<{ products: Product[] }>(query);
    return result.products;
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
};

export const fetchProductById = async (id: string): Promise<Product | null> => {
  if (!id) {
    console.error("Invalid ID provided for fetchProductById");
    return null;
  }
    const query = gql`
      query MyQuery($id: ID!) {
        product(where: { id: $id }) {
          name
          id
          price
          brand
          color {
            hex
          }
          size
          dimensions
          image {
            url
          }
        }
      }
    `;
    try {
      const result = await graphqlAPI.request<{ product: Product }>(query, {
        id,
      });
      return result.product;
    } catch (error) {
      console.error(`Error fetching product with ID: ${id}`, error);
      return null;
    }
  };