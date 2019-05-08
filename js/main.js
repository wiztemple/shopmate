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

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});