import { query as q } from "faunadb";
import handleQuery from "../../utils/handleQuery";
const {
  Union,
  Map,
  Lambda,
  Var,
  Create,
  Collection,
  Paginate,
  Index,
  Match,
  Let,
  Get,
  Select,
} = q;

// const sortIndex = {
//   price: "all_product_sorted_by_price",
//   alphabetically: "all_product_sorted_by_name",
// };

export const createProducts = (client, products) => {
  return client.query(
    Map(
      products,
      Lambda(
        "product",
        Create(Collection("products"), { data: Var("product") })
      )
    )
  );
};

export const getProductList = (client, count, before, after) => {
  return handleQuery(
    client.query(
      Map(
        Paginate(Match(Index("all_products")), {
          size: count,
          before,
          after,
        }),
        Lambda(
          "productRef",
          Let(
            {
              productData: Get(Var("productRef")),
            },
            {
              id: Select(["ref", "id"], Var("productData")),
              name: Select(["data", "name"], Var("productData")),
              price: Select(["data", "price"], Var("productData")),
              bestseller: Select(["data", "bestseller"], Var("productData")),
              category: Select(["data", "category"], Var("productData")),
              image: Select(["data", "image"], Var("productData")),
            }
          )
        )
      )
    )
  );
};

export const getProductCategory = (client) => {
  return handleQuery(
    client.query(
      Map(
        Paginate(Match(Index("all_products"))),
        Lambda(
          "productRef",
          Let(
            {
              productData: Get(Var("productRef")),
            },
            {
              category: Select(["data", "category"], Var("productData")),
            }
          )
        )
      )
    )
  );
};

export const getFeaturedProducts = (client, featured, size) => {
  return handleQuery(
    client.query(
      Map(
        Paginate(Match(Index("all_products_by_featured"), featured), { size }),
        Lambda("productRef", Get(Var("productRef")))
      )
    )
  );
};

export const getSortedProduct = (
  client,
  count = 6,
  sort,
  before,
  after,
  direction,
  filter = []
) => {
  const matches = [];

  for (let i = 0; i < filter.length; i += 1) {
    matches.push(Match(Index("all_product_search_by_category"), filter[i]));
  }

  return handleQuery(
    client.query(
      Map(
        Paginate(Union(matches), { size: count }),
        Lambda(
          "productRef",
          Let(
            {
              productData: Get(Var("productRef")),
            },
            {
              id: Select(["ref", "id"], Var("productData")),
              name: Select(["data", "name"], Var("productData")),
              price: Select(["data", "price"], Var("productData")),
              bestseller: Select(["data", "bestseller"], Var("productData")),
              category: Select(["data", "category"], Var("productData")),
              image: Select(["data", "image"], Var("productData")),
            }
          )
        )
      )
    )
  );
};
