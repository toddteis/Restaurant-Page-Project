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
    
    // const menuItems = [];
    const menuItems = [
      {
        title: 'item1',
        filePath: './xxx.png',
        description: 'A brief description about the dish',
        price: '20.00' 
      },
      {
        title: 'item2',
        filePath: './xxx.png',
        description: 'A brief description about the dish',
        price: '20.00' 
      },
      {
        title: 'item3',
        filePath: './xxx.png',
        description: 'A brief description about the dish',
        price: '20.00' 
      },
      {
        title: 'item4',
        filePath: './xxx.png',
        description: 'A brief description about the dish',
        price: '20.00' 
      },
      {
        title: 'item5',
        filePath: './xxx.png',
        description: 'A brief description about the dish',
        price: '20.00' 
      },
      {
        title: 'item6',
        filePath: './xxx.png',
        description: 'A brief description about the dish',
        price: '20.00' 
      },
      {
        title: 'item7',
        filePath: './xxx.png',
        description: 'A brief description about the dish',
        price: '20.00' 
      },
      {
        title: 'item8',
        filePath: './xxx.png',
        description: 'A brief description about the dish',
        price: '20.00' 
      }
    ];

    const h1Ele = document.createElement('h1');
    h1Ele.innerHTML = "<span>M</span>" + "enu";
    secDivEle.append(h1Ele);
    const cardsEle = document.createElement('div');
    cardsEle.classList.add('cards');
    secDivEle.append(cardsEle);

    for (let i = 0; i < menuItems.length; i += 1) {
      // Card
      const cardEle = document.createElement('div');
      cardEle.classList.add('card');
      // Title
      const h3Ele = document.createElement('h3');
      h3Ele.textContent = menuItems[i].title;
      cardEle.append(h3Ele);
      // Image
      const imgEle = document.createElement('img');
      imgEle.setAttribute('src', menuItems[i].filePath);
      imgEle.classList.add('card-img');
      cardEle.append(imgEle);
      // Footer
      const cardFooterEle = document.createElement('div');
      cardFooterEle.classList.add('card-footer');
      cardEle.append(cardFooterEle);
      // Footer - description
      const descripDiv = document.createElement('div');
      descripDiv.classList.add('card-descrip');
      cardFooterEle.append(descripDiv);
      const descrip = document.createElement('p');
      descrip.textContent = menuItems[i].description;
      descripDiv.append(descrip);
      // Footer - price
      const priceDiv = document.createElement('div');
      priceDiv.classList.add('card-price');
      const price = document.createElement('p');
      price.textContent = menuItems[i].price;
      priceDiv.append(price);
      cardFooterEle.append(priceDiv);

      cardsEle.append(cardEle);
    }

    return element
  }

 return { createMenu };
})();

export { menu };