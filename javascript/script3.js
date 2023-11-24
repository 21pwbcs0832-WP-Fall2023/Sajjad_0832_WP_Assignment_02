// Sample cart data (replace with your actual data structure)
const cart = [
    { book: { title: 'Book 1', price: 20.00 }, quantity: 2 },
    { book: { title: 'Book 2', price: 15.00 }, quantity: 1 },
    // Add more items with different details
  ];
  
  // Function to display the receipt table
  function displayReceipt() {
    const receiptTableBody = document.getElementById('receiptTableBody');
    receiptTableBody.innerHTML = '';
  
    cart.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.book.title}</td>
        <td>$${item.book.price.toFixed(2)}</td>
      `;
      receiptTableBody.appendChild(row);
    });
  
    // Display the total amount
    const totalAmount = cart.reduce((total, item) => total + item.book.price * item.quantity, 0);
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
  }
  
  // Initial setup
  displayReceipt();
  