const warehouses = [
  {
    name: "Warehouse A",
    products: [{ id: 1, name: "Laptop", quantity: 10 }],
  },
  {
    name: "Warehouse B",
    products: [{ id: 1, name: "Laptop", quantity: 3 }],
  },
];

function transferProduct(warehouses, fromName, toName, productId, quantity) {
  if (quantity <= 0) {
    console.log("Invalid quantity");
    return;
  }

  let source = null;
  let destination = null;

  for (let i = 0; i < warehouses.length; i++) {
    if (warehouses[i].name === fromName) {
      source = warehouses[i];
    }

    if (warehouses[i].name === toName) {
      destination = warehouses[i];
    }
  }

  if (!source || !destination || source === destination) {
    console.log("Invalid warehouses");
    return;
  }

  let sourceProduct = null;
  let destinationProduct = null;

  for (let i = 0; i < source.products.length; i++) {
    if (source.products[i].id === productId) {
      sourceProduct = source.products[i];
    }
  }

  for (let i = 0; i < destination.products.length; i++) {
    if (destination.products[i].id === productId) {
      destinationProduct = destination.products[i];
    }
  }

  if (!sourceProduct) {
    console.log("Product not found in source");
    return;
  }

  if (sourceProduct.quantity < quantity) {
    console.log("Insufficient stock");
    return;
  }

  if (!destinationProduct) {
    console.log("Product not found in destination");
    return;
  }

  sourceProduct.quantity -= quantity;
  destinationProduct.quantity += quantity;

  console.log("Transfer successful");
}

transferProduct(warehouses, "Warehouse A", "Warehouse B", 1, 4);

console.log(warehouses);
