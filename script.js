
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get form values
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.'); 
    } else {
        alert('Thank you for your message, ' + name + '!'); 
        this.reset(); 
    }
});