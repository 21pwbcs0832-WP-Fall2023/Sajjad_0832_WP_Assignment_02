// Function to handle form submission
function submitForm(event) {
    event.preventDefault();
  
    // Add your logic to handle form submission, such as sending an email or storing the data
  
    // For demonstration purposes, log the form data to the console
    const formData = new FormData(event.target);
    console.log('Form submitted with data:', formData);
  
    // Optionally, display a thank you message or redirect to a confirmation page
  }
  
  // Add event listener for form submission
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  