// Vocabulaire
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let titre = document.createElement("h1");
// Clique sur une matière
function clic(matiere) {

    switch (matiere) {
      case "grammaire":
            console.log(matiere);
            grammaire(matiere)
        break;
      case "conjugaison":
            console.log(matiere);
            conjugaison(matiere)
        break;
      case "orthographe":
            console.log(matiere);
            orthographe(matiere)
        break;
      case "vocabulaire":
            console.log(matiere);
            vocabulaire(matiere)
        break;
      default:
        break;
    }    
}

// Fonction grammaire()
function grammaire(matiere) {
  tableau.innerHtml = "";
  titre.textContent = `S'entrainer en ${matiere}`;
  tableau.appendChild(titre);
}
// Fin grammaire
// Fonction conjugaison()
function conjugaison(matiere) {
  tableau.innerHtml = "";
  titre.textContent = `S'entrainer en ${matiere}`;
  tableau.appendChild(titre);
}
// Fin conjugaison
// Fonction orthographe()
function orthographe(matiere) {
  tableau.innerHtml = "";
  titre.textContent = `S'entrainer en ${matiere}`;
  tableau.appendChild(titre);
}
// Fin orthographe

// Fonction vocabulaire()
function vocabulaire(matiere) {
    tableau.innerHtml = ''
    titre.textContent = `S'entrainer en ${matiere}`
    tableau.appendChild(titre)
}