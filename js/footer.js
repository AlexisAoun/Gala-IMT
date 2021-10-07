/**
 * @description Create the Page Footer element
 * @name page-footer
 * @author Romain Guarinoni
 */
class PageFooter extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    // container global du footer
    const container = document.createElement('div');
    container.classList.add('footer-container');
    container.style.width = '100%';
    container.style.height = '120px';
    container.style.display = 'flex';
    container.style.justifyContent = 'space-around';
    container.style.alignItems = 'center';
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    container.style.backgroundColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--orange');

    // logo du footer - A MODIFIER QUAND ON AURA LE VRAI LOGO

    const logo = document.createElement('div');
    logo.classList.add('footer-logo');
    const logoText = document.createElement('p');
    logoText.textContent = 'Logo';
    logoText.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--orange');
    logoText.style.zIndex = 3;
    logoText.style.position = 'relative';
    logo.appendChild(logoText);
    logo.style.flex = 2;

    // container des social medias
    const socialMedia = document.createElement('div');
    socialMedia.classList.add('footer-social-media');
    socialMedia.style.height = '100%';
    socialMedia.style.display = 'flex';
    socialMedia.style.flex = 1.5;
    socialMedia.style.flexDirection = 'column';
    socialMedia.style.alignItems = 'center';
    socialMedia.style.justifyContent = 'center';

    // texte du social media
    const socialMediaText = document.createElement('p');
    socialMediaText.textContent = 'Suivez-nous sur nos réseaux sociaux!';

    // logos du social media
    const socialMediaIcons = document.createElement('div');
    socialMediaIcons.style.display = 'flex';
    socialMediaIcons.style.alignItems = 'center';
    socialMediaIcons.style.justifyContent = 'space-around';
    socialMediaIcons.style.width = '100%';

    const facebook = document.createElement('img');
    facebook.src = './assets/logos/facebook.png';
    facebook.classList.add('social-media-logo');

    const instagram = document.createElement('img');
    instagram.src = './assets/logos/instagram.png';
    instagram.classList.add('social-media-logo');

    const linkedin = document.createElement('img');
    linkedin.src = './assets/logos/linkedin.png';
    linkedin.classList.add('social-media-logo');

    const youtube = document.createElement('img');
    youtube.src = './assets/logos/youtube.png';
    youtube.classList.add('social-media-logo');

    socialMediaIcons.appendChild(facebook);
    socialMediaIcons.appendChild(instagram);
    socialMediaIcons.appendChild(linkedin);
    socialMediaIcons.appendChild(youtube);

    socialMedia.appendChild(socialMediaText);
    socialMedia.appendChild(socialMediaIcons);

    // General info about the Gala

    const info = document.createElement('div');
    info.style.textAlign = 'center';
    info.style.display = 'flex';
    info.style.flexDirection = 'column';
    info.style.alignItems = 'center';
    info.style.height = '100%';
    info.style.flex = 1.5;
    info.style.justifyContent = 'space-around';

    const infoText1 = document.createElement('div');
    const infoText2 = document.createElement('div');

    const p1 = document.createElement('p');
    p1.textContent = 'Le Comité du Gala 2022';
    p1.classList.add('info-p');

    const p2 = document.createElement('p');
    p2.textContent = 'IMT Nord Europe';
    p2.classList.add('info-p');

    const p3 = document.createElement('p');
    p3.textContent = 'Rendez-vous le 05 Février 2022';
    p3.classList.add('info-p');

    const p4 = document.createElement('p');
    p4.textContent = 'Au Casinode Saint-Amand-Les Eaux';
    p4.classList.add('info-p');

    info.appendChild(infoText1);
    info.appendChild(infoText2);

    infoText1.appendChild(p1);
    infoText1.appendChild(p2);
    infoText2.appendChild(p3);
    infoText2.appendChild(p4);

    // div for the sponsors

    const sponsors = document.createElement('div');
    sponsors.classList.add('footer-sponsors');
    const sponsorsText = document.createElement('p');
    sponsorsText.textContent = 'Sponsors';
    sponsors.appendChild(sponsorsText);
    sponsors.style.flex = 1.5;
    sponsors.style.textAlign = 'center';

    const footerStyle = document.createElement('style');

    footerStyle.textContent =
      '.footer-container::before {' +
      'content : "";' +
      'position : absolute;' +
      'background : var(--dark-blue);' +
      'height : 300%;' +
      'width : 300%;' +
      'transform : rotate(50deg);' +
      'left : -150%;' +
      'top : -10%;' +
      'z-index:2;' +
      '}' +
      '.social-media-logo {' +
      'width : 30px;' +
      '}' +
      '.info-p {' +
      'margin : 0;' +
      shadow.appendChild(footerStyle);
      shadow.appendChild(container);
      container.appendChild(logo);
      container.appendChild(socialMedia);
      container.appendChild(info);
      container.appendChild(sponsors);
  }
}

// Define the new element
customElements.define('page-footer', PageFooter);
