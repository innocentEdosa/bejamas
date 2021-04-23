import { 
  FETCHING_FEATURED_PRODUCT,
  FETCHING_FEATURED_PRODUCT_COMPLETE,
  FETCHING_FEATURED_PRODUCT_FAILED,

  FETCHING_PRODUCT_LIST,
  FETCHING_PRODUCT_LIST_COMPLETE,
  FETCHING_PRODUCT_LIST_FAILED,
  
} from './types';


export const initialState = {
    fetchingProductList: false,
    featuredProduct: {},
    fetchingFeaturedProduct: false,
    products: {}
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FEATURED_PRODUCT: return ({
      ...state,
      fetchingFeaturedProduct: true,
    });
    case FETCHING_FEATURED_PRODUCT_FAILED: return ({
      ...state,
      fetchingFeaturedProduct: false,
    })
    case FETCHING_FEATURED_PRODUCT_COMPLETE: return ({
      ...state,
      fetchingFeaturedProduct: false,
      featuredProduct: action?.product
    })
    case FETCHING_PRODUCT_LIST: return ({
      ...state,
      fetchingProductList: true,
    });
    case FETCHING_PRODUCT_LIST_FAILED: return ({
      ...state,
      fetchingProductList: false,
    })
    case FETCHING_PRODUCT_LIST_COMPLETE: return {
      ...state,
      fetchingProductList: false,
      products: action?.products,
    }
    default:
      return state;
  }
};