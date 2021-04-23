import faunadb from "faunadb";
import {
  createProducts,
  getProductList,
  getFeaturedProducts,
  getSortedProduct,
  getProductCategory,
} from "./queries/Products/queries";
import {
  createAllProductsIndex,
  createFeaturedIndex,
  createSortProductIndexByName,
  createSearchByCategoryIndex,
  createSortProductIndexByPrice,
} from "./queries/Products/indexes";

class QueryManager {
  constructor(key) {
    this.client = new faunadb.Client({ secret: key });
  }

  async createProducts(products) {
    await createProducts(this.client, products);
  }

  async createAllProductIndex() {
    await createAllProductsIndex(this.client);
  }

  async createFeaturedProductIndex() {
    await createFeaturedIndex(this.client);
  }

  async createSearchandSortIndex() {
    await createSortProductIndexByName(this.client);
    await createSearchByCategoryIndex(this.client);
    await createSortProductIndexByPrice(this.client);
  }

  async getProductList(count, before, after) {
    const res = await getProductList(this.client, count, before, after);
    return res;
  }

  async getCategory() {
    const res = await getProductCategory(this.client);
    return res;
  }

  async getFeaturedProduct(featured, size) {
    const res = await getFeaturedProducts(this.client, featured, size);
    return res;
  }

  async fetchSortedProduct(count, sort, before, after, direction, filter) {
    const res = await getSortedProduct(
      this.client,
      count,
      sort,
      before,
      after,
      direction,
      filter
    );

    return res;
  }
}

const faunaQueries = new QueryManager(process.env.REACT_APP_FAUNA_SERVER_KEY);
export { faunaQueries, QueryManager };
