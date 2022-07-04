import Facebook from './assets/logo-facebook.svg';
import Twitter from './assets/logo-twitter.svg';
import Instagram from './assets/logo-instagram.svg';

const contact = (() => {

  function createContact() {
    const element = document.createElement('div');
    element.classList.add('menu-shade-container');
    const firstDivEle = document.createElement('div');
    const secDivEle = document.createElement('div');
    firstDivEle.classList.add('shade');
    secDivEle.classList.add('contact-text-container');
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
    // Open hours
    const openHoursEle = document.createElement('div');
    const openHoursHeadEle = document.createElement('h4');
    openHoursHeadEle.textContent = 'Open Hours';
    openHoursEle.append(openHoursHeadEle);
    const openHoursParaEle = document.createElement('p');
    openHoursParaEle.textContent = '11:00am till late.';
    openHoursEle.append(openHoursParaEle);
    textEle.append(openHoursEle);
    // Phone
    const phoneEle = document.createElement('div');
    phoneEle.classList.add('phone-address');
    const phoneHeadEle = document.createElement('h4');
    phoneHeadEle.textContent = 'Phone';
    phoneEle.append(phoneHeadEle);
    const phoneParaEle = document.createElement('p');
    phoneParaEle.textContent = '05 5555 5555';
    phoneEle.append(phoneParaEle);
    textEle.append(phoneEle);

    // address
    const addressEle = document.createElement('div');
    addressEle.classList.add('contact-address');
    const addressHeadEle = document.createElement('h4');
    addressHeadEle.textContent = "Address";
    addressEle.append(addressHeadEle);
    const addressParaEle = document.createElement('p');
    addressParaEle.textContent = '5555 Ocean Street Maroochydore Qld';
    addressEle.append(addressParaEle);
    textEle.append(addressEle);
    // Socials
    const socialsEle = document.createElement('div');
    socialsEle.classList.add('contact-socials');
    const socialsHeadEle = document.createElement('h4');
    socialsHeadEle.textContent = 'Socials';
    socialsEle.classList.add('socials');
    socialsEle.append(socialsHeadEle);
    const socialsParaEle = document.createElement('p');
    // Facebook
    const faceBookEle = document.createElement('img');
    faceBookEle.setAttribute('src', Facebook);
    faceBookEle.classList.add('social-icon');
    socialsParaEle.append(faceBookEle);
    // Twitter
    const twitterEle = document.createElement('img');
    twitterEle.setAttribute('src', Twitter);
    twitterEle.classList.add('social-icon')
    socialsParaEle.append(twitterEle);
    // Instagram
    const instagramEle = document.createElement('img');
    instagramEle.setAttribute('src', Instagram);
    instagramEle.classList.add('social-icon');
    socialsParaEle.append(instagramEle);
    socialsEle.append(socialsParaEle);
    textEle.append(socialsEle);
    // Message
    const messageEle = document.createElement('div');
    messageEle.classList.add('contact-message');
    const messageHeadEle = document.createElement('h4');
    messageHeadEle.textContent = 'Message';
    messageEle.append(messageHeadEle);
    textEle.append(messageEle);
    detailsEle.append(textEle);
    // Map
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