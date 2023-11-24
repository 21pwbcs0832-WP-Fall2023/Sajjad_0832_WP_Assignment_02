const categoryListElement = document.querySelector('.category-list');
const bookListElement = document.querySelector('.book-list');

// Sample book data (replace with your actual data or fetch from 'books.json')
const books = [
  { title: 'Book 1', category: 'Fiction', cover_image: 'assets/image/image9.jpg' },
  { title: 'Book 2', category: 'Fiction', cover_image: 'assets/fiction/image2.jpeg' },
  { title: 'Book 3', category: 'Fiction', cover_image: 'assets/fiction/image3.jpeg' },
  { title: 'Book 4', category: 'Fiction', cover_image: 'assets/fiction/image4.jpeg' },
  { title: 'Book 1', category: 'Dystopian', cover_image: 'assets/image/image10.jpg' },
  { title: 'Book 2', category: 'Dystopian', cover_image: 'assets/Dystopian/image1.jpeg' },
  { title: 'Book 3', category: 'Dystopian', cover_image: 'assets/Dystopian/image2.jpeg' },
  { title: 'Book 4', category: 'Dystopian', cover_image: 'assets/Dystopian/image3.jpeg' },
  { title: 'Book 1', category: 'classic', cover_image: 'assets/image/image11.jpg' },
  { title: 'Book 2', category: 'classic', cover_image: 'assets/classic/image1.jpeg' },
  { title: 'Book 1', category: 'Fantasy', cover_image: 'assets/image/image12.jpg' },
  { title: 'Book 2', category: 'Fantasy', cover_image: 'assets/Fantasy/image1.jpeg' },
  { title: 'Book 3', category: 'Fantasy', cover_image: 'assets/Fantasy/image2.jpeg' },
  { title: 'Book 4', category: 'Fantasy', cover_image: 'assets/Fantasy/image3.jpeg' },
  { title: 'Book 1', category: 'Mystery', cover_image: 'assets/image/image13.jpg' },
  { title: 'Book 2', category: 'Mystery', cover_image: 'assets/Mystery/image1.jpeg' },
  { title: 'Book 3', category: 'Mystery', cover_image: 'assets/Mystery/image2.jpeg' },
  { title: 'Book 4', category: 'Mystery', cover_image: 'assets/Mystery/image3.jpeg' },
  { title: 'Book 1', category: 'Gothic', cover_image: 'assets/image/image14.jpg' },
  { title: 'Book 2', category: 'Gothic', cover_image: 'assets/Gothic/image1.jpeg' },
  { title: 'Book 3', category: 'Gothic', cover_image: 'assets/Gothic/image3.jpeg' },
  { title: 'Book 4', category: 'Gothic', cover_image: 'assets/Gothic/image4.jpeg' },
  { title: 'Book 1', category: 'Horror', cover_image: 'assets/image/image16.jpg' },
  { title: 'Book 2', category: 'Horror', cover_image: 'assets/Horror/image1.jpeg' },
  { title: 'Book 3', category: 'Horror', cover_image: 'assets/Horror/image2.jpeg' },
  { title: 'Book 4', category: 'Horror', cover_image: 'assets/Horror/image3.jpeg' },
  { title: 'Book 5', category: 'Horror', cover_image: 'assets/Horror/image3.jpeg' },
  // Add more books with different categories
];

// Display available categories
function displayCategories() {
  const categories = [...new Set(books.map(book => book.category))];
  categoryListElement.innerHTML = categories.map(category => `<div class="category" onclick="filterBooks('${category}')">${category}</div>`).join('');
}

// Display books based on the selected category
function filterBooks(category) {
  const filteredBooks = books.filter(book => book.category === category);
  displayBooks(filteredBooks);
}

// Display all books
function displayAllBooks() {
  displayBooks(books);
}

// Display book details dynamically
function displayBooks(bookArray) {
  bookListElement.innerHTML = bookArray.map(book => `
    <div class="book">
      <img src="${book.cover_image}" alt="${book.title}">
      <h2>${book.title}</h2>
      <p>${book.category}</p>
      <button onclick="addToCart('${book.title}')">Add to Cart</button>
    </div>
  `).join('');
}

// Sample function to add a book to the cart (replace with your actual logic)
function addToCart(bookTitle) {
  console.log(`Added to Cart: ${bookTitle}`);
}

// Navigation functions
function displayHomePage() {
  // Add logic to navigate to the home page
  console.log('Navigating to Home Page');
}

function displayCart() {
  // Add logic to navigate to the cart page
  console.log('Navigating to Cart');
}

function displayContact() {
  // Add logic to navigate to the contact page
  console.log('Navigating to Contact Us');
}

// Initial setup
displayCategories();
displayAllBooks();
