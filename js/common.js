// code for the home page

let mediaQuery = window.matchMedia("(max-width: 850px)")
let mobile = false;
let detailsToggle = false;

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
  } else if (element.id == "soiree") {
    element.src = "../assets/billetterie/billet_soiree_grossi.png";
  } else if (element.id == "classique") {
    element.src = "../assets/billetterie/billet_classique_grossi.png";
  } else if (element.id == "vip") {
    element.src = "../assets/billetterie/billet_VIP_grossi.png";
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
  } else if (element.id == "soiree") {
    element.src = "../assets/billetterie/billet_soiree.png";
  } else if (element.id == "classique") {
    element.src = "../assets/billetterie/billet_classique.png";
  } else if (element.id == "vip") {
    element.src = "../assets/billetterie/billet_VIP.png";
  }
}

function showDetails(element) {
  let details = null;
  if (element.id == "douai"){
    details = document.getElementById("douaiDetails");
  } else if (element.id == "lille"){
    details = document.getElementById("lilleDetails");
  } else if (element.id == "alencon"){
    details = document.getElementById("alenconDetails");
  } else if (element.id == "valenciennes"){
    details = document.getElementById("valenciennesDetails");
  }

  if (detailsToggle) {
    details.style.display = "none";
    detailsToggle = false;
  } else {
    details.style.display = "flex";
    detailsToggle = true;
  }
}
checkIfMobile(mediaQuery) // Call listener function at run time
mediaQuery.addListener(checkIfMobile) // Attach listener function on state changes 
