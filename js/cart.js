

const elements = [];

elements.forEach.call(document.querySelectorAll('a'), function (el) {
  el.addEventListener('click', function () {
    // code…
  })
})