const description = document.querySelector('.portfolio__description span');
window.addEventListener('load', function () {

  let width = (description.clientWidth + 1);
  let i = 0;
  step = 1;
  function go() {
    i = i < width ? i + step : -42;
    // console.log(i);
    description.style.marginLeft = -i + 'px';
  }
  let text = description.innerHTML;
  description.innerHTML = text + text + text + text;
  setInterval(go, 10);
}, true);

(function () {
  const darkmodeBtn = document.querySelector('.darkmode__btn');
  const darkmodeRound = document.querySelector('.darkmode__round');
  const html = document.getElementsByTagName('html')[0];
  let mode = "light";

  const osTheme = () => {
    let osMode = "light";
    if (matchMedia) {
      osMode = matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
      html.classList[osMode === "dark" ? "add" : "remove"]("darkmode");
    }
  }

  const handleDarkmode = () => {
    if (darkmodeRound.className.includes('left')) {
      mode = "osMode"
      darkmodeRound.classList.remove('left');
      darkmodeRound.classList.add('center--r');
      osTheme();
    }
    else if (darkmodeRound.className.includes('center--r')) {
      mode = "dark"
      darkmodeRound.classList.remove('center--r');
      darkmodeRound.classList.add('right');
      if (!html.className.includes("darkmode")) {
        html.classList.add('darkmode');
      }
    }
    else if (darkmodeRound.className.includes('right')) {
      mode = "osTheme"
      darkmodeRound.classList.remove('right');
      darkmodeRound.classList.add('center--l');
      osTheme();
    }
    else if (darkmodeRound.className.includes('center--l')) {
      mode = "light"
      darkmodeRound.classList.remove('center--l');
      darkmodeRound.classList.add('left');
      if (html.className.includes("darkmode")) {
        html.classList.remove('darkmode');
      }
    }
    else {
      return;
    }
  }

  darkmodeBtn.addEventListener('click', handleDarkmode);

  const init = () => {
    if (matchMedia) {
      ['light', 'dark'].forEach(osMode => {
        matchMedia(`(prefers-color-scheme: ${osMode})`).addListener(e => { if (e.matches && mode === "osMode") { osTheme() } })
      })
    }
  }
  init();
})();

