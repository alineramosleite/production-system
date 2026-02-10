import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductionList() {
  const [productionOrders, setProductionOrders] = useState([]);

  useEffect(() => {
    fetchProductionOrders();
  }, []);

  const fetchProductionOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/production");
      setProductionOrders(response.data);
    } catch (error) {
      console.error("Error fetching production orders:", error);
    }
  };

  return (
    <div>
      <h2>Lista de Ordens de Produção</h2>
      <ul>
        {productionOrders.map((order) => (
          <li key={order}>
            Produto Id: {order.productId} | Produto Nome: {order.productName} |
            Quantidade de Produção: {order.possibleQuantity} | Valor Unitário: $
            {order.unitPrice} | Valor Total: ${order.totalValue}
          </li>
        ))}
      </ul>
    </div>
  );
}
