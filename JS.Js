let cart = [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseInt(button.getAttribute('data-price'));
    const item = cart.find(i => i.name === name);

    if (item) {
      item.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>Rp ${item.price.toLocaleString()}</td>
      <td>${item.qty}</td>
      <td>Rp ${(item.price * item.qty).toLocaleString()}</td>
    `;
    cartItems.appendChild(row);
    total += item.price * item.qty;
  });
  cartTotal.textContent = total.toLocaleString();
  cartCount.textContent = cart.length;
}
