const home = (() => {

  function createHome() {
    const element = document.createElement('div');
    element.textContent = 'from inside home';
    return element
  }

 return { createHome };
})();

export { home };