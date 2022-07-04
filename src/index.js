import { header } from './modules/header/header';
import { home } from './modules/home/home';
// import { menu } from './modules/menu/menu';
// import { contact } from './modules/contact/contact';
import { footer } from './modules/footer/footer';
import '.assets/styles/style.css';

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