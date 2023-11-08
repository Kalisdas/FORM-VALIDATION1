const form = document.getElementById('form');
const userName = document.getElementById('Username');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const reenter = document.getElementById('Re-Enter');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const hasErrors = validateInputs();
    if (!hasErrors) {
        form.reset();
    }
});

function validateInputs() {
    const userNameval = userName.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const reenterval = reenter.value.trim();
    let hasErrors = false;

    if (userNameval === '') {
        setError(userName, 'Username is required');
        hasErrors = true;
    } else {
        setSuccess(userName);
    }

    if (emailval === '') {
        setError(email, 'Email is required');
        hasErrors = true;
    } else if (!validateEmail(emailval)) {
        setError(email, 'Invalid email');
        hasErrors = true;
    } else {
        setSuccess(email);
    }

    if (passwordval === '') {
        setError(password, 'Please enter a password');
        hasErrors = true;
    } else if (passwordval.length < 8) {
        setError(password, 'Password should be at least 8 characters');
        hasErrors = true;
    } else {
        setSuccess(password);
    }

    if (reenterval === '') {
        setError(reenter, 'Please re-enter your password');
        hasErrors = true;
    } else if (reenterval !== passwordval) {
        setError(reenter, 'Passwords must match');
        hasErrors = true;
    } else {
        setSuccess(reenter);
    }

    return hasErrors;
}

function setError(element, message) {
    const formInput = element.parentElement;
    const errorElement = formInput.querySelector('.error');

    errorElement.innerText = message;
    formInput.classList.add('error');
    formInput.classList.remove('success');
    element.style.borderColor = 'red';
}

function setSuccess(element) {
    const formInput = element.parentElement;
    const errorElement = formInput.querySelector('.error');

    errorElement.innerText = '';
    formInput.classList.add('success');
    formInput.classList.remove('error');
    element.style.borderColor = '';
}

const validateEmail = (email) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.toLowerCase());
}

