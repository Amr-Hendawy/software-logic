import { data } from "./data.js";


function getProduct(warehouse, productId) {
  for (let i = 0; i < warehouse.products.length; i++) {
    if (warehouse.products[i].id === productId) {
      return warehouse.products[i];
    }
  }
  return null;
}






transferProduct(warehouses, "warehouse A", "warehouse B", 1, 5);
console.log(warehouses);
