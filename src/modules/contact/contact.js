import Facebook from './assets/logo-facebook.svg';
import Twitter from './assets/logo-twitter.svg';
import Instagram from './assets/logo-instagram.svg';
import { form } from '../form/form';
import { Loader } from "@googlemaps/js-api-loader";

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
    // Heading
    const h1Ele = document.createElement('h1');
    h1Ele.innerHTML = "<span>C</span>" + "ontact";
    secDivEle.append(h1Ele);
    // Contact Details
    const detailsEle = document.createElement('div');
    detailsEle.classList.add('contact-details');
    secDivEle.append(detailsEle);
    // Address, socials & message
    const textEle = document.createElement('div');
    textEle.classList.add('contact-text');
    
    // Details
    const details = document.createElement('div');
    details.classList.add('details');
    textEle.append(details);
    const detailsFirstParaEle = document.createElement('p');
    detailsFirstParaEle.textContent = '11am to 10pm | Mon - Sun';
    details.append(detailsFirstParaEle);
    const detailsSecondParaEle = document.createElement('p');
    detailsSecondParaEle.textContent = 'Ph: 05 5555 5555';
    details.append(detailsSecondParaEle);
    const detailsThirdParaEle = document.createElement('p');
    detailsThirdParaEle.textContent = '5555 Ocean Street Maroochydore Qld';
    details.append(detailsThirdParaEle);
    const detailsFourthParaEle = document.createElement('p');
    details.append(detailsFourthParaEle);
     // Facebook
    const faceBookEle = document.createElement('img');
    faceBookEle.setAttribute('src', Facebook);
    faceBookEle.classList.add('social-icon');
    detailsFourthParaEle.append(faceBookEle);
    // Twitter
    const twitterEle = document.createElement('img');
    twitterEle.setAttribute('src', Twitter);
    twitterEle.classList.add('social-icon')
    detailsFourthParaEle.append(twitterEle);
    // Instagram
    const instagramEle = document.createElement('img');
    instagramEle.setAttribute('src', Instagram);
    instagramEle.classList.add('social-icon');
    detailsFourthParaEle.append(instagramEle);    
    
    // Message
    const messageEle = document.createElement('div');
    messageEle.classList.add('contact-message');
    const messageHeadEle = document.createElement('h4');
    messageHeadEle.textContent = 'Message';
    messageEle.append(messageHeadEle);
    textEle.append(messageEle);
    const formDisplay = document.createElement('div');
    formDisplay.classList.add('form-display');
    formDisplay.id = 'form-display';
    messageEle.append(formDisplay);
    detailsEle.append(textEle);
    formDisplay.append(form.createForm());

    // Map
    const mapEle = document.createElement('div');
    mapEle.classList.add('contact-map');
    const mapHeadEle = document.createElement('h4');
    mapHeadEle.textContent = 'Map';
    mapEle.append(mapHeadEle);
    const mapDisplayEle = document.createElement('div');
    mapDisplayEle.id = 'map';
    mapEle.append(mapDisplayEle);
    // google map code start
    const loader = new Loader({
      apiKey: process.env.API_KEY,
      version: "weekly",
    });
    
    loader.load().then(() => {
      const oceanStreet = { lat: -26.652101311380598, lng: 153.0907618981594};
      const map = new google.maps.Map(document.getElementById("map"), {
        center: oceanStreet,
        zoom: 17,
      });
      const marker = new google.maps.Marker({
        position: oceanStreet,
        map: map,
        title: 'Zeus\'s Kitchen',
        label: 'Zeus\'s Kitchen'
      });
    });
    // google map code end

    mapDisplayEle.append(loader.load());
    detailsEle.append(mapEle);

    return element
  }

 return { createContact };
})();

export { contact };