/**
 * @description Create the Page Footer element
 * @name page-footer
 * @author Romain Guarinoni
 */
class PageFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <div class="footer-container">
      <div class="footer-logo">
        <p>Logo</p>
      </div>
      <div class="bloc"></div>
      <div class="footer-social-media">
        <p>Suivez nous sur les réseaux sociaux!</p> 
        <div class="logoReseaux">
          <a href="#"><i class="fa fa-facebook-square"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-youtube"></i></a>
        </div>
      </div>
      <div class="footer-info">
        <div class="text1">
          <p>Le Comité du Gala 2022</p>
          <p>IMT Nord Europe</p>
        </div>
        <div class="text2">
          <p>Rendez-vous le 05 Février 2022</p>
          <p>Au Casinode Saint-Amand-Les-Eaux</p>
        </div>
      </div>
      <div class="footer-sponsors">
        <p>Sponsors</p>
      </div>
    </div>
      `;

  }
}

// Define the new element
customElements.define('page-footer', PageFooter);
