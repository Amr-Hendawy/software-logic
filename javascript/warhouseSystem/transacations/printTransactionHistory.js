function printTransactionHistory() {
  if (transactions.length === 0) {
    console.log("No Transaction Yet");
    return;
  }
  for (let i = 0; i < transactions.length; i++) {
    console.log(transactions[i]);
  }
}
