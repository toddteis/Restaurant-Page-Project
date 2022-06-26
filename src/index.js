import { header } from './header';
import { footer } from './footer';
import './style.css';

function component() {
  const element = document.createElement('div');
  element.classList.add('content')
  element.id = 'content';

  // Add Header
  element.appendChild(header.createHeader());

  // Add Footer
  element.appendChild(footer.createFooter());

  return element;
}

document.body.appendChild(component());