function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")// fetches the data from the API
  .then((resp) => resp.json())// convert from JSON -returns a promise from callback function which is the content converted into the foramt we need
  .then((data) => console.log(data));//use the actual dat for DOM manipulation
  // To pass the tests, don't forget to return your fetch! 
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
renderBooks();
document.addEventListener('DOMContentLoaded', function() {
  renderBooks();
});
