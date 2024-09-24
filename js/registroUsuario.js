const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const lengthItem = document.getElementById('length');
const uppercaseItem = document.getElementById('uppercase');
const specialItem = document.getElementById('special');
const matchItem = document.getElementById('match');
const checkIcon = 'bi-check-circle';
const crossIcon = 'bi-x-circle';

function validatePassword() {
    const password = passwordInput.value;

    if (password.length > 8) {
        lengthItem.classList.remove('invalid');
        lengthItem.classList.add('valid');
        lengthItem.querySelector('.icon').classList.remove(crossIcon, 'icon-invalid');
        lengthItem.querySelector('.icon').classList.add(checkIcon, 'icon-valid');

    } else {
        lengthItem.classList.remove('valid');
        lengthItem.classList.add('invalid');
        lengthItem.querySelector('.icon').classList.remove(checkIcon, 'icon-valid');
        lengthItem.querySelector('.icon').classList.add(crossIcon, 'icon-invalid');
    }

    if (/[A-Z]/.test(password)) {
        uppercaseItem.classList.remove('invalid');
        uppercaseItem.classList.add('valid');
        uppercaseItem.querySelector('.icon').classList.remove(crossIcon, 'icon-invalid');
        uppercaseItem.querySelector('.icon').classList.add(checkIcon, 'icon-valid');
    } else {
        uppercaseItem.classList.remove('valid');
        uppercaseItem.classList.add('invalid');
        uppercaseItem.querySelector('.icon').classList.remove(checkIcon, 'icon-valid');
        uppercaseItem.querySelector('.icon').classList.add(crossIcon, 'icon-invalid');
    }

    if (/[\W_]/.test(password)) {
        specialItem.classList.remove('invalid');
        specialItem.classList.add('valid');
        specialItem.querySelector('.icon').classList.remove(crossIcon, 'icon-invalid');
        specialItem.querySelector('.icon').classList.add(checkIcon, 'icon-valid');
    } else {
        specialItem.classList.remove('valid');
        specialItem.classList.add('invalid');
        specialItem.querySelector('.icon').classList.remove(checkIcon, 'icon-valid');
        specialItem.querySelector('.icon').classList.add(crossIcon, 'icon-invalid');
    }

    if (password === confirmPasswordInput.value && password.length > 0) {
        matchItem.classList.remove('invalid');
        matchItem.classList.add('valid');
        matchItem.querySelector('.icon').classList.remove(crossIcon, 'icon-invalid');
        matchItem.querySelector('.icon').classList.add(checkIcon, 'icon-valid');
    } else {
        matchItem.classList.remove('valid');
        matchItem.classList.add('invalid');
        matchItem.querySelector('.icon').classList.remove(checkIcon, 'icon-valid');
        matchItem.querySelector('.icon').classList.add(crossIcon, 'icon-invalid');
    }
}
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validatePassword); F