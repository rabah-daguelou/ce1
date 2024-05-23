let note, numero_question
// Vocabulaire
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let titre = document.createElement("h2");
let divTitre = document.createElement("div");
divTitre.className = 'divTitre'
let titre1 = document.createElement("h5");
let divScore = document.createElement("div");
let score = document.createElement("span");


let consigne = document.createElement('p')
consigne.textContent = ' Je te pose dix questions. A chaque bonne réponse, tu gagnes un point. Tu peux suivre instantanément ton score en haut à droite de ton écran.'

let boutonCommencer = document.createElement("button");
boutonCommencer.textContent = 'Commencer'
boutonCommencer.className = 'btn btn-primary'

// Clique sur une matière
function clique(matiere, niveau, numero_question, note ) {

    switch (matiere) {
      case "grammaire":
            console.log(matiere);
            grammaire(matiere, niveau, numero_question, note);
        break;
      case "conjugaison":
            console.log(matiere);
            conjugaison(matiere, niveau, numero_question, note);
        break;
      case "orthographe":
            console.log(matiere);
            orthographe(matiere, niveau, numero_question, note);
        break;
      case "vocabulaire":
            console.log(matiere);
            vocabulaire(matiere, niveau, numero_question, note);
        break;
      default:
        break;
    }    
}


// Fonction vocabulaire()
function vocabulaire(matiere, niveau, numero_question, note) {
    tableau.innerHtml = ''
    titre.textContent = `S'entrainer en ${matiere}`
    titre1.textContent = `Niveau:${niveau}`
    tableau.appendChild(titre)
    tableau.appendChild(consigne)
    tableau.appendChild(boutonCommencer);

    // Ecouter le bouton Commencer
    boutonCommencer.addEventListener('click', () => {
        consigne.remove()
        boutonCommencer.remove()
        tableau.appendChild(divTitre);
        divTitre.appendChild(titre1)
        divTitre.appendChild(divScore)
        score.textContent = `Note: ${note} / ${numero_question}`;
        divScore.appendChild(score);
    })
}

// Fin vocabulaire

// Fonction grammaire()
function grammaire(matiere) {
  tableau.innerHtml = "";
  titre1.textContent = `S'entrainer en ${matiere}`;
    tableau.appendChild(titre);
    
}
// Fin grammaire
// Fonction conjugaison()
function conjugaison(matiere) {
  tableau.innerHtml = "";
  titre1.textContent = `S'entrainer en ${matiere}`;
  tableau.appendChild(titre);
}
// Fin conjugaison
// Fonction orthographe()
function orthographe(matiere) {
  tableau.innerHtml = "";
    titre1.textContent = `S'entrainer en ${matiere}`;
    tableau.appendChild(titre);
     
}
// Fin orthographe

