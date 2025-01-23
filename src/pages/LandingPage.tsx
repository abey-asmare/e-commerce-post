import { useEffect } from "react";
import LargeProductCard from "../components/Products/LargeProductCard";
import { ProductType, useProductListingStore } from "../store/productStore";

function LandingPage() {
  const { products, getAllProducts, loading, error } = useProductListingStore();

  useEffect(() => {
    getAllProducts();
  }, []);


  if (loading) {
    return (
      <div className="px-2 md:px-14 lg:m-auto">
        <div className="products-container flex flex-wrap justify-center gap-2 md:gap-5">
          {Array.from({ length: 16 }).map((_, index) => (
              <LargeProductCard key={index} skeleton={loading}></LargeProductCard>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-2 md:px-14 lg:m-auto">
        <p>Error {error}</p>
      </div>
    );
  }

  return (
    <div className="px-2 md:px-14 lg:m-auto">
      <div className="products-container flex flex-wrap gap-2 sm:gap-5 justify-center">
        {products?.map((product: ProductType) => (
          <a href={`products/${product.id}`}>
            <LargeProductCard
            key={product.id}
            product={product}
            skeleton={loading}
          ></LargeProductCard>
          </a>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
