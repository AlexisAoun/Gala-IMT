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

//for the love of god i should refactor this
//why do i always begin 48hrs before deadlines
function showDetails(element) {
  let details = null;
  if (element.id == "douai"){
    details = document.getElementById("douaiDetails");
    if (detailsToggleDouai) {
      details.style.display = "none";
      detailsToggleDouai = false;
    } else {
      detailsToggleDouai = true;
      details.style.display = "flex";
    }
  } else if (element.id == "lille"){
    details = document.getElementById("lilleDetails");
    if (detailsToggleLille) {
      details.style.display = "none";
      detailsToggleLille = false;
    } else {
      detailsToggleLille = true;
      details.style.display = "flex";
    }
  } else if (element.id == "alencon"){
    details = document.getElementById("alenconDetails");
    if (detailsToggleAlencon) {
      details.style.display = "none";
      detailsToggleAlencon = false;
    } else {
      detailsToggleAlencon = true;
      details.style.display = "flex";
    }
  } else if (element.id == "valenciennes"){
    details = document.getElementById("valenciennesDetails");
    if (detailsToggleValenciennes) {
      details.style.display = "none";
      detailsToggleValenciennes = false;
    } else {
      detailsToggleValenciennes = true;
      details.style.display = "flex";
    }
  }
}

function closeBtnPopup(){
	container = document.getElementById("popup-container");
	container.style.display = "none"
}

checkIfMobile(mediaQuery) // Call listener function at run time
mediaQuery.addListener(checkIfMobile) // Attach listener function on state changes 
