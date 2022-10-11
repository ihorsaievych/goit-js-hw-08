import throttle from 'lodash.throttle';
import onLocalStorage from './local';

const localStorageKey = 'feedback-form-state';
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');
const formRef = document.querySelector('.feedback-form');
const timeDelay = 500;
const initialFormData = {
  email: '',
  message: '',
};
let currentFormData = initialFormData;

fillForm();

formRef.addEventListener('input', throttle(onFormInput, timeDelay));
formRef.addEventListener('submit', onFeedbackFormSubmit);

function onFormInput(event) {
  currentFormData = {
    ...currentFormData,
    [event.target.name]: event.target.value,
  };
  onLocalStorage.save(localStorageKey, currentFormData);
}

function onFeedbackFormSubmit(event) {
    event.preventDefault();

  formRef.reset();
  console.log(currentFormData);
  currentFormData = initialFormData;
  onLocalStorage.save(localStorageKey, currentFormData);
}

function loadFeedbackFormState() {
  currentFormData =
    onLocalStorage.load(localStorageKey) || initialFormData;
  return currentFormData;
}

function fillForm() {
  const { email, message } = loadFeedbackFormState();
  inputRef.value = email;
  textareaRef.value = message;
}