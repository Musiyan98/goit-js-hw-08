import throttle from 'lodash.throttle';

let storageInputValue = {};
const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onStorageInputValueChange, 500));
formEl.addEventListener('submit', onProcessingForm);

getStarterInputValue(storageInputValue);

function getStarterInputValue(storageInputValue) {
  storageInputValue = localStorage.getItem('storageInputValue');
  if (storageInputValue) {
    storageInputValue = JSON.parse(storageInputValue);
    Object.entries(storageInputValue).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}

function onProcessingForm(e) {
  e.preventDefault();
  if (formEl.elements.email.value == 0 || formEl.elements.message.value == 0) {
    return alert(
      'Упс! здаєтсья заповнені не всі поля :-( переконайтеся що все заповнили, перед тим як продовжити'
    );
  }

  saveRegisterData(e);
  e.currentTarget.reset();
  localStorage.removeItem('storageInputValue');
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

function onStorageInputValueChange(e) {
  storageInputValue[e.target.name] = e.target.value;
  localStorage.setItem('storageInputValue', JSON.stringify(storageInputValue));
}
