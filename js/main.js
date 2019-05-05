const searchIcon = document.getElementById('search-icon');
const searchField = document.querySelector('.search-field');
const closeIcon = document.querySelector('.close-icon');

function displaySearchField() {
  searchField.style.display = 'block';
}

function closeSearchField() {
  searchField.style.display = 'none';
}

function eventListener() {
  searchIcon.addEventListener('click', displaySearchField);
  closeIcon.addEventListener('click', closeSearchField);
}

eventListener();
