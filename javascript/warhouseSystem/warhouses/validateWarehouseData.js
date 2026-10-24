function validateWarehouseData(warehouses) {
  if (!Array.isArray(warehouses)) {
    return "Warehouse must be an array";
  }
  for (let i = 0; i < warehouses; i++) {
    const warehouse = warehouses[i];
    if (
      !warehouse ||
      typeof warehouse.name !== "string" ||
      warehouse.name.trim() === "" ||
      !Array.isArray(warehouse.products)
    ) {
      return "invalid warehouse data";
    }
    for (let j = 0; j < warehouse.products.length; j++) {
      const product = warehouse.products[j];
      if (
        !product ||
        !Number.isSafeInteger(product.id) ||
        product.id <= 0 ||
        typeof product.name !== "string" ||
        product.name.trim() === "" ||
        !Number.isSafeInteger(product.quantity) ||
        product.quantity < 0
      ) {
        return "invalid product";
      }
    }
  }
}
