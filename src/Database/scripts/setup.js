import products from "./Seeds/products";
import { faunaQueries } from "../queryManager";

const setup = async () => {
  await faunaQueries.createProducts(products);
  await faunaQueries.createAllProductIndex()
  await faunaQueries.createFeaturedProductIndex()
};

setup();
