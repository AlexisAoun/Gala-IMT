// code for the home page

let mediaQuery = window.matchMedia("(max-width: 850px)")
let mobile = false;
let detailsToggleDouai = false;
let detailsToggleLille = false;
let detailsToggleValenciennes = false;
let detailsToggleAlencon = false;

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
  // } else if (element.id == "soiree") {
  //   element.src = "../assets/billetterie/billet_soiree_blanc.png";
  // } else if (element.id == "vip") {
  //   element.src = "../assets/billetterie/billet_VIP_blanc.png";
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
  // } else if (element.id == "soiree") {
  //   element.src = "../assets/billetterie/billet_soiree.png";
  // } else if (element.id == "vip") {
  //   element.src = "../assets/billetterie/billet_VIP.png";
  }
}

function closeBtnPopup(){
	container = document.getElementById("popup-container");
	body = document.body;
	container.style.display = "none";
	body.style.overflow = "visible";
}

checkIfMobile(mediaQuery) // Call listener function at run time
mediaQuery.addListener(checkIfMobile) // Attach listener function on state changes 
