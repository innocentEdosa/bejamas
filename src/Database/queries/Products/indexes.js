import  { query as q } from "faunadb"
import handleQueryError from '../../utils/handleQuery';
const { CreateIndex, Collection } = q;

export const createAllProductsIndex = (client) => {
    return handleQueryError(client.query(
        CreateIndex({
            name: "all_products",
            source: Collection('products')
        })
    ), 'creating_all_product_index')
}

export const createFeaturedIndex = (client) => {
  return handleQueryError(
    client.query(
      CreateIndex({
        name: "all_products_by_featured",
        source: Collection("products"),
        terms: [{ field: ["data", "featured"] }],
      })
    ),
    "creating_all_product_by_featured"
  );
};

