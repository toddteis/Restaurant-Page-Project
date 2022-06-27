import { header } from './header';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';
import { footer } from './footer';
import './style.css';

function component() {
  const element = document.createElement('div');
  element.classList.add('content')
  element.id = 'content';

  // Add Header
  element.appendChild(header.createHeader());

  // Add Main Content
  const mainContentEle = document.createElement('main');
  mainContentEle.id = 'main';
  mainContentEle.appendChild(home.createHome());
  element.appendChild(mainContentEle);

  // Add Footer
  element.appendChild(footer.createFooter());

  return element;
}

document.body.appendChild(component());