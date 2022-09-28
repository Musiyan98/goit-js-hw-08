import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('input[name="email"]');
const inputMessageEl = document.querySelector('textarea[name="message"]');

let inputEmailCurrentValue = localStorage.getItem('email-current-value');
let inputMessageCurrentValue = localStorage.getItem('message-current-value');

inputEmailEl.addEventListener('input', throttle(onStorageEmailInputValue, 500));
inputMessageEl.addEventListener(
  'input',
  throttle(onStorageMessageInputValue, 500)
);
formEl.addEventListener('submit', onProcessingForm);

getStarterInputValue(inputEmailCurrentValue, inputMessageCurrentValue);

function getStarterInputValue(
  inputEmailCurrentValue,
  inputMessageCurrentValue
) {
  if (inputEmailCurrentValue) {
    inputEmailEl.value = inputEmailCurrentValue;
  }
  if (inputMessageCurrentValue) {
    inputMessageEl.value = inputMessageCurrentValue;
  }
}

function onProcessingForm(e) {
  e.preventDefault();
  if (inputEmailEl.value == 0 || inputMessageEl.value == 0) {
    return alert(
      'Упс! здаєтсья заповнені не всі поля :-( переконайтеся що все заповнили, перед тим як продовжити'
    );
  }

  saveRegisterData(e);
  e.currentTarget.reset();
  localStorage.setItem('email-current-value', ``);
  localStorage.setItem('message-current-value', ``);
}

function saveRegisterData(form) {
  const formElemets = form.currentTarget.elements;
  const email = formElemets.email;
  const message = formElemets.message;
  const formData = {
    email: `${email.value}`,
    message: `${message.value}`,
  };
  console.log(formData);
}

function onStorageEmailInputValue(e) {
  inputEmailCurrentValue = inputEmailEl.value;
  console.log(inputEmailCurrentValue);
  localStorage.setItem('email-current-value', `${inputEmailCurrentValue}`);
}

function onStorageMessageInputValue(e) {
  inputMessageCurrentValue = inputMessageEl.value;
  console.log(inputMessageCurrentValue);
  localStorage.setItem('message-current-value', `${inputMessageCurrentValue}`);
}
