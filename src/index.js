import { header } from './header';
import './style.css';

function component() {
  const element = document.createElement('div');
  element.classList.add('content')
  element.id = 'content';

  // Added Header
  element.appendChild(header.createHeader());

  return element;
}

document.body.appendChild(component());