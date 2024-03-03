document.getElementById('funFactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
 
 
    // Get form values
    var name = document.getElementById('name').value;
    var funFact = document.getElementById('funFact').value;
    var consent = document.getElementById('publishConsent').checked;
 
 
    // Simple validation & action
    if (!name || !funFact) {
        alert('Please fill in all the fields.');
        return;
    }
 
 
    if (!consent) {
        alert('You must allow us to publish your fun fact to proceed.');
        return;
    }
 
 
    // Here you would typically send the data to a server
    console.log('Name:', name);
    console.log('Fun Fact:', funFact);
    console.log('Consent:', consent ? 'Yes' : 'No');
 
 
    alert('Thank you for submitting your fun fact!');
    window.location.replace("funfacts.html");
 });
 
 
 //function getFront() {
   // window.location.href = 'funfacts.html';
 //}
 