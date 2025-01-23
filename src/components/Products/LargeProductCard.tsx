import { SM_CARD_DELAYS } from "../../lib/constants";
import { Skeleton } from "../ui/skeleton";
import { ProductType } from "../../store/productStore";

function LargeProductCard({
  skeleton = true,
  product,
}: {
  skeleton?: boolean;
  product?: ProductType;
}) {
  return skeleton || !product? (
    <div
      key={product?.id}
      className="product-img-lg-container my-2 w-[160px] lg:h-[520px] md:w-[200px] lg:w-[260px] max-w-[260px]"
    >
      <div className=" product-lg products flex flex-col gap-2">
        <div className="product-img overflow-hidden w-full  h-[160px] md:h-[200px] lg:h-[260px] rounded-sm grow">
          <Skeleton className="w-full h-full"></Skeleton>
        </div>
        <div className="product-sm-img-container gap-2 hidden lg:flex">
          <div className="product-sm-img rounded-sm overflow-hidden product-xsm w-8 h-8 animate-opaquex">
            <Skeleton className="w-full h-full"></Skeleton>
          </div>
          <div className="product-sm-img rounded-sm overflow-hidden product-xsm w-8 h-8  delay-100 animate-opaquex">
            <Skeleton className="w-full h-full"></Skeleton>
          </div>
        </div>

        <div className="will-change-auto product-description transition duration-150 group-hover/heroItem:translate-y-2 group-hover/heroItem:will-change-transform font-medium text-lg flex flex-col">
          <Skeleton className=" h-2 my-1 md:h-3 md:my-2"></Skeleton>
          <Skeleton className=" h-2 my-1 md:h-3 md:my-2 w-4/5 w-4/5"></Skeleton>
          <Skeleton className=" h-2 my-1 md:h-3 md:my-2 w-4/5 w-3/4"></Skeleton>
          <Skeleton className=" h-2 my-1 md:h-3 md:my-2 w-4/5 w-1/2 "></Skeleton>
        </div>
      </div>
    </div>
  ) : (
    <div
      key={product.id}
      className="product-img-lg-container my-2 w-[160px] lg:h-[520px] md:w-[200px] lg:w-[260px] max-w-[260px]"
    >
      <div className=" product-lg products flex flex-col gap-2 group/heroItem ">
        <div className="product-img overflow-hidden  w-full h-1/2 rounded-sm">
          <img
            src={product.imageUrl}
            className="w-full h-full object-cover"
            alt="t-shrit images"
          />
        </div>
        <div className="product-sm-img-container gap-2 hidden lg:flex">
          {product.subImageUrls.map((url, index) => (
            <div
              key={url}
              className={`product-sm-img rounded-sm overflow-hidden hidden group-hover/heroItem:inline-block product-xsm w-8 h-8 animate-opaquex ${SM_CARD_DELAYS[index]}`}
            >
              <img
                src={url}
                className="w-full h-full object-cover"
                alt="additional images"
              />
            </div>
          ))}
        </div>

        <div className="will-change-auto product-description transition duration-150 lg:group-hover/heroItem:translate-y-2 lg:group-hover/heroItem:will-change-transform font-medium md:text-lg">
          <p className="product-status text-c_red-500">{product.label}</p>
          <p className="product-category text-gray-500">{product.category}</p>
          <p className="product-color-options text-gray-500">
            {product.colors} colors
          </p>
          <p className="product-name ">{product.title}</p>
          <p className="product-price font-semibold">
            ${product.discount ? product.discountedPrice : product.price}
            {product.discount && (
              <sup className="px-2 text-c_red-500 line-through">
                ${product.price}
              </sup>
            )}
          </p>
          {product.discount && (
            <p className="product-status text-green-700">
              {Math.round(product.price / product.discountedPrice) * 100}% off
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LargeProductCard;
