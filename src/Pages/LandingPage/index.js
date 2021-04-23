import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Context/Product";
import {
  fetchProductListAction,
  fetchFeaturedProduct,
  fetchProductCategoryAction
} from "../../Context/Product/action";
import ProductCard from "../../Components/ProductCard";
import AddToCardButton from "../../Components/AddToCartButton";
import Divider from "../../Components/Divider";
import MobileProductFilter from "../../Components/MobileProductFilter";
import Sort from "../../Components/Sort";
import Filter from "../../Components/Filter";
import Loader from "../../Components/Loader";
import useCart from "../../Hooks/useCart";

const LandingPage = () => {
  const {
    productState: {
      fetchingFeaturedProduct,
      featuredProduct,
      products,
      fetchingProductList,
      category,
    },
    dispatch,
  } = useContext(ProductContext);

  const [sortState, setSortState] = useState({
    sort: "",
    direction: true,
  });

  const sortHandler = ({ sortBy, direction }) => {
    setSortState({
      sort: sortBy,
      direction,
    });
  };
  const [filterState, setFilterState] = useState([]);

  const filterHandler = (list) => {
    setFilterState(list);
  };


  useEffect(() => {
      dispatch(fetchProductCategoryAction)
  }, [dispatch])
  useEffect(() => {
    dispatch(fetchFeaturedProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchProductListAction({
        filter: filterState,
        sort: sortState?.sort,
        direction: sortState?.direction,
      })
    );
  }, [dispatch, sortState, filterState]);

  const {
    isInCart: isFeaturedProductInCart,
    addProductToCartHandler,
  } = useCart({
    id: featuredProduct?.ref?.value?.id,
    ...featuredProduct,
  });
  const renderFeaturedProduct = () => {
    return (
      <>
        {fetchingFeaturedProduct && <Loader />}
        {!fetchingFeaturedProduct && !!featuredProduct?.name && (
          <>
            <div className="landingPage__featured--top">
              <h6 className="landingPage__featured--heading">
                {featuredProduct?.name}
              </h6>
              <div className="landingPage__featured--topCta">
                <AddToCardButton
                  inCart={isFeaturedProductInCart}
                  onClick={addProductToCartHandler}
                  classes="landingPage__featured--topCta__btn"
                />
              </div>
            </div>
            <div className="landingPage__featured--productCard">
              <ProductCard
                featured
                product={featuredProduct}
                productImage={featuredProduct?.image}
              />
            </div>
            <div className="landingPage__featured--bottomCta">
              <AddToCardButton
                inCart={isFeaturedProductInCart}
                onClick={addProductToCartHandler}
                classes="landingPage__featured--bottomCta__btn"
              />
            </div>
          </>
        )}
      </>
    );
  };

  const renderFeaturedProductDetails = () => {
    return (
      <>
        {!fetchingFeaturedProduct && !!featuredProduct?.name && (
          <>
            <div className="landingPage__featuredDetails">
              <div className="landingPage__featuredDetails--left">
                <h6 className="landingPage__featuredDetails--heading">
                  {!!featuredProduct?.name &&
                    ` About the ${featuredProduct?.name}`}
                </h6>
                <h6 className="landingPage__featuredDetails--category">
                  {featuredProduct?.category}
                </h6>
                <p className="landingPage__featuredDetails--description">
                  {featuredProduct?.details?.description}
                </p>
              </div>
              <div className="landingPage__featuredDetails--right">
                <h6 className="landingPage__featuredDetails--lead">
                  People also buy
                </h6>
                <ul className="landingPage__featuredDetails--productList">
                  {featuredProduct?.details?.recommendations?.map(
                    (recommendation, index) => (
                      <li
                        key={index}
                        className="landingPage__featuredDetails--product"
                      >
                        <ProductCard productImage={recommendation} />
                      </li>
                    )
                  )}
                </ul>
                <div className="landingPage__featuredDetails--spec">
                  <h6 className="landingPage__featuredDetails--specHeading">
                    Details
                  </h6>
                  <span className="landingPage__featuredDetails--specDetails">
                    {`Size: ${featuredProduct?.details?.dimmentions?.width} x ${featuredProduct?.details?.dimmentions?.height} pixel`}
                  </span>

                  <span className="landingPage__featuredDetails--specDetails">
                    {!!featuredProduct?.details?.size &&
                      `Size: ${
                        Number(featuredProduct?.details?.size) / 1000
                      } mb`}
                  </span>
                </div>
              </div>
            </div>{" "}
          </>
        )}
      </>
    );
  };

  const renderProductSectionHeader = () => {
    return (
      <div className="productSection__header">
        <h6 className="productSection__header--category">
          Photography /&nbsp;
          <span className="sub">premium photos</span>
        </h6>
        <div>
          <div className="productSection__header--filter">
            <MobileProductFilter category={category} filterHandler={filterHandler} />
          </div>
          <div className="productSection__header--sort">
            <Sort
              sortHandler={sortHandler}
              options={["price", "alphabetically"]}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderProductSectionList = () => {
    return (
      <div className="productSection__products">
        <div className="productSection__products--filter">
          <Filter filterHandler={filterHandler} category={category} />
        </div>

        <div className="productSection__products--list">
          {fetchingProductList && <Loader />}
          {!fetchingProductList &&
            products?.data?.map((product) => (
              <div
                key={product?.id}
                className="productSection__products--product"
              >
                <div className="productCard">
                  <ProductCard
                    bestSeller={product?.bestseller}
                    hasCta
                    productImage={product?.image}
                    product={product}
                  />
                </div>
                <div className="details">
                  <h6 className="category">{product?.category}</h6>
                  <h6 className="title">{product?.name}</h6>
                  <h6 className="amount">{`$${product?.price}`}</h6>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <main className=" landingPage ">
      <section className="layout__container--content ">
        <div className="landingPage__featured">
          {renderFeaturedProduct()}
          {renderFeaturedProductDetails()}
        </div>
      </section>
      <Divider />
      <section className="layout__container--content landingPage__productSection">
        {renderProductSectionHeader()}
        {renderProductSectionList()}
      </section>
    </main>
  );
};

export default LandingPage;
