/**
 * toggles the mobile menu open/closed state
 * adds or removes the 'open' class to menu and hamburger icon
 **/

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/* class to create typewriter effect */

class TxtType {
    constructor(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.isDeleting = false;
      this.tick();
    }
  
    tick() {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];
  
      this.txt = this.isDeleting 
        ? fullTxt.substring(0, this.txt.length - 1)
        : fullTxt.substring(0, this.txt.length + 1);
  
      this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
      let delta = this.isDeleting ? 100 : 200 - Math.random() * 100;
  
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
  
      setTimeout(() => this.tick(), delta);
    }
}        
  
/* initialize typewriter effect on page load */

window.onload = function () {
    document.querySelectorAll('.typewrite').forEach((el) => {
      const toRotate = el.getAttribute('data-type');
      const period = el.getAttribute('data-period');
      if (toRotate) new TxtType(el, JSON.parse(toRotate), period);
    });
  
    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  
    handleResize();
};