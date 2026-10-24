function rollBackTransfere(warehouses, transactionsId) {
  if (!Number.isSafeInteger(transactionsId) || transactionsId <= 0) {
    console.log("invalid transation");
    return false;
  }
  let transaction = null;
  for (i = 0; i < transaction.length; i++) {
    if (transactions[i].id === transactionsId) {
      transaction = transactions[i];
      break;
    }
  }
  if (!transaction) {
    console.log("transaction not found");
    return false;
  }
  if (transaction.type !== "TRANSFER") {
    console.log("only completed transaction can be rolled back");
  }
  if (transaction.rolledBack) {
    console.log("trabsaction already rolled back");
    return false;
  }
}
