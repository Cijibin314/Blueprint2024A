document.getElementById('feedbackForm').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent the form from submitting via the browser.
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const feedback = document.getElementById('feedback').value;


   // Display a thank you message or handle the feedback data as needed.
  
   alert('Thank you for submitting your feedback!')
   window.location.replace("funfacts.html")




   // Here, you could also make an AJAX request to a server to submit the feedback data
   console.log(`Feedback received from ${name} (${email}): ${feedback}`);


});


