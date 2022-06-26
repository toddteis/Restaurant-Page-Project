const footer = (() => {

 function createFooter() {
  const element = document.createElement('footer');
  element.classList.add('attribution');

  const firstParaEle = document.createElement('p');
  const buildStr = 'The Assignment by ' + '<a href="https://www.theodinproject.com" target="_blank">' + 'The Odin Project' + '</a>' + '.';
  firstParaEle.innerHTML = buildStr;
  element.appendChild(firstParaEle);

  const secParaEle = document.createElement('p');
  const buildStr2 = '&nbsp Part of ' + '<a href="https://www.theodinproject.com/paths/full-stack-javascript?" target="_blank">' + 'the Full Stack Javascript' + '</a>' + ' pathway.';
  secParaEle.innerHTML = buildStr2;
  element.appendChild(secParaEle);

  return element;
 }

 return { createFooter };
})();

export { footer };