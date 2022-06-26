const home = (() => {

  function createHome() {
    const element = document.createElement('div');
    element.classList.add('text-shade-container');
    const firstDivEle = document.createElement('div');
    const secDivEle = document.createElement('div');
    firstDivEle.classList.add('shade');
    secDivEle.classList.add('text');

    const h1Ele = document.createElement('h1');
    const sectionEle = document.createElement('section');
    h1Ele.innerHTML = "<span>Z</span>" + "eus\'s" + " " + "<span>K</span>" + "itchen";
    secDivEle.append(h1Ele);
    
    sectionEle.textContent = 'An authentic Greek restaurant offering an eating experience like no other.';
    sectionEle.classList.add('main-home');
    secDivEle.append(sectionEle);

    element.appendChild(firstDivEle);
    element.appendChild(secDivEle);

    return element
  }

 return { createHome };
})();

export { home };