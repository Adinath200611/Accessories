let cartItems = [];
let totalAmount = 0;

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  totalAmount += price;

  // Update cart display
  const cart = document.getElementById('cart');
  cart.innerHTML += `<li>${productName} - ₹${price}</li>`;

  // Update total
  document.getElementById('total').textContent = totalAmount;
}
