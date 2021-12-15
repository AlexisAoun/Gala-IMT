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
  if (element.id == "soiree") {
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
  if (element.id == "soiree") {
    element.src = "../assets/billetterie/billet_soiree.png";
  } else if (element.id == "classique") {
    element.src = "../assets/billetterie/billet_classique.png";
  } else if (element.id == "vip") {
    element.src = "../assets/billetterie/billet_VIP.png";
  }
}

checkIfMobile(mediaQuery) // Call listener function at run time
mediaQuery.addListener(checkIfMobile) // Attach listener function on state changes 
