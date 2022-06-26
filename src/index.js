import { header } from './header';

function component() {
  const element = document.createElement('div');
  element.classList.add('content')
  element.id = 'content';

  // Added Header
  const headerEle = document.createElement('header');
  headerEle.textContent = header.createHeader();
  element.appendChild(headerEle);

  return element;
}

document.body.appendChild(component());