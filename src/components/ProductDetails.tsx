import { Product } from "../types/index";
import { formatCurrency } from "../utils";

type ProductDetailProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailProps) => {

    const isAvailable = product.availability;

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800">{formatCurrency(product.price)}</td>
      <td className="p-3 text-lg text-gray-800">{isAvailable ? "Disponible" : "No Disponible"}</td>
      <td className="p-3 text-lg text-gray-800"></td>
    </tr>
  );
};

export default ProductDetails;
