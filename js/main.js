const description = document.querySelector('.portfolio__description span');
window.addEventListener('load', function () {

  let width = (description.clientWidth + 1);
  let i = 0;
  step = 3;
  function go() {
    // console.log(description.clientWidth);
    i = i < width ? i + step : -15;
    console.log(i);
    description.style.marginLeft = -i + 'px';
  }
  // space = '&nbsp';
  let text = description.innerHTML;
  description.innerHTML = text + text + text + text;
  // description.innerHTML = space + text + space;
  // description.style.position = 'absolute';
  // description.style.position = '';
  setInterval(go, 10);
}, true);