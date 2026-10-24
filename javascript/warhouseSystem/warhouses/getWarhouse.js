export function getWarehouse(warehouses, name) {
  for (let i = 0; i < warehouses.length; i++) {
    if (warehouses[i].name === name) {
      return warehouses[i];
    }
  }
  return null;
}
