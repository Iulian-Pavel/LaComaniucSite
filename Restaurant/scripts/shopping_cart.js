const addToCartButtons = document.querySelectorAll(".add");
const removeFromCartButtons = document.querySelectorAll(".remove");
const priceTags = document.querySelectorAll(".pret");
const shoppingCartProducts = document.querySelector(".shopping_cart__products");
const shoppingCartContainer = document.querySelector(".shopping_cart");
const openShoppingCart = document.querySelector('.cart');
const closeShoppingCart = document.querySelector(".shopping_cart__close");
const qty = document.querySelector('.qty');
const body = document.querySelector('body');
parseInt(qty);
console.log(qty);

openShoppingCart.addEventListener('click', () => {
  shoppingCartContainer.style.display = 'flex';
  body.classList.add('disable-scroll');
});

closeShoppingCart.addEventListener('click', () => {
  shoppingCartContainer.style.display = 'none';
  body.classList.remove('disable-scroll');
});

const totalPriceElement = document.createElement("div");
totalPriceElement.classList.add("total-price");
shoppingCartContainer.appendChild(totalPriceElement);

let cart = {};
let totalPrice = 0;
let totalQty = 0;

function updateCartUI() {
  shoppingCartProducts.innerHTML = "";

  for (const [product, quantity] of Object.entries(cart)) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const itemName = document.createElement("span");
    itemName.textContent = product;

    const itemQuantity = document.createElement("span");
    itemQuantity.textContent = `Cantitate: ${quantity}`;

    const increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", () => {
      addToCart(product);
    });

    const decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", () => {
      removeFromCart(product);
    });

    const price = document.createElement("span");
    price.textContent = `Pret: ${cart[product] * getPrice(product)}`;

    cartItem.appendChild(itemName);
    cartItem.appendChild(itemQuantity);
    cartItem.appendChild(increaseButton);
    cartItem.appendChild(decreaseButton);
    cartItem.appendChild(price);

    shoppingCartProducts.appendChild(cartItem);
    console.log(cart)
    console.log(Object.entries(cart));
    qty.innerHTML = totalQty;
  }

  totalPriceElement.textContent = `Pret Total: ${totalPrice}`;
}

function addToCart(product) {
  if (cart[product]) {
    cart[product]++;
  } else {
    cart[product] = 1;
  }

  totalPrice += getPrice(product);
  updateCartUI();
}

function removeFromCart(product) {
  if (cart[product]) {
    cart[product]--;
    if (cart[product] === 0) {
      delete cart[product];
    }
    totalPrice -= getPrice(product);
  }

  updateCartUI();
}

function getPrice(product) {
  const productIndex = Array.from(document.querySelectorAll('.title h1')).findIndex(item => item.textContent === product);
  const price = priceTags[productIndex].textContent.match(/^\d+/);
  return parseInt(price);
}

addToCartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const product = this.closest(".produs").querySelector(".title h1").textContent;
    addToCart(product);
    totalQty++;
  });
});

removeFromCartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const product = this.closest(".produs").querySelector(".title h1").textContent;
    removeFromCart(product);
    totalQty--;
  });
});
