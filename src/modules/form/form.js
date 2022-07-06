const form = (() => {
  function createForm() {
    const element = document.createElement('form');
    // Name Input
    const labelName = document.createElement('label');
    labelName.textContent = 'Name*:'
    labelName.setAttribute('for', 'name');
    element.append(labelName);
    const inputName = document.createElement('input');
    inputName.setAttribute('name', 'name');
    element.append(inputName);
    // Email Input
    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'Email*:';
    labelEmail.setAttribute('for', 'email');
    element.append(labelEmail);
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('name', 'email');
    element.append(inputEmail);
    // Textbox Input
    const labelMsg = document.createElement('label');
    labelMsg.setAttribute('for', 'message')
    labelMsg.textContent = 'Message*:';
    element.append(labelMsg);
    const inputMsg = document.createElement('textarea');
    inputMsg.setAttribute('name', 'message');
    element.append(inputMsg);

    // Submit Button
    const btn = document.createElement('button');
    btn.setAttribute('type', 'submit');
    btn.textContent = 'Submit';
    element.append(btn);

    return element;
  }

  return { createForm }

})();

export { form };