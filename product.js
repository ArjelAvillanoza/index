// script.js
// Sample product data
let products = [
  { name: 'T-shirt', status: 'In-Stock' },
  { name: 'Socks', status: 'In-Stock' }
];

// Renders products into product-list div
function renderProducts() {
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  products.forEach((product, idx) => {
    const item = document.createElement('div');
    item.className = 'product-item';

    item.innerHTML = `
      <div class="product-info">
        <span class="product-name">${product.name}</span>
        <span class="product-status">Status: ${product.status}</span>
      </div>
      <button class="edit-btn" onclick="editProduct(${idx})">Edit</button>
    `;
    list.appendChild(item);
  });
}

// Simple edit simulation (you can expand with a modal)
function editProduct(idx) {
  const current = products[idx];
  const newName = prompt('Edit Product Name:', current.name);
  if (newName && newName.trim() !== '') {
    products[idx].name = newName.trim();
    renderProducts();
  }
}

// Handle add product functionality
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
  document.getElementById('addProductBtn').addEventListener('click', function() {
    const name = prompt('Enter product name:');
    if (name && name.trim() !== '') {
      products.push({ name: name.trim(), status: 'In-Stock' });
      renderProducts();
    }
  });
});
