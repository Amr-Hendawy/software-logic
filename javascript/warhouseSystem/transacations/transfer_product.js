function transferProduct(warehouses, fromName, toName, productId, quantity) {
  const source = getWarehouse(warehouses, fromName);
  const destination = getWarehouse(warehouses, toName);

  const sourceProduct = source ? getProduct(source, productId) : null;

  const destinationProduct = destination
    ? getProduct(destination, productId)
    : null;

  const error = validateTransfer(
    source,
    destination,
    quantity,
    sourceProduct,
    destinationProduct,
  );

  if (error) {
    console.log(error);
    return false;
  }

  sourceProduct.quantity -= quantity;
  destinationProduct.quantity += quantity;

  const transaction = {
    id: nextTransactionId,
    type: "TRANSFER",
    from: source.name,
    to: destination.name,
    productId: productId,
    quantity: quantity,
    rolledBack: false,
  };

  transactions.push(transaction);
  nextTransactionId++;

  console.log("Transfer successful");
  return true;
}
