const authLinks = document.querySelectorAll('.authLink');
const signinLink = document.querySelector('.signinLink');
const signin = document.querySelector('.signin');
const signup = document.querySelector('.signup');
const searchIcon = document.getElementById('search-icon');
const searchField = document.querySelector('.search-field');
const closeIcons = document.querySelectorAll('.closeIcon');
const cart = document.querySelector('.cart');
const cartIcons = document.querySelectorAll('.cartIcon');

$("button").on("click", function() {
  $(this).closest(".card-overlay").find("img").clone().addClass("zoom").appendTo("body");
  setTimeout(function () {
    $(".zoom").remove()
  }, 1000)
});
/**
 * Display the signup form
 *
 * @param {null}
 *
 * @returns signup modal
 */
const displaySignup = () => signup.style.display = 'block';
 
/**
 * Display the signup form
 *
 * @param {null}
 *
 * @returns signin modal
 */
const displaySignin = () => signin.style.display = 'block';

/**
 * Display the search field on the navbar
 *
 * @param {null}
 *
 * @returns search field
 */
const displaySearchField = () => searchField.style.display = 'block';

/**
 * Display the cart items table
 *
 * @param {null}
 *
 * @returns cart items
 */
const displayCart = () => cart.style.display = 'block';

/**
 * Makes the closeIcon re-usable
 *
 * @param {null}
 *
 * @returns
 */
[...closeIcons].map((closeIcon) => {
  closeIcon.addEventListener('click', () => {
    const div = closeIcon.closest('.target-js');
    div.style.display = 'none';
  });
});

/**
 * makes the function to display a cart items re-usable
 *
 * @param {null}
 *
 * @returns cart items
 */
[...cartIcons].map(cartIcon => {
  cartIcon.addEventListener('click', displayCart);
});

[...authLinks].map(authLink => {
  authLink.addEventListener('click', displaySignup);
})

if (signinLink) {
  signinLink.addEventListener('click', displaySignin);
}

searchIcon.addEventListener('click', displaySearchField);

/**
 * Displays the current image on the details page
 *
 * @param {String} image
 *
 * @returns
 */
const container = document.getElementById('image-container');

const changeImage = image => container.src = image.src;

/**
 * Displays the menu-items on mobile view
 *
 * @param {null}
 *
 * @returns menu items
 */
 document.addEventListener('DOMContentLoaded', () => {

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