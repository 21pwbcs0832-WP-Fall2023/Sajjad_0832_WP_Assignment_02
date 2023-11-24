// Sample book data (replace with your actual data or fetch from 'books.json')
const books = [
    { id: 1, title: 'Book 1', price: 12.99 },
    { id: 2, title: 'Book 2', price: 9.99 },
    // Add more books with different details
  ];
  
  // Sample cart data (replace with your actual data structure)
  let cart = [];
  
  // Function to add a book to the cart
  function addToCart(bookId) {
    const book = books.find(book => book.id === bookId);
  
    // Check if the book is already in the cart
    const existingCartItem = cart.find(item => item.book.id === bookId);
  
    if (existingCartItem) {
      // Increment quantity if the book is already in the cart
      existingCartItem.quantity++;
    } else {
      // Add a new item to the cart if the book is not in the cart
      cart.push({ book, quantity: 1 });
    }
  
    // Update the display of the cart
    displayCart();
  }
  
  // Function to display the cart
  function displayCart() {
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = '';
  
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <p>${item.book.title}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: $${(item.book.price * item.quantity).toFixed(2)}</p>
        <button class="btn btn-danger" onclick="removeFromCart(${item.book.id})">Remove</button>
      `;
      cartContainer.appendChild(cartItem);
    });
  
    // Display the total amount
    const totalAmount = cart.reduce((total, item) => total + item.book.price * item.quantity, 0);
    cartContainer.innerHTML += `<p>Total Amount: $${totalAmount.toFixed(2)}</p>`;
  }
  
  // Function to remove a book from the cart
  function removeFromCart(bookId) {
    cart = cart.filter(item => item.book.id !== bookId);
    displayCart();
  }
  
  // Function to navigate to the Payment Receipt page
  function proceedToPayment() {
    // Add logic to navigate to the Payment Receipt page
    console.log('Proceeding to Payment');
  }
  
  // Initial setup
  displayCart();
  