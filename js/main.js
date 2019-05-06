const searchIcon = document.getElementById('search-icon');
const searchField = document.querySelector('.search-field');
const closeIcon = document.querySelector('.close-icon');
const bagIcon = document.querySelector('.clickBag');
const cart = document.querySelector('.cart');
const closeCart = document.querySelector('.closeCart');

function displaySearchField() {
  searchField.style.display = 'block';
}

function closeSearchField() {
  searchField.style.display = 'none';
}

function displayCart() {
  cart.style.display = 'block';
}

// function closeCart() {
//   cart.style.display = 'none';
// }

function eventListener() {
  searchIcon.addEventListener('click', displaySearchField);
  closeIcon.addEventListener('click', closeSearchField);
  bagIcon.addEventListener('click', displayCart);
  // closeCart.addEventListener('click', closeCart);
}

eventListener();

