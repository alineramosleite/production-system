import axios from "axios";
import { useEffect, useState } from "react";

export default function RawMaterialForm() {
  const [name, setName] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [rawMaterial, setRawMaterial] = useState([]);

  useEffect(() => {
    fetchRawMaterials();
  }, []);

  const fetchRawMaterials = async () => {
    try {
      const response = await axios.get("http://localhost:8080/raw-materials");
      setRawMaterial(response.data);
    } catch (error) {
      console.error("Error fetching raw materials:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newRawMaterial = { name, stockQuantity: parseFloat(stockQuantity) };
      await axios.post("http://localhost:8080/raw-materials", newRawMaterial);
      setName("");
      setStockQuantity("");
      fetchRawMaterials();
    } catch (error) {
      console.error("Error adding raw material:", error);
    }
  };

  return (
    <div>
      <h2>Matéria Prima</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
          required
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {rawMaterial.map((x) => (
          <li key={x.id}>
            {x.name} - {x.stockQuantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
