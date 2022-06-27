const home = (() => {

  function createHome() {
    const element = document.createElement('div');
    element.classList.add('text-shade-container');
    const firstDivEle = document.createElement('div');
    const secDivEle = document.createElement('div');
    firstDivEle.classList.add('shade');
    secDivEle.classList.add('text');
    secDivEle.id = 'text';

    const h1Ele = document.createElement('h1');
    const paraEle1 = document.createElement('p');
    const paraEle2 = document.createElement('p');
    h1Ele.innerHTML = "<span>Z</span>" + "eus\'s" + " " + "<span>K</span>" + "itchen";
    secDivEle.append(h1Ele);

    paraEle1.textContent = 'An authentic Greek restaurant offering an eating experience like no other.';
    paraEle2.textContent = 'Dine in only.';

    secDivEle.append(paraEle1);
    secDivEle.append(paraEle2);

    element.appendChild(firstDivEle);
    element.appendChild(secDivEle);

    return element
  }

  function homeContent() {

  }

 return { createHome, homeContent };
})();

export { home };