const search = document.querySelector('.search');
const when = document.querySelector('.when');
const duration = document.querySelector('.duration');
const typeOfTour = document.querySelector('#type-of-tour');
const form = document.querySelector('form');
const formError = document.querySelector('.error');
const agree = document.querySelector('.checkbox-form');
const buttonForm = document.querySelector('form button');



form.addEventListener("submit", function(e) {
    if (search.validity.valueMissing || when.validity.valueMissing || duration.validity.valueMissing || typeOfTour.validity.valueMissing) {
        showError();
        // Затем предотвращаем стандартное событие отправки формы
        e.preventDefault();
    }
});


function showError() {
    formError.innerHTML = 'Заполните все поля!';
}



agree.addEventListener('click', function() {
    if (agree.checked) {
        buttonForm.disabled = false;
        notShowErrorAgree();
    } else {
        buttonForm.disabled = true;
        showErrorAgree();
    }
})

function showErrorAgree() {
    formError.innerHTML = 'Проставьте согласие!';
}

function notShowErrorAgree() {
    formError.innerHTML = '';
}