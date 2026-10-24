function validateTransfer(
  source,
  destination,
  quantity,
  sourceProduct,
  destinationProduct,
) {
  if (quantity <= 0 || !Number.isInteger(quantity)) {
    return "invalid quantity";
  }
  if (source === destination || !destination || !source) {
    console.log("invalid warehouse");
    return;
  }
  if (!sourceProduct) {
    console.log("product not found in source");
    return;
  }
  if (!destinationProduct) {
    console.log("product not found in destination");
    return;
  }
  if (sourceProduct.quantity < quantity) {
    console.log("invalid stock");
    return;
  }

  if (!Number.isSafeInteger(destinationProduct.quantity + quantity)) {
    console.log("destination quantity exceeds the safe limit");
    return false;
  }
  destinationProduct.quantity -= quantity;
  sourceProduct.quantity += quantity;
}
