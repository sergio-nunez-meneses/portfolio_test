// VARIABLES
const NAV_TOOGLE = document.querySelector('.nav-toggle');

let slider = new KeenSlider('#my-keen-slider', {
  loop: true,
  slideChanged: slider => {

  },
});

// FUNCTIONS
keyControl = function(e) {
  let keycode = event.key,
    i = slider.details().relativeSlide;
  switch (keycode) {

    case 'ArrowLeft':
      i--;
      break;

    case 'ArrowRight':
      i++;
      break;

    case 'Escape':
      break;

    default:
    return;
  }

  slider.moveToSlideRelative(i, true, 1000);
}
// add smooth scroll to item
smoothScroll = function() {
  const NAV_LINKS = document.querySelectorAll('.nav-item');
  for (let n in NAV_LINKS) {
    if (NAV_LINKS.hasOwnProperty(n)) {
      NAV_LINKS[n].addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(NAV_LINKS[n].hash).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  }
}
smoothScroll();
// scroll to the item
scrollSpy = function() {
  const SECTIONS = document.getElementsByTagName('article');

  window.onscroll = () => {
    const SCROLL_POSITION = document.documentElement.scrollTop || document.body.scrollTop;

    for (var s in SECTIONS) {
      if (SECTIONS.hasOwnProperty(s) && SECTIONS[s].offsetTop <= SCROLL_POSITION) {
        const ID = SECTIONS[s].id;
        document.querySelector('.active-item').classList.remove('.active-item');
        document.querySelector('a[href*=${ID}]').parentNode.classList.add('.active-item');
      }
    }
  }
}
scrollSpy();
// navbar
toogleNavbar = function() {

  let hamburger = {
    nav: document.querySelector('#nav'),
    navToggle: document.querySelector('.nav-toggle'),

    initialize() {
      this.navToggle.addEventListener('click', () => {
        this.toggle();
      });
    },

    toggle() {
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    },
  };

  hamburger.initialize();
}
toogleNavbar();

// CLASSES
class Typewriter {
  constructor(el, toRotate, period) {
    this.el = el;
    this.toRotate = toRotate;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.isDeleting = false;
    this.tick();
  }
  tick = function() {
    let i = this.loopNum % this.toRotate.length,
      fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let delta = 200 - Math.random() * 100,
      that = this;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  }
}

window.onload = function() {
  let elements = document.getElementsByClassName('typewrite');
  for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute('data-type'),
      period = elements[i].getAttribute('data-period');

    if (toRotate) {
      new Typewriter(elements[i], JSON.parse(toRotate), period);
    }
  }

  let css = document.createElement('style');
  css.type = "text/css";
  css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff }';
  document.body.appendChild(css);
};

// EVENT LISTENERS
document.addEventListener('keydown', keyControl);
