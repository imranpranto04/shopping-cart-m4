import products from "./product.js";
import { addToCart, getCartItems, clearCart } from "./cart.js";

const productList = document.getElementById("productList");
const shoppingCart = document.getElementById("shoppingCart");
const clearCartBtn = document.getElementById("clearCart");

function getProducts() {
  products.map((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("col-md-4");

    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
    <h3>${product.name}</h3>
    <h6>Price: ${product.price}</h6>
    <input type="number" min="1" id="quantity-${product.id}" value="1" class='form-control my-3'>

    <button id='addCart-${product.id}' class='btn btn-success'>Add to cart</button>
    `;
    const addToCartBtn = productDiv.querySelector(`#addCart-${product.id}`);

    addToCartBtn.addEventListener("click", () => {
      const quantityInput = document.getElementById(`quantity-${product.id}`);
      const quantity = parseInt(quantityInput.value);
      addToCart(product, quantity);
      displayCartItems();
    });

    productItem.appendChild(productDiv);
    productList.appendChild(productItem);
  });

  console.log(products);
}

function displayCartItems() {
  shoppingCart.innerHTML = "";
  const cartItems = getCartItems();
  let totalAmount = 0;

  cartItems.map((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart_item");
    const itemPrice = item.price * item.quantity;
    totalAmount += itemPrice;
    itemElement.innerHTML = `
      <h3>Name: ${item.name}</h3>
      <h6>Quantity: ${item.quantity}</h6>
      <h5>Price: $${item.price}</h5>
      <h5>Item Total: $${itemPrice}</h5>
    `;
    shoppingCart.appendChild(itemElement);
  });

  const totalElement = document.createElement("div");
  totalElement.innerHTML = `<h3 class='text-end'>Total: $${totalAmount}</h3>`;
  shoppingCart.appendChild(totalElement);
}

function clearCartItems() {
  clearCart();
  displayCartItems();
}

getProducts();
clearCartBtn.addEventListener("click", clearCartItems);
