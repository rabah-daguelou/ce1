let n1, n2, resultat, nom_operation, signe_operation, operation;
let operations = ["+", "-", "*"];
let min = 0;
let max = operations.length - 1;

let tableau = document.getElementById("tableau");

let bonneRéponse = "Bravo! Bonne réponse.";
let mauvaiseRéponse = "Désolé! Mauvaise réponse.";
let messageReponse = document.createElement("p");
    messageReponse.className = "messageReponse";

// Consignes
let consigne = document.createElement("p");
consigne.className = "consigne";
let consigneCalculMental = `<h2> Consigne </h2> <p> Tu dois répondre à 10 questions. Chaque bonne réponse te rapportera 1 point. Tu peux voir ta note qui s'affichera en haut à droite du tableau. </p>`;
let consigneAdditionPosee = `<h2> Consigne </h2> <p> Tu dois faire 10 additions posées. Chaque bonne réponse te rapportera 1 point. Tu peux voir ta note qui s'affichera en haut à droite du tableau. </p>`;
let consigneSoustractionPosee = `<h2> Consigne </h2> <p> Tu dois faire 10 soustractions posées. Chaque bonne réponse te rapportera 1 point. Tu peux voir ta note qui s'affichera en haut à droite du tableau. </p>`;
let consigneMultiplicationPosee = `<h2> Consigne </h2> <p> Tu dois faire 10 Multiplications posées. Chaque bonne réponse te rapportera 1 point. Tu peux voir ta note qui s'affichera en haut à droite du tableau. </p>`;
let consigneTablesDeMultiplication = `<h2> Consigne </h2> <p> Tu dois choisir une table de multiplication. Chaque bonne réponse te rapportera 1 point. Tu peux voir ta note qui s'affichera en haut à droite du tableau. </p>`;



// Bouton commencer
let bouton_commencer = document.createElement("button");
bouton_commencer.textContent = "Commencer";
bouton_commencer.className = "btn btn-danger bouton_commencer";

// Clique sur un choix
function clique(choix, niveau, note, question) {
  tableau.innerHTML = "";
  console.log("Choix:", choix, "Niveau:", niveau);
  tableau.appendChild(consigne);
  tableau.appendChild(bouton_commencer);

  switch (choix) {
    // 1. Calcul mental
    case "Calcul mental":
      consigne.innerHTML = consigneCalculMental;
      bouton_commencer.addEventListener("click", () => {
        calculFunction(choix, niveau, note, question);
      });
      break;
    // 2. Addition posée
    case "Addition posée":
      consigne.innerHTML = consigneAdditionPosee;
      bouton_commencer.addEventListener("click", () => {
        calculFunction(choix, niveau, note, question);
      });
      break;
    // 3. Soustraction posée
    case "Soustraction posée":
      consigne.innerHTML = consigneSoustractionPosee;
      bouton_commencer.addEventListener("click", () => {
        calculFunction(choix, niveau, note, question);
      });
      break;
    // 4. Multiplication posée
    case "Multiplication posée":
      consigne.innerHTML = consigneMultiplicationPosee;
      bouton_commencer.addEventListener("click", () => {
        calculFunction(choix, niveau, note, question);
      });
      break;
    // 5. Tables de multiplication
    case "Tables de multiplication":
      consigne.innerHTML = consigneTablesDeMultiplication;
      bouton_commencer.addEventListener("click", () => {
        tablesDeMultiplicationFunction(choix, niveau, note, question);
      });
      break;
    default:
      break;
  }
}

// Operation Function
function operationFunction(choix, niveau, note, question) {
  
  switch (choix) {
    case "Calcul mental":
      calculMentalOperationFunction(niveau);
      break;
    case "Addition posée":
      additionPoseeOperationFunction(niveau);
      break;
    case "Soustraction posée":
      soustractionPoseeOperationFunction(niveau);
      break;
    case "Multiplication posée":
      multiplicationPoseeOperationFunction(niveau);
      break;
    
    default:
      break;
  }
}

//1. Opération calcul mental // calculMentalOperationFunction
function calculMentalOperationFunction(niveau) {
      
  switch (niveau) {
      
    case 1:
      n1 = Math.trunc(Math.random(100, 1000) * 10);
      n2 = Math.trunc(Math.random(100, 1000) * 10);
      break;
    case 2:
      n1 = Math.trunc(Math.random(100, 1000) * 20);
      n2 = Math.trunc(Math.random(100, 1000) * 20);
      break;
    case 3:
      n1 = Math.trunc(Math.random(100, 1000) * 100);
      n2 = Math.trunc(Math.random(100, 1000) * 100);
      break;
    default:
      break;
  }
  let numero_operation = Math.floor(Math.random() * 3);

  switch (numero_operation) {
    // Addition
    case 0:
      signe_operation = "+";
      nom_operation = " Addition ";
      operation = `${n1} + ${n2} `;
      resultat = n1 + n2;
      console.log ("Calcul mental addition niveau:", niveau)
      break;
    // Soustraction
    case 1:
      signe_operation = "-";
      nom_operation = " Soustraction";
      if (n1 > n2) {
        operation = `${n1} - ${n2} `;
        resultat = n1 - n2;
      } else {
        operation = `${n2} - ${n1} `;
        resultat = n2 - n1;
      }
      console.log("Calcul mental soustraction niveau:", niveau);
      break;
    // Multiplication
    case 2:
      signe_operation = "X";
      nom_operation = " Multiplication";
      if (niveau == 1) {
        n1 = Math.trunc(n1 / 2);
        n2 = Math.trunc(n2 / 2);
        operation = `${n1} X ${n2} `;
        resultat = n2 * n1;
      } else {
        n1 = Math.trunc(n1 / 10);
        n2 = Math.trunc(n2 / 10);
        operation = `${n1} X ${n2} `;
        resultat = n2 * n1;
      }
      console.log("Calcul mental multiplication niveau:", niveau);
      break;
    default:
      break;
  }
}

//2-  Opération addition posée // additionPoseeOperationFunction
function additionPoseeOperationFunction(niveau) {
  let consigneAdditionPosee2 = document.createElement('p');
  consigneAdditionPosee2.textContent=' Pose ton opération sur ton cahier ou ton ardoise, introduit ton résultat puis clique sur "Valider"'
  tableau.appendChild(consigneAdditionPosee2)
    
  switch (niveau) {
    case 1:
      n1 = Math.trunc(Math.random(100, 1000) * 100);
      n2 = Math.trunc(Math.random(100, 1000) * 100);
      operation = `${n1} + ${n2} `;
      resultat = n1+ n2;
      break;
    case 2:
      n1 = Math.trunc(Math.random(100, 1000) * 200);
      n2 = Math.trunc(Math.random(100, 1000) * 200);
      operation = `${n1} + ${n2} `;
      resultat = n1+ n2;
        
      break;
    case 3:
        n1 = Math.trunc(Math.random(100, 1000) * 1000);
        n2 = Math.trunc(Math.random(100, 1000) * 1000);
        operation = `${n1} + ${n2} `;
        resultat = n1+ n2;
      break;
    default:
      break;
  }
}

//3-  Opération Soustraction posée // soustractionPoseeOperationFunction
function soustractionPoseeOperationFunction(niveau) {
  let consigneSoustractionPosee2 = document.createElement('p');
  consigneSoustractionPosee2.textContent=' Pose ton opération sur ton cahier ou ton ardoise, introduit ton résultat puis clique sur "Valider"'
  tableau.appendChild(consigneSoustractionPosee2)
    
  switch (niveau) {
    case 1:
      n1 = Math.trunc(Math.random(100, 1000) * 100);
      n2 = Math.trunc(Math.random(100, 1000) * 100);
      if (n1 > n2) {
        operation = `${n1} - ${n2} `;
        resultat = n1 - n2;
      } else {
        operation = `${n2} - ${n1} `;
        resultat = n2 - n1;
      }
      
      break;
    case 2:
      n1 = Math.trunc(Math.random(100, 1000) * 200);
      n2 = Math.trunc(Math.random(100, 1000) * 200);
      if (n1 > n2) {
        operation = `${n1} - ${n2} `;
        resultat = n1 - n2;
      } else {
        operation = `${n2} - ${n1} `;
        resultat = n2 - n1;
      }
        
      break;
    case 3:
        n1 = Math.trunc(Math.random(100, 1000) * 1000);
        n2 = Math.trunc(Math.random(100, 1000) * 1000);
        if (n1 > n2) {
          operation = `${n1} - ${n2} `;
          resultat = n1 - n2;
        } else {
          operation = `${n2} - ${n1} `;
          resultat = n2 - n1;
        }
      break;
    default:
      break;
  }
}

// 4. multiplicationPoseeOperationFunction(niveau)
function multiplicationPoseeOperationFunction(niveau) {
  let consigneMultiplicationPosee2 = document.createElement("p");
  consigneMultiplicationPosee2.textContent =
    ' Pose ton opération sur ton cahier ou ton ardoise, introduit ton résultat puis clique sur "Valider"';
  tableau.appendChild(consigneMultiplicationPosee2);

  switch (niveau) {
    case 1:
      n1 = Math.trunc(Math.random(100, 1000) * 100);
      n2 = Math.trunc(Math.random(100, 1000) * 10);
      operation = `${n1} X ${n2} `;
      resultat = n1 * n2;
      break;
    case 2:
      n1 = Math.trunc(Math.random(100, 1000) * 200);
      n2 = Math.trunc(Math.random(100, 1000) * 20);
      operation = `${n1} X ${n2} `;
      resultat = n1 * n2;

      break;
    case 3:
      n1 = Math.trunc(Math.random(100, 1000) * 1000);
      n2 = Math.trunc(Math.random(100, 1000) * 1000);
      operation = `${n1} X ${n2} `;
      resultat = n1 * n2;
      break;
    default:
      break;
  }
}

// 5. Tables de multiplication(niveau)
function tablesDeMultiplicationFunction(choix, niveau, note, question) {
  tableau.innerHTML = "";

  consigne.textContent =
    ' Choisie ta table de multiplication, introduit ton résultat puis clique sur "Valider".';
  tableau.appendChild(consigne);
  let tables = [2, 5, 10, 3, 4, 6, 7, 8, 9];
  let divBoutonsTables = document.createElement("div");
  divBoutonsTables.className = "divBoutonsTables";
  tableau.appendChild(divBoutonsTables);
  let table
  // Choix de la table
  switch (niveau) {
    case 1:
      for (let t = 0; t < 3; t++) {
        let monBoutonTable = document.createElement("button");
        monBoutonTable.className = `btn${t} btn btn-success`;
        monBoutonTable.textContent = `Table de ${tables[t]}`;
        divBoutonsTables.appendChild(monBoutonTable);
        monBoutonTable.addEventListener('click', () => {
          table = tables[t]
          tableFunction(table, note, question)
        }) 
      }
      break;
    case 2:
      for (let t = 3; t < 6; t++) {
        let monBoutonTable = document.createElement("button");
        monBoutonTable.className = `btn${t} btn btn-success`;
        monBoutonTable.textContent = `Table de ${tables[t]}`;
        divBoutonsTables.appendChild(monBoutonTable);
        monBoutonTable.addEventListener('click', () => {
          table = tables[t]
          tableFunction(table, note, question)
        })
      }
      break;
    case 3:
      for (let t = 6; t < 9; t++) {
        let monBoutonTable = document.createElement("button");
        monBoutonTable.className = `btn${t} btn btn-success`;
        monBoutonTable.textContent = `Table de ${tables[t]}`;
        divBoutonsTables.appendChild(monBoutonTable);
        monBoutonTable.addEventListener('click', () => {
          table = tables[t]
          tableFunction(table, note, question)
        })
      }
      break;
    default:
      break;
  }

  
}
// Fonction tables multiplication
function tableFunction(x, note, question) {
  tableau.innerHTML = ''
  // Créer h2 Titre
  let titreAndScore = document.createElement("div");
  titreAndScore.className = "titreAndScore";
  let titre = document.createElement("div");
  titre.className = "titre";
  let titre1 = document.createElement("h4");
  titre1.textContent = 'Table de: ' + x;
  let titre2 = document.createElement("h4");
  titre2.textContent = "Niveau: CP / CE1 ";
  // Créer p Score
  let score = document.createElement("h5");
  
  // Afficher le titre et le score
  tableau.appendChild(titreAndScore);
  titreAndScore.appendChild(titre);
  titre.appendChild(titre1);
  tableau.appendChild(titre2);
  titreAndScore.appendChild(score);
  score.textContent = `Note : ${note} / 10 `;
  
  // Afficher la table
  let divFormulaire = document.createElement('div')
  divFormulaire.className = 'divFormulaire'
  let formulaire = document.createElement("form");
  formulaire.className='formulaire'
  divFormulaire.appendChild(formulaire)

  tableau.appendChild(divFormulaire)

  for (let i = 1; i < 11; i++) {
    let divLabelInput = document.createElement('div')
    divLabelInput.className='divLabelInput'
    formulaire.appendChild(divLabelInput)
    
    let myLabel = document.createElement('label')
    let myInput = document.createElement('input')
    myInput.required = true
    
    myLabel.textContent = `${x} x ${i} = `
    divLabelInput.appendChild(myLabel);
    divLabelInput.appendChild(myInput)
  }
  
  // Créer le bouton valider
  let divBoutonValider = document.createElement("div");
  let boutonValider = document.createElement('button')
  boutonValider.textContent = 'Valider'
  boutonValider.className = 'boutonValider btn btn-success'
  
  formulaire.appendChild(divBoutonValider)
  divBoutonValider.appendChild(boutonValider)
  
  let tableauInputs = document.getElementsByTagName('input');
  
  //  Vérifier les inputs
  formulaire.addEventListener('submit', function (f) {
    note = 0;
    for (let j = 1; j < tableauInputs.length+1; j++) {
      if (tableauInputs[j-1].value) {
        tableauInputs[j-1].disabled = true
      }
      console.log(x,j);
        if (tableauInputs[j-1].value == x * j) {
          tableauInputs[j - 1].style.background = 'green'
          tableauInputs[j - 1].style.color = "white";
      note++
      score.textContent = `Note : ${note} / 10`;
    } else {
          tableauInputs[j - 1].style.background = "red";
          tableauInputs[j - 1].style.color = "white";
      }
    }
    f.preventDefault();
  })
}

// Fonction générale calculFunction

function calculFunction(choix, niveau, note, question) {
  console.log(`Choix: ${choix} Niveau: ${niveau}`);
  tableau.innerHTML = "";
  let titreAndScore = document.createElement("div");
  titreAndScore.className = "titreAndScore";

  // Créer h2 Titre
  let titre = document.createElement("div");
  titre.className = "titre";
  let titre1 = document.createElement("h4");
  titre1.textContent = choix;
  let titre2 = document.createElement("h4");
  titre2.textContent = "Niveau:  " + niveau;
  // Créer p Score
  let score = document.createElement("p");
  score.textContent = `Note : ${note} / ${question} `;

  // Afficher le titre et le score
  tableau.appendChild(titreAndScore);

  titreAndScore.appendChild(titre);
  titre.appendChild(titre1);
  titre.appendChild(titre2);
  titreAndScore.appendChild(score);

  // Créer l'opération
  operationFunction(choix, niveau);

  let texteOperation = document.createElement("p");
  texteOperation.className = "operation";
  texteOperation.textContent = operation;
  tableau.appendChild(texteOperation);

  // Créer input réponse
  let inputReponse = document.createElement("input");
  inputReponse.className = "btn btn-light";
  inputReponse.setAttribute("placeholder", "Ta réponse ici");
  tableau.appendChild(inputReponse);

  // Apparaitre le bouton Valider
  let bouton_valider = document.createElement("button");
  bouton_valider.textContent = "Valider";
  bouton_valider.className = "btn btn-danger bouton_valider";

  // Ecouter input insérer bouton_valider
  inputReponse.addEventListener("input", () =>
    tableau.appendChild(bouton_valider)
  );
  console.log("Réponse:", inputReponse.value);
  // Ecouter bouton_valider - Insérer le bouton Suivant
  bouton_valider.addEventListener("click", () => {
    bouton_valider.remove();
    inputReponse.toggleAttribute("disabled");
    // Créer insérer bouton Suivant
    let bouton_suivant = document.createElement("button");
    bouton_suivant.textContent = "Suivant";
    bouton_suivant.className = "btn btn-success bouton_suivant";

    tableau.appendChild(messageReponse);
    tableau.appendChild(bouton_suivant);
    question++;

    // Tester la réponse
    if (inputReponse.value == resultat) {
      note++;
      score.textContent = `Note : ${note} / ${question} `;
      messageReponse.style.color = "green";
      messageReponse.textContent = bonneRéponse;
    } else {
      messageReponse.style.color = "red";
      messageReponse.textContent = mauvaiseRéponse;
    }

    // Ecouter le bouton suivant
    bouton_suivant.addEventListener("click", () => {
      tableau.innerHTML = "";
      if (question < 10) {
        calculFunction(choix, niveau, note, question);
      } else {
        let noteFinale = document.createElement("p");
        tableau.appendChild(noteFinale);
        noteFinale.className = "noteFinale";
        noteFinale.textContent = `Ta note est:  ${note} / 10 `;

        let commentaire = document.createElement("p");
        tableau.appendChild(commentaire);
        commentaire.className = "commentaire";

        let emoji = document.createElement("p");
        tableau.appendChild(emoji);
        emoji.className = "emoji";

        if (note < 5) {
          commentaire.textContent =
            "Résultats insufisants! Tu dois t'entrainer davantage.";
          emoji.innerHTML = "&#128532;";
        } else if (note < 9) {
          commentaire.textContent =
            "Résultats satisfaisants! Tu peux mieux faire.";
          emoji.innerHTML = "&#128512;";
        } else {
          commentaire.textContent =
            "Excellents résultats! Tu peux essayer le niveau supérieur.";
          emoji.innerHTML = "&#128585;";
        }
      }
    });
  });
};

  
/*
// 1. Fonction Calcul mental
function calcul_mental_function(choix, niveau, note, question) {
 
  tableau.innerHTML = "";
  let numero_operation = Math.floor(Math.random() * 3);

  niveauFunction(niveau);
  operationFunction(numero_operation, niveau);

  // fonction calcul mental
  // Créer Div titre et score
  let titreAndScore = document.createElement("div");
  titreAndScore.className = "titreAndScore";

  // Créer h2 Titre
  let titre = document.createElement("h4");
  titre.textContent = choix + niveau;

  // Créer p Score
  let score = document.createElement("p");
  score.textContent = `Note : ${note} / ${question} `;

  // Insérer le titre et score
  tableau.appendChild(titreAndScore);
  titreAndScore.appendChild(titre);
  titreAndScore.appendChild(score);

  // Créer l'opération
  let texteOperation = document.createElement("p");
  texteOperation.className = "operation";
  texteOperation.textContent = operation;
  tableau.appendChild(texteOperation);

  // Créer input réponse
  let inputReponse = document.createElement("input");
  inputReponse.className = "btn btn-light";
  inputReponse.setAttribute("placeholder", "Ta réponse ici");
  tableau.appendChild(inputReponse);

  // Apparaitre le bouton Valider
  let bouton_valider = document.createElement("button");
  bouton_valider.textContent = "Valider";
  bouton_valider.className = "btn btn-danger bouton_valider";

  // Ecouter input insérer bouton_valider
  inputReponse.addEventListener("input", () =>
    tableau.appendChild(bouton_valider)
  );

  // Ecouter bouton_valider - Insérer le bouton Suivant
  bouton_valider.addEventListener("click", () => {
    bouton_valider.remove();
    inputReponse.toggleAttribute("disabled");
    // Créer insérer bouton Suivant
    let bouton_suivant = document.createElement("button");
    bouton_suivant.textContent = "Suivant";
    bouton_suivant.className = "btn btn-success bouton_suivant";

    tableau.appendChild(messageReponse);
    tableau.appendChild(bouton_suivant);
    question++;

    // Tester la réponse
    if (inputReponse.value == resultat) {
      note++;
      score.textContent = `Note : ${note} / ${question} `;
      messageReponse.style.color = "green";
      messageReponse.textContent = bonneRéponse;
    } else {
      messageReponse.style.color = "red";
      messageReponse.textContent = mauvaiseRéponse;
    }

    // Ecouter le bouton suivant
    bouton_suivant.addEventListener("click", () => {
      tableau.innerHTML = "";
      if (question < 10) {
        calcul_mental_function(niveau, note, question);
      } else {
        let noteFinale = document.createElement("p");
        tableau.appendChild(noteFinale);
        noteFinale.className = "noteFinale";
        noteFinale.textContent = `Ta note est:  ${note} / 10 `;

        let commentaire = document.createElement("p");
        tableau.appendChild(commentaire);
        commentaire.className = "commentaire";

        let emoji = document.createElement("p");
        tableau.appendChild(emoji);
        emoji.className = "emoji";

        if (note < 5) {
          commentaire.textContent =
            "Résultats insufisants! Tu dois t'entrainer davantage.";
          emoji.innerHTML = "&#128532;";
        } else if (note < 9) {
          commentaire.textContent =
            "Résultats satisfaisants! Tu peux mieux faire.";
          emoji.innerHTML = "&#128512;";
        } else {
          commentaire.textContent =
            "Excellents résultats! Tu peux essayer le niveau supérieur.";
          emoji.innerHTML = "&#128585;";
        }
      }
    });
  });
}
*/
// 2. Fonction Addition posée
