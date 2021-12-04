// code for the home page

let mediaQuery = window.matchMedia("(max-width: 850px)")
let mobile = false;

function checkIfMobile(mediaQuery) {
  if (mediaQuery.matches) {
    mobile = true;
  } else {
    mobile = false;
  }
}

//change the carte image on mouse hover
function changeImage(element) {
  if (!mobile) {
    carte = (element.parentNode).parentNode;
    carte.style.transform = "scale(1.1)";
  }
  if (element.id == "programme") {
    element.src = "assets/cartes_accueil/programme_carte_bleue.png";
  } else if (element.id == "billeterie") {
    element.src = "assets/cartes_accueil/billeterie_carte_bleue.png";
  } else if (element.id == "logistique") {
    element.src = "assets/cartes_accueil/logistique_carte_bleue.png";
  } else if (element.id == "sponsors") {
    element.src = "assets/cartes_accueil/sponsors_carte_bleue.png";
  } else if (element.id == "don") {
    element.src = "assets/cartes_accueil/notreequipe_carte_bleue.png";
  }
}

function resetImage(element) {
  if (!mobile) {
    carte = (element.parentNode).parentNode;
    carte.style.transform = "scale(1)";
  }
  if (element.id == "programme") {
    element.src = "assets/cartes_accueil/programme_carte.png";
  } else if (element.id == "billeterie") {
    element.src = "assets/cartes_accueil/billeterie_carte.png";
  } else if (element.id == "logistique") {
    element.src = "assets/cartes_accueil/logistique_carte.png";
  } else if (element.id == "sponsors") {
    element.src = "assets/cartes_accueil/sponsors_carte.png";
  } else if (element.id == "don") {
    element.src = "assets/cartes_accueil/notreequipe_carte.png";
  }
}

checkIfMobile(mediaQuery) // Call listener function at run time
mediaQuery.addListener(checkIfMobile) // Attach listener function on state changes 
