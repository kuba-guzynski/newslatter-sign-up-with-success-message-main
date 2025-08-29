const form = document.getElementById('form');
const emailError = document.getElementById('email-error');
const messageContainer = document.getElementById('message-container')
const mainContainer = document.getElementById('main-container');
const dismissButton = document.getElementById('dismiss-button');
const email = document.getElementById('email');


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

form.addEventListener('submit', function (e) {
    e.preventDefault() //zatrzymuje domyślne przeładowanie strony do momentu wykonania funkcji poniej (w naszym przypadku walidacji formularza)

    if (!validateEmail(email.value)) {
        emailError.classList.remove('hidden');
        email.classList.remove('email-input');
        email.classList.add('error-email');
        email.classList.add('error');
    } else {
        if (messageContainer.classList.contains('hidden')) {
            messageContainer.classList.remove('hidden');
            mainContainer.classList.add('hidden');
        }
    }
});

dismissButton.addEventListener('click', function () {
    messageContainer.classList.add('hidden');
    mainContainer.classList.remove('hidden');
})