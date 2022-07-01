const contact = (() => {

  function createContact() {
    const element = document.createElement('div');
    element.classList.add('menu-shade-container');
    const firstDivEle = document.createElement('div');
    const secDivEle = document.createElement('div');
    firstDivEle.classList.add('shade');
    secDivEle.classList.add('text');
    secDivEle.id = 'text';
    element.appendChild(firstDivEle);
    element.appendChild(secDivEle);

    const h1Ele = document.createElement('h1');
    h1Ele.innerHTML = "<span>C</span>" + "ontact";
    secDivEle.append(h1Ele);

    const detailsEle = document.createElement('div');
    detailsEle.classList.add('contact-details');
    secDivEle.append(detailsEle);

    const textEle = document.createElement('div');
    textEle.classList.add('contact-text');
    const addressEle = document.createElement('div');
    addressEle.classList.add('contact-address');
    textEle.append(addressEle);
    const socialsEle = document.createElement('div');
    socialsEle.classList.add('contact-socials');
    textEle.append(socialsEle);
    const messageEle = document.createElement('div');
    messageEle.classList.add('contact-message');
    textEle.append(messageEle);
    detailsEle.append(textEle);
    const mapEle = document.createElement('div');
    mapEle.classList.add('contact-map');
    detailsEle.append(mapEle);


    return element
  }

 return { createContact };
})();

export { contact };