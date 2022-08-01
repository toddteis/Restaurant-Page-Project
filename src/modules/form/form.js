import {decode} from 'html-entities';

const form = (() => {
  
  function validForm(e) {
    e.preventDefault();
    // openModal();
  }
  
  function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  }
  
  function createForm() {
    const element = document.createElement('form');
    // Name Input
    const labelName = document.createElement('label');
    labelName.textContent = 'Name*:'
    labelName.setAttribute('for', 'name');
    element.append(labelName);
    const inputName = document.createElement('input');
    inputName.setAttribute('name', 'name');
    inputName.setAttribute('required', 'required');
    element.append(inputName);
    const spanName = document.createElement('span');
    spanName.id = 'nameError';
    element.append(spanName);
    // Event listener for input
    inputName.addEventListener('input', function (event) {
      console.log('Name')
    })
    // Email Input
    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'Email*:';
    labelEmail.setAttribute('for', 'email');
    element.append(labelEmail);
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('name', 'email');
    inputEmail.setAttribute('required', 'required');
    inputEmail.setAttribute('type', 'email');
    element.append(inputEmail);
    const spanEmail = document.createElement('span');
    spanEmail.id = 'emailError';
    element.append(spanEmail);
    // Event listener for input
    inputEmail.addEventListener('input', function (event) {
      console.log('input')
    })

    // Textbox Input
    const labelMsg = document.createElement('label');
    labelMsg.setAttribute('for', 'message')
    labelMsg.textContent = 'Message*:';
    element.append(labelMsg);
    const inputMsg = document.createElement('textarea');
    inputMsg.setAttribute('name', 'message');
    inputMsg.setAttribute('required', 'required');
    element.append(inputMsg);
    const spanMsg = document.createElement('span');
    spanMsg.id = 'msgError';
    element.append(spanMsg);
    // Event listener for input
    inputMsg.addEventListener('input', function (event) {
      console.log('msg')
    })

    // Confirmation Modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'modal';
    element.append(modal);

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');
    modal.append(modalContainer);

    const modalHeader = document.createElement('header');
    modalHeader.classList.add('modal-header');
    modalContainer.append(modalHeader);
    const modalHeading = document.createElement('h3');
    modalHeading.classList.add('modal-heading');
    modalHeading.textContent = 'Thank you';
    modalHeader.append(modalHeading);
    const modalSpan = document.createElement('span');
    modalSpan.textContent = decode('&#215;', {level: 'html4'});
    modalSpan.setAttribute('onclick', 'document.getElementById("modal").style.display="none"');
    modalHeader.append(modalSpan);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const modalText = document.createElement('div');
    modalText.textContent = 'Your message has been sent successfully. We will response back to you as soon as possible.';
    modalContent.append(modalText);
    modalContainer.append(modalContent);

    // Submit Button
    const btn = document.createElement('button');
    btn.setAttribute('type', 'submit');
    btn.textContent = 'Submit';
    btn.addEventListener('click', validForm);
    element.append(btn);

    

    return element;
  }

  return { createForm }

})();

export { form };