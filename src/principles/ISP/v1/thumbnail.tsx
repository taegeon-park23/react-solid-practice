import { IProduct } from "./product";

interface IThumbnailProps {
  product: IProduct;
}

export function Thumbnail(props: IThumbnailProps) {
  const { product } = props;
  const { image } = product;

  return (
    <img
      className="p-8 rounded-t-lg h-48"
      src={image}
      alt="product image"
    />
  );
}
