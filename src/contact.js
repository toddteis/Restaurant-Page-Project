const contact = (() => {

  function createContact() {
    const element = document.createElement('div');
    element.textContent = 'from inside contact';
    return element
  }

 return { createContact };
})();

export { contact };