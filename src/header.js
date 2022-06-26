const header = (() => {
  function createHeader() {
    console.log('hello from header.js')
  }

  return {createHeader}
})();

export { header };