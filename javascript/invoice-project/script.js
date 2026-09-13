// javascript
// =========================
// Elements
// =========================

const unitPrice = document.getElementById("amount");

const productPrice = document.getElementById("productPrice");

const taxValue = document.getElementById("taxValue");

const totalValue = document.getElementById("totalValue");

const modal = document.getElementById("modal");

const confirmationMessage = document.getElementById("confirmationMessage");

const cancelBtn = document.getElementById("cancelBtn");

const confirmBtn = document.getElementById("confirmBtn");

// =========================
// Data
// =========================

let currentAmount = 1000;

const taxRate = 0.14;

let newAmount;

// =========================
// Format Money
// =========================

function formatMoney(number) {
  return `$${number.toFixed(2)}`;
}

// =========================
// Update Invoice
// =========================

function updateInvoice(amount) {
  const tax = amount * taxRate;

  const total = amount + tax;

  productPrice.textContent = formatMoney(amount);

  taxValue.textContent = formatMoney(tax);

  totalValue.textContent = formatMoney(total);
}

// =========================
// Input Change
// =========================

unitPrice.addEventListener("change", function () {
  newAmount = Number(unitPrice.value);

  // القيمة لم تتغير

  if (newAmount === currentAmount) {
    return;
  }

  // التحقق من القيمة

  if (newAmount <= 0) {
    alert("Please enter a valid amount.");

    unitPrice.value = currentAmount;

    return;
  }

  // إظهار رسالة التأكيد

  confirmationMessage.textContent = `Change ${formatMoney(currentAmount)} → ${formatMoney(newAmount)} ?`;

  modal.classList.add("active");
});

// =========================
// Confirm
// =========================

confirmBtn.addEventListener("click", function () {
  // حفظ القيمة الجديدة

  currentAmount = newAmount;

  // تحديث الـ input

  unitPrice.value = currentAmount;

  // تحديث الفاتورة

  updateInvoice(currentAmount);

  // إغلاق الـ Modal

  modal.classList.remove("active");
});

// =========================
// Cancel
// =========================

cancelBtn.addEventListener("click", function () {
  // إرجاع القيمة القديمة

  unitPrice.value = currentAmount;

  // إغلاق الـ Modal

  modal.classList.remove("active");
});

// =========================
// Initial Invoice
// =========================

updateInvoice(currentAmount);
