// test.js
const dynamicTexts = document.querySelectorAll('.dynamic-text');
dynamicTexts.forEach((el, idx) => {
  el.textContent = 'Sample text ' + (idx + 1);
});
// Example payment history array
const paymentHistory = [
  { date: "2025-08-01", amount: "₱1500" },
  { date: "2025-07-01", amount: "₱500" }
];

// Select the tbody for payment history
const tbody = document.querySelector("table tbody");

// Clear any existing rows (if needed)
tbody.innerHTML = "";

paymentHistory.forEach(payment => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${payment.date}</td>
    <td>${payment.amount}</td>
  `;
  tbody.appendChild(row);
});
