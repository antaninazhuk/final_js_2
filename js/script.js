const search = document.querySelector('.search');
const form = document.querySelector('form');
const formError = document.querySelector('.error');
const agree = document.querySelector('.checkbox-form');
const buttonForm = document.querySelector('form button');
// buttonForm.classList.add('activeButtonForm');


form.addEventListener("submit", function(e) {
    if (search.validity.valueMissing) {
        showError();
        // Затем предотвращаем стандартное событие отправки формы
        e.preventDefault();
    }
});


function showError() {
    formError.innerHTML = 'Заполните поле "Куда"!';
}

function showErrorAgree() {
    formError.innerHTML = 'Проставьте согласие!';
}

agree.addEventListener('click', function() {
    if (agree.checked) {
        buttonForm.disabled = false;
    } else {
        buttonForm.disabled = true;
        showErrorAgree();
    }
})