import { useEffect, useState } from "react";
import ProductsForm from "../components/ProductsForm";
import { getProducts } from "../services/products";

export default function Products() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    getProducts().then(setProducts).catch(console.error);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div style={{ padding: `20px` }}>
      <h1>Products</h1>

      <ProductsForm onSuccess={loadProducts} />

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
