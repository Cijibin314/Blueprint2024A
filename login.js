document.addEventListener("DOMContentLoaded", function() {
    var loginFormButton = document.getElementById('loginFormButton');
    var signupFormButton = document.getElementById('signupFormButton');
    var loginForm = document.getElementById('loginForm');
    var signupForm = document.getElementById('signupForm');
 
 
    loginFormButton.addEventListener('click', function() {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });
 
 
    signupFormButton.addEventListener('click', function() {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    });
 });
 
 
 function getMain() {
    window.location.href = "funfacts.html"
 }
 
 
 