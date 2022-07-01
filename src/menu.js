import ImageGrilledChicken from './grilledchicken.jpg';
import GyrosWrap from './gyroswrap.jpg';
import FoodPlatter from './foodplatter.jpg';
import MeatballPlatter from './meatballplatter.jpg';
import Souvlaki from './souvlaki.jpg';
import FigSalad from './figsalad.jpg';
import EggPlant from './grilledeggplant.jpg';
import GrilledFish from './grilledfish.jpg';

const menu = (() => {

  function createMenu() {
    const element = document.createElement('div');
    element.classList.add('menu-shade-container');
    const firstDivEle = document.createElement('div');
    const secDivEle = document.createElement('div');
    firstDivEle.classList.add('shade');
    secDivEle.classList.add('text');
    secDivEle.id = 'text';
    element.appendChild(firstDivEle);
    element.appendChild(secDivEle);
    
    const menuItems = [
      {
        title: 'Grilled Chicken Skewers',
        filePath: ImageGrilledChicken,
        description: 'Marinated grilled chicken skewers.',
        price: '32.00' 
      },
      {
        title: 'Gyros Wrap',
        filePath: GyrosWrap,
        description: 'Gyros wrapped in a pita bread',
        price: '25.00' 
      },
      {
        title: 'Assorted Food Platter',
        filePath: FoodPlatter,
        description: 'Assorted platter with souvlaki, rice & pita',
        price: '28.00' 
      },
      {
        title: 'Lamb Meatball Platter',
        filePath: MeatballPlatter,
        description: '100% Lamb meatball platter',
        price: '26.00' 
      },
      {
        title: 'Souvlaki',
        filePath: Souvlaki,
        description: 'Souvlaki with fried potatoes, tzatziki dip & pita',
        price: '29.00' 
      },
      {
        title: 'Arugula Fig Salad',
        filePath: FigSalad,
        description: 'Arugula Fig Salad with Walnuts and Feta Cheese',
        price: '24.00' 
      },
      {
        title: 'Grilled Eggplant',
        filePath: EggPlant,
        description: 'Grilled Eggplant stuffed with couscous, tomatoes, cilantro with ...',
        price: '27.00' 
      },
      {
        title: 'Grilled Fish',
        filePath: GrilledFish,
        description: 'Grilled Fish with Squid & Totatoes served with Tzatziki Sauce',
        price: '23.00' 
      }
    ];

    const h1Ele = document.createElement('h1');
    h1Ele.innerHTML = "<span>M</span>" + "enu";
    secDivEle.appendChild(h1Ele);
    const cardsEle = document.createElement('div');
    cardsEle.classList.add('cards');
    secDivEle.appendChild(cardsEle);

    for (let i = 0; i < menuItems.length; i += 1) {
      // Card
      const cardEle = document.createElement('div');
      cardEle.classList.add('card');
      // Title
      const h3Ele = document.createElement('h3');
      h3Ele.textContent = menuItems[i].title;
      cardEle.appendChild(h3Ele);
      // Image
      const imgEle = new Image();
      imgEle.classList.add('card-img');
      imgEle.src = menuItems[i].filePath;
      cardEle.appendChild(imgEle);
      // Footer
      const cardFooterEle = document.createElement('div');
      cardFooterEle.classList.add('card-footer');
      cardEle.appendChild(cardFooterEle);
      // Footer - description
      const descripDiv = document.createElement('div');
      descripDiv.classList.add('card-descrip');
      cardFooterEle.appendChild(descripDiv);
      const descrip = document.createElement('p');
      descrip.textContent = menuItems[i].description;
      descripDiv.appendChild(descrip);
      // Footer - price
      const priceDiv = document.createElement('div');
      priceDiv.classList.add('card-price');
      const price = document.createElement('p');
      price.textContent = menuItems[i].price;
      priceDiv.appendChild(price);
      cardFooterEle.appendChild(priceDiv);

      cardsEle.appendChild(cardEle);
    }

    return element
  }

 return { createMenu };
})();

export { menu };