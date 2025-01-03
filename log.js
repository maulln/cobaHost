const signupLink = document.getElementById('signup-link');
const signinLink = document.getElementById('signin-link');
const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');

signupLink.addEventListener('click', () => {
    loginContainer.classList.add('hidden');
    signupContainer.classList.remove('hidden');
});

signinLink.addEventListener('click', () => {
    signupContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login functionality to be implemented.');
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Signup functionality to be implemented.');
});