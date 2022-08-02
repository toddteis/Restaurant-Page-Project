import {decode} from 'html-entities';

const form = (() => {

  
  function createForm() {
    const element = document.createElement('form');
    element.setAttribute('novalidate', 'novalidate');

    function validForm(e) {
      e.preventDefault();
      if ( inputName.validity.valid
        && inputEmail.validity.valid
        && inputMsg.validity.valid) {
          inputName.value = '';
          inputEmail.value = '';
          inputMsg.value = '';
          openModal();
        }
    }
    
    function openModal() {
      const modal = document.getElementById('modal');
      modal.style.display = 'block';
    }

    function showNameError()  {
      if(inputName.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        spanName.textContent = 'You need to enter your name.';
      } else if(inputName.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        spanName.textContent = `Your Name should be at least ${ inputName.minLength } characters; you entered ${ inputName.value.length }.`
      }
    
      // Set the styling appropriately
      spanName.className = 'error active';
    }

    function showEmailError() {
      if(inputEmail.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        spanEmail.textContent = 'You need to enter an e-mail address.';
      } else if(inputEmail.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        spanEmail.textContent = 'Entered value needs to be an e-mail address.';
      } else if(inputEmail.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        spanEmail.textContent = `Email should be at least ${ inputEmail.minLength } characters; you entered ${ inputEmail.value.length }.`;
      }
    
      // Set the styling appropriately
      spanEmail.className = 'error active';
    }

    function showMsgError() {
      if(inputMsg.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        spanMsg.textContent = 'You need to enter an e-mail address.';
      } else if(inputMsg.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        spanMsg.textContent = `Email should be at least ${ inputMsg.minLength } characters; you entered ${ inputMsg.value.length }.`;
      }
    
      // Set the styling appropriately
      spanMsg.className = 'error active';
    }
    

    // Name Input
    const labelName = document.createElement('label');
    labelName.textContent = 'Name*:'
    labelName.setAttribute('for', 'name');
    element.append(labelName);
    const inputName = document.createElement('input');
    inputName.setAttribute('name', 'name');
    inputName.setAttribute('minlength', '3');
    inputName.setAttribute('required', 'required');
    element.append(inputName);
    const spanName = document.createElement('span');
    spanName.id = 'nameError';
    element.append(spanName);
    // Event listener for input
    inputName.addEventListener('input', function (event) {
      if (inputName.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        spanName.textContent = ''; // Reset the content of the message
        spanName.className = 'error'; // Reset the visual state of the message
      } else {
        showNameError();
      }
    })

    // Email Input
    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'Email*:';
    labelEmail.setAttribute('for', 'email');
    element.append(labelEmail);
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('name', 'email');
    inputEmail.setAttribute('minlength', '6');
    inputEmail.setAttribute('required', 'required');
    inputEmail.setAttribute('type', 'email');
    element.append(inputEmail);
    const spanEmail = document.createElement('span');
    spanEmail.id = 'emailError';
    element.append(spanEmail);
    // Event listener for input
    inputEmail.addEventListener('input', function (event) {
      if (inputEmail.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        spanEmail.textContent = ''; // Reset the content of the message
        spanEmail.className = 'error'; // Reset the visual state of the message
      } else {
        showEmailError();
      }
    })

    // Textbox Input
    const labelMsg = document.createElement('label');
    labelMsg.setAttribute('for', 'message')
    labelMsg.textContent = 'Message*:';
    element.append(labelMsg);
    const inputMsg = document.createElement('textarea');
    inputMsg.setAttribute('name', 'message');
    inputMsg.setAttribute('minlength', '20');
    inputMsg.setAttribute('required', 'required');
    element.append(inputMsg);
    const spanMsg = document.createElement('span');
    spanMsg.id = 'msgError';
    element.append(spanMsg);
    // Event listener for input
    inputMsg.addEventListener('input', function (event) {
      if (inputMsg.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        spanMsg.textContent = ''; // Reset the content of the message
        spanMsg.className = 'error'; // Reset the visual state of the message
      } else {
        showMsgError();
      }
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