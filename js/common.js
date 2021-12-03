// code for the home page

//change the carte image on mouse hover
function changeImage(element) {
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
