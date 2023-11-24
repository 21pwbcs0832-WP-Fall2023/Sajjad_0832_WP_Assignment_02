
// Fetching and rendering books
fetch('books.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
  })
  .then(books => {
    let html = '';
    books.forEach(book => {
      let htmlSegment = `
        <div class="book">
          <img src="${book.cover_image}" alt="${book.title}">
          <h2 class="pt">${book.title}</h2>
          <h2>${book.author}</h2>
          <h2>${book.price}</h2>
          <div class="action-buttons">
            <button class="add-to-cart" onclick="addToCart(${JSON.stringify(book)})">Add to Cart</button>
            <button class="view-cart" onclick="viewCart()">View Cart</button>
          </div>
        </div>
      `;
      html += htmlSegment;
    });

    let container1 = document.querySelector('.container1');
    container1.innerHTML = html;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  // Assuming you have a function to handle adding a book to the cart
function addToCart(book) {
  // Add your logic here, for example, updating a cart object or making an API request
  console.log('Added to Cart:', book.title);
}

// Assuming you have a function to handle viewing the cart
function viewCart() {
  // Add your logic here, for example, showing a modal with cart contents
  console.log('View Cart clicked');
}

  