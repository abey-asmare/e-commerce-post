import Comment from "../components/Comment";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useCommentsStore } from "../store/commentStore";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductType, useProductListingStore } from "../store/productStore";

function ProductDetail() {
  const {
    newComment,
    setNewComment,
    showInputId,
    setShowInputId,
    comments,
    handleAddComment,
  } = useCommentsStore();

  const { getProduct } = useProductListingStore();

  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  useEffect(() => {
    const product = getProduct(Number(id));
    setProduct(product);
  }, []);

  return (
    <div className="flex flex-col px-4 md:px-16 ">
      <div className="flex justify-between"></div>
      <div className="flex gap-16  my-4 justify-center flex-wrap">
        <div className=" lg:w-[400px] lg:h-[360px]">
          <img
            src={product?.imageUrl}
            alt="Image"
            className="rounded-md object-cover w-full h-full"
          />
        </div>
        <div className=" flex flex-col gap-4 flex-wrap">
          <div className="productname  font-medium text-[18px] md:text-[32px] md:font-semibold">
            {product?.title}
          </div>
          <div className="price  lg:font-semibold font-medium text-[20px] lg:text-[34px]">
            {product?.price}
          </div>
          <div className="description lg:w-[60ch]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            voluptas nisi quis libero laudantium assumenda culpa consequatur
            sint explicabo excepturi quaerat beatae perspiciatis corrupti ipsa
            fuga consequuntur, hic accusamus corporis!
          </div>
          <button className="bg-black text-white hover:bg-black/75 text-lg font-medium py-2 rounded-md">
            Buy Now
          </button>
        </div>
      </div>
      <div className="comments mt-4 mb-20 w-[600px]">
        <div className="my-4 text-lg font-medium underline">Comments</div>
        {comments.map((comment) => (
          <Comment
            comment={comment}
            showInputId={showInputId}
            handleShowInput={(id: number | null) => setShowInputId(id)}
          />
        ))}

        <Textarea
          placeholder="your comment here "
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></Textarea>
        <Button
          className="text-white bg-black hover:opacity-90"
          onClick={handleAddComment}
        >
          Send{" "}
        </Button>
      </div>
    </div>
  );
}

export default ProductDetail;
