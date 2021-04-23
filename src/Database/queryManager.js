import faunadb, { query as q } from "faunadb";
import {
  createProducts,
  getProductList,
  getFeaturedProducts,
} from "./queries/Products/queries";
import {
  createAllProductsIndex,
  createFeaturedIndex,
} from "./queries/Products/indexes";

class QueryManager {
  constructor(key) {
    this.client = new faunadb.Client({ secret: key });
  }

  async createProducts(products) {
    const res = await createProducts(this.client, products);
    console.log(res, "this is the response from the create product");
  }

  async createAllProductIndex() {
    await createAllProductsIndex(this.client);
  }

  async createFeaturedProductIndex() {
    await createFeaturedIndex(this.client);
  }

  async getProductList(count, before, after) {
    const res = await getProductList(this.client, count, before, after);
    return res;
  }

  async getFeaturedProduct(featured, size) {
    const res = await getFeaturedProducts(this.client, featured, size);
    return res;
  }
}

const faunaQueries = new QueryManager(process.env.REACT_APP_FAUNA_SERVER_KEY);
export { faunaQueries, QueryManager };
