const contact = (() => {

  function createContact() {
    const element = document.createElement('div');
    element.classList.add('menu-shade-container');
    const firstDivEle = document.createElement('div');
    const secDivEle = document.createElement('div');
    firstDivEle.classList.add('shade');
    secDivEle.classList.add('contact-text-container');
    // secDivEle.id = 'contact-text';
    element.appendChild(firstDivEle);
    element.appendChild(secDivEle);
    // heading
    const h1Ele = document.createElement('h1');
    h1Ele.innerHTML = "<span>C</span>" + "ontact";
    secDivEle.append(h1Ele);
    // contact details
    const detailsEle = document.createElement('div');
    detailsEle.classList.add('contact-details');
    secDivEle.append(detailsEle);
    // Address, socials & message
    const textEle = document.createElement('div');
    textEle.classList.add('contact-text');
    // address
    const addressEle = document.createElement('div');
    addressEle.classList.add('contact-address');
    const addressHeadEle = document.createElement('h4');
    addressHeadEle.textContent = "Address";
    addressEle.append(addressHeadEle);
    const addressParaEle = document.createElement('p');
    addressParaEle.textContent = '1111 Ocean Street Maroochydore Qld';
    addressEle.append(addressParaEle);
    textEle.append(addressEle);
    // socials
    const socialsEle = document.createElement('div');
    socialsEle.classList.add('contact-socials');
    const socialsHeadEle = document.createElement('h4');
    socialsHeadEle.textContent = 'Socials';
    socialsEle.append(socialsHeadEle);
    textEle.append(socialsEle);
    // message
    const messageEle = document.createElement('div');
    messageEle.classList.add('contact-message');
    const messageHeadEle = document.createElement('h4');
    messageHeadEle.textContent = 'Message';
    messageEle.append(messageHeadEle);
    textEle.append(messageEle);
    detailsEle.append(textEle);
    // map
    const mapEle = document.createElement('div');
    mapEle.classList.add('contact-map');
    const mapHeadEle = document.createElement('h4');
    mapHeadEle.textContent = 'Map';
    mapEle.append(mapHeadEle);
    const mapDisplayEle = document.createElement('div');
    mapDisplayEle.id = 'map-display';
    mapEle.append(mapDisplayEle);
    detailsEle.append(mapEle);


    return element
  }

 return { createContact };
})();

export { contact };