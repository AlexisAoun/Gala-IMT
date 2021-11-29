//Definition d'element custom
class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <div class="icon-burger" id="icon-burger" onclick="mobileMenuClick();">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div> 
    <div class="navbar" id="navbar">
      <ul>
        <li>
          <a href="../index.html">
            Accueil
          </a>
        </li>
        <li>
          <a href="./programme.html">
            Programme
          </a>
        </li>
        <li>
          <a href="./billeterie.html">
            Billeterie
          </a>
        </li>
        <li>
          <a href="./logistique.html">
            Logistique
          </a>
        </li>
        <li>
          <a href="./sponsors.html">
            Sponsors
          </a>
        </li>
        <li>
          <a href="./notre-equipe.html">
            Dons
          </a>
        </li>
      </ul>
    </div>                                     

      `;
  }
}

class NavbarHome extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <div class="icon-burger" id="icon-burger" onclick="mobileMenuClick();">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div> 
    <div class="navbar" id="navbar">
      <ul>
        <li>
          <a href="#">
            Accueil
          </a>
        </li>
        <li>
          <a href="html/programme.html">
            Programme
          </a>
        </li>
        <li>
          <a href="html/billeterie.html">
            Billeterie
          </a>
        </li>
        <li>
          <a href="html/logistique.html">
            Logistique
          </a>
        </li>
        <li>
          <a href="html/sponsors.html">
            Sponsors
          </a>
        </li>
        <li>
          <a href="html/notre-equipe.html">
            Dons
          </a>
        </li>
      </ul>
    </div>                                     
      `;
  }
}
customElements.define("navbar-menu", Navbar);
customElements.define("navbar-home", NavbarHome);

var menuIsVisible = false;

var burgerButton = document.getElementById("icon-burger");
var burgerLines = burgerButton.childNodes;

var menuPanel = document.getElementById("navbar");

function mobileMenuClick() {
  if (!menuIsVisible) {
    menuPanel.style.transition = "ease-out 1s";
    menuPanel.style.transform = "translateX(-100%)";
    openBurgerAnimation();
    menuIsVisible = true;
  } else {
    menuPanel.style.transition = "ease-in 1s";
    menuPanel.style.transform = "translateX(100%)";
    closeBurgerAnimation();
    menuIsVisible = false;
  }
}

function openBurgerAnimation() {
  burgerLines[1].style.transform = "translateY(10px) rotate(225deg)";
  burgerLines[5].style.transform = "translateY(-10px) rotate(-225deg)";
  burgerLines[3].style.opacity = 0;
}

function closeBurgerAnimation() {
  burgerLines[1].style.transform = "";
  burgerLines[5].style.transform = "";
  burgerLines[3].style.opacity = 100;
}
