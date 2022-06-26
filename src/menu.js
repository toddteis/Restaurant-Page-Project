const menu = (() => {

  function createMenu() {
    const element = document.createElement('div');
    element.textContent = 'from inside menu';
    return element
  }

 return { createMenu };
})();

export { menu };