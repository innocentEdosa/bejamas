import {
FETCHING_PRODUCT_LIST,
FETCHING_PRODUCT_LIST_COMPLETE,
FETCHING_PRODUCT_LIST_FAILED,

FETCHING_FEATURED_PRODUCT,
FETCHING_FEATURED_PRODUCT_COMPLETE,
FETCHING_FEATURED_PRODUCT_FAILED,
PRODUCT_CATEGORY,
} from './types';
import { faunaQueries } from '../../Database/queryManager';
import flattenDataKeys from '../../Database/utils/flattenData';
import getUniqueValues from '../../Utils/uniqueValues';

export const fetchProductCategoryAction = async (dispatch) => {
  const response = await faunaQueries.getCategory();

  const category = getUniqueValues(
    response?.data?.map((category) => category?.category)
  );
  dispatch({ type: PRODUCT_CATEGORY, category });
};


export const fetchAllProduct = ({
  count = 6, before, after
}) => async (dispatch) => {
  try {
    dispatch({type: FETCHING_PRODUCT_LIST })
    const response = await faunaQueries.getProductList(count, after, before)
    dispatch({type: FETCHING_PRODUCT_LIST_COMPLETE, products: response})
    
  } catch (error) {
    dispatch({type: FETCHING_PRODUCT_LIST_FAILED})
  }
}

export const fetchSortedProduct = ({
  count,
  after,
  before,
  sort,
  direction,
  filter,
}) => async (dispatch) => {
  try {
    dispatch({type: FETCHING_PRODUCT_LIST })
    const response = await faunaQueries.fetchSortedProduct(
      count,
      sort,
      before,
      after,
      direction,
      filter,
    );
    dispatch({type: FETCHING_PRODUCT_LIST_COMPLETE, products: response})
  } catch (error) {
    dispatch({type: FETCHING_PRODUCT_LIST_FAILED})
  }
};

export const fetchProductListAction = ({
  filter = [],
  sort,
  count = 6,
  after,
  before,
  direction,
  
}) => async (dispatch) => {

  if (!filter?.length && !sort) {
    dispatch(
      fetchAllProduct({
        count,
        after,
        before,
      })
    );
  } else {
    dispatch(
      fetchSortedProduct({
        count,
        after,
        before,
        sort,
        direction,
        filter
      })
    );
  }
};

export const fetchFeaturedProduct = (featured = true, size = 1) => async (dispatch) => {
  try {
    dispatch({type: FETCHING_FEATURED_PRODUCT})
    const product = await faunaQueries.getFeaturedProduct(featured, size);
    dispatch({type: FETCHING_FEATURED_PRODUCT_COMPLETE, product: flattenDataKeys(product)?.['0']})
  } catch (error) {
    dispatch({type: FETCHING_FEATURED_PRODUCT_FAILED })
  }
}