const form = document.getElementById('form');
form.addEventListener('submit', confirmPassword);

function confirmPassword(e) {
    e.preventDefault();
    const password = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const message = document.getElementById('error-message')

    if (password.value.length > 0) {
        if(password.value !== confirmPasswordInput.value) {
           message.textContent = "Password does not match.";
        } else {
            message.textContent = "Registered Successfully";
        }
    } else {
        message.textContent = 'Please input a password.';
    }
}

function resetForm(){
    document.getElementById("form").reset();
}