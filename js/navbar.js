class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <div class="navbar">
      <li>
        <ul>
          <a href="../index.html">
            Accueil
          </a>
        </ul>
        <ul>
          <a href="./programme.html">
            Programme
          </a>
        </ul>
        <ul>
          <a href="./billeterie.html">
            Billeterie
          </a>
        </ul>
        <ul>
          <a href="./logistique.html">
            Logistique
          </a>
        </ul>
        <ul>
          <a href="./sponsors.html">
            Sponsors
          </a>
        </ul>
        <ul>
          <a href="./don.html">
            Dons
          </a>
        </ul>
      </li>
    </div>                                     

      `;
  }
}

class NavbarHome extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <div class="navbar">
      <li>
        <ul>
          <a href="#">
            Accueil
          </a>
        </ul>
        <ul>
          <a href="html/programme.html">
            Programme
          </a>
        </ul>
        <ul>
          <a href="html/billeterie.html">
            Billeterie
          </a>
        </ul>
        <ul>
          <a href="html/logistique.html">
            Logistique
          </a>
        </ul>
        <ul>
          <a href="html/sponsors.html">
            Sponsors
          </a>
        </ul>
        <ul>
          <a href="html/don.html">
            Dons
          </a>
        </ul>
      </li>
    </div>                                     

      `;
  }
}
customElements.define("navbar-menu", Navbar);
customElements.define("navbar-home", NavbarHome);
