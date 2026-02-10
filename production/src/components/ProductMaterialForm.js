import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductMaterialForm() {
  const [product, setProduct] = useState("");
  const [rawMaterial, setRawMaterial] = useState("");
  const [requiredQuantity, setRequiredQuantity] = useState("");
  const [productMaterials, setProductMaterials] = useState([]);

  useEffect(() => {
    fetchProductMaterials();
  }, []);

  const fetchProductMaterials = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/product-materials",
      );
      setProductMaterials(response.data);
    } catch (error) {
      console.error("Error fetching product materials:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newProductMaterial = {
        productId: parseInt(product),
        rawMaterialId: parseInt(rawMaterial),
        requiredQuantity: parseInt(requiredQuantity),
      };
      await axios.post(
        "http://localhost:8080/product-materials",
        newProductMaterial,
      );
      setProduct("");
      setRawMaterial("");
      setRequiredQuantity("");
      fetchProductMaterials();
    } catch (error) {
      console.error("Error adding product material:", error);
    }
  };

  return (
    <div>
      <h2>Materiais do Produto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="ID do Produto"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="ID da Matéria Prima"
          value={rawMaterial}
          onChange={(e) => setRawMaterial(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={requiredQuantity}
          onChange={(e) => setRequiredQuantity(e.target.value)}
          required
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {productMaterials.map((productMaterial) => (
          <li key={productMaterial.id}>
            Id Produto: {productMaterial.product.id} | Id Matéria Prima:{" "}
            {productMaterial.rawMaterial.id} | Quantidade:{" "}
            {productMaterial.requiredQuantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
