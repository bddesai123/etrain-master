document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Your EmailJS user ID
      const userID = 'dbhadresh870@gmail.com';
  
      // Send the email
      emailjs.sendForm('service_your_service_id', 'template_your_template_id', this, userID)
        .then(function (response) {
          console.log('Email sent:', response);
          alert('Email sent successfully!');
          form.reset(); // Optional: Reset the form after sending
        }, function (error) {
          console.error('Email sending failed:', error);
          alert('Email sending failed. Please try again later.');
        });
    });
  });
  