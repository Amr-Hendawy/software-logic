import { warehouses, transactions } from "./data.js";

import { validateWarehouseData } from "./warehouses/validateWarehouseData.js";
import { transferProduct } from "./transactions/transferProduct.js";
import { printTransactionHistory } from "./transactions/printTransactionHistory.js";
import { rollBackTransfere } from "./transactions/rollBackTransfere.js";

// 1. Validate warehouse data
const warehouseError = validateWarehouseData(warehouses);

if (warehouseError) {
  console.log("Invalid data:", warehouseError);
} else {
  console.log("Warehouse data is valid");
}

// 2. Transfer product
const transferSuccess = transferProduct(
  warehouses,
  "warehouse A",
  "warehouse B",
  1,
  5,
);

if (transferSuccess) {
  console.log("Transfer completed successfully");
}

// 3. Print warehouses after transfer
console.log("Warehouses after transfer:");
console.log(warehouses);

// 4. Print transaction history
console.log("Transaction history:");
printTransactionHistory();

// 5. Rollback transaction
const rollbackSuccess = rollBackTransfere(warehouses, 1);

if (rollbackSuccess) {
  console.log("Rollback completed successfully");
}

// 6. Print final warehouses
console.log("Warehouses after rollback:");
console.log(warehouses);

// 7. Print final transaction history
console.log("Final transaction history:");
printTransactionHistory();
