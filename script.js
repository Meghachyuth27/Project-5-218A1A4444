document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    const place = document.getElementById('place').value;
    const job = document.getElementById('job').value;
    const address = document.getElementById('address').value;
    const salary = document.getElementById('salary').value;
    const family = document.getElementById('family').value;

    // Basic validation (can be expanded as needed)
    if (username === '' || email === '' || password === '' || name === '' || age === '' || dob === '' || place === '' || job === '' || address === '' || salary === '' || family === '') {
        alert('All fields are required');
        return;
    }

    // Here you can add code to submit the form data to a server
    // For this example, we'll just display a success message
    document.getElementById('message').innerText = 'Registration successful!';

    // Optionally, clear the form
    document.getElementById('registrationForm').reset();
});
