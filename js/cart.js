let cart = [];

export function addToCart(product, quantity) {
  const item = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: quantity,
  };
  cart.push(item);
}

export function getCartItems() {
  return cart;
}

export function clearCart() {
  cart = [];
}
