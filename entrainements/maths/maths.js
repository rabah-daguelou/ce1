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
let consigneCalculMental = `<h2> Consigne </h2> <p> Tu dois répondre à 10 questions. Chaque bonne réponse te rapportera 1 point. Tu peux voir ta note qui s'affichera en haut à droite du tableau. </p>`;
function niveauFunction(niveau) {
  switch (niveau) {
    case 1:
      n1 = Math.trunc(Math.random() * 10);
      n2 = Math.trunc(Math.random() * 10);
      break;
    case 2:
      n1 = Math.trunc(Math.random() * 20);
      n2 = Math.trunc(Math.random() * 20);
      break;
    case 3:
      n1 = Math.trunc(Math.random() * 100);
      n2 = Math.trunc(Math.random() * 100);
      break;
    default:
      break;
  }
}
function operationFunction(numero_operation, niveau) {
  switch (numero_operation) {
    // Addition
    case 0:
      signe_operation = "+";
      nom_operation = " Addition ";
      operation = `${n1} + ${n2} `;
      resultat = n1 + n2;
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
      break;
    default:
      break;
  }
}

// Clique sur Calcul mental
function clique_calcul_mental_function(niveau, note, question) {
  tableau.innerHTML = "";
  console.log(`calcul mental, niveau ${niveau}`);
  let consigne = document.createElement("p");
  tableau.appendChild(consigne);
  consigne.innerHTML = consigneCalculMental;
  consigne.className = "consigne";

  // Bouton Commencer
  let bouton_commencer = document.createElement("button");
  bouton_commencer.textContent = "Commencer";
  bouton_commencer.className = "btn btn-danger bouton_commencer";
  tableau.appendChild(bouton_commencer);
  bouton_commencer.addEventListener("click", () => {
    console.log("yes");
    calcul_mental_function(niveau, note, question);
  });
}

// Fonction Calcul mental
function calcul_mental_function(niveau, note, question) {
  //

  //
  tableau.innerHTML = "";
  let numero_operation = Math.floor(Math.random() * 3);

  niveauFunction(niveau);
  operationFunction(numero_operation, niveau);

  // fonction calcul mental
  // Créer Div titre et score
  let titreAndScore = document.createElement("div");
  titreAndScore.className = "titreAndScore";

  // Créer h2 Titre
  let titre = document.createElement("h2");
  titre.textContent = " Calcul mental";

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
