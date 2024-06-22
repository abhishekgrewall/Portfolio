document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
    document.getElementById('contact-form').reset(); 
});
