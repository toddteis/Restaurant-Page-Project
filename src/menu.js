const menu = (() => {

  function createMenu() {
    const element = document.createElement('div');
    const h1Ele = document.createElement('h1');
    h1Ele.innerHTML = "<span>M</span>" + "enu";
    element.append(h1Ele);
    const cardsEle = document.createElement('div');
    cardsEle.classList.add('cards');
    element.append(cardsEle);
    const card1Ele = document.createElement('div');
    card1Ele.classList.add('card');
    cardsEle.append(card1Ele);
    return element
  }

 return { createMenu };
})();

export { menu };