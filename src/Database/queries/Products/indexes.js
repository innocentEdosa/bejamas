import  { query as q } from "faunadb"
import handleQuery from '../../utils/handleQuery';
const { CreateIndex, Collection } = q;

export const createAllProductsIndex = (client) => {
    return handleQuery(client.query(
        CreateIndex({
            name: "all_products",
            source: Collection('products')
        })
    ), 'creating_all_product_index')
}

export const createFeaturedIndex = (client) => {
  return handleQuery(
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

export const createSortProductIndexByPrice = (client) => {
  return handleQuery(
    client.query(
      CreateIndex({
        name: "all_product_sorted_by_price",
        source: Collection("products"),
        terms: [
            { field: ["ref"] }
          ],
          values: [
            { field: ["data", "price"] },
            { field: ["ref"] }
          ]
      
      })
    )
  );
};

export const createSortProductIndexByName = (client) => {
  return handleQuery(
    client.query(
      CreateIndex({
        name: "all_product_sorted_by_name",
        source: Collection("products"),
        terms: [{ field: ["ref"] }],
        values: [{ field: ["data", "name"] }, { field: ["ref"] }],
      })
    )
  );
};

export const createSearchByCategoryIndex = (client) => {
  return handleQuery(
    client.query(
      CreateIndex({
        name: "all_product_search_by_category",
        source: Collection("products"),
        terms: [{ field: ["data", "category"] }],
      })
    )
  );
};

