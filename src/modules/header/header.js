import { home } from '../home/home';
import { menu } from "../menu/menu";
import { contact } from '../contact/contact';

const header = (() => {
  function createHeader() {
    const element = document.createElement('header');

    function removeAllChildNodes(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }

    function navHome() {
      const main = document.getElementById('main');
      removeAllChildNodes(main);
      main.append(home.createHome());
    }

    function navMenu() {
      const main = document.getElementById('main');
      removeAllChildNodes(main);
      main.append(menu.createMenu());
    }

    function navContact() {
      const main = document.getElementById('main');
      removeAllChildNodes(main);
      main.append(contact.createContact());
    }
    
    // create Logo
    const h2Ele = document.createElement('h2');
    h2Ele.textContent = 'ZK';
    element.appendChild(h2Ele);

    // create Nav menu
    const ulEle = document.createElement('ul');
    ulEle.classList.add('nav-list');
    const liEleHome = document.createElement('li');
    const liEleMenu = document.createElement('li');
    const liEleContact = document.createElement('li');
    liEleHome.textContent = 'Home';
    liEleMenu.textContent = 'Menu';
    liEleContact.textContent = 'Contact';
    liEleHome.addEventListener('click', navHome);
    liEleMenu.addEventListener('click', navMenu);
    liEleContact.addEventListener('click', navContact);
    ulEle.append(liEleHome);
    ulEle.append(liEleMenu);
    ulEle.append(liEleContact);


    element.appendChild(ulEle);
    
    return element;
  }

  return {createHeader}
})();

export { header };