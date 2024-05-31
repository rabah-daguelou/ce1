/*let v = "achet"
let i =0
if (v.substring(v.length - 2)=='et' && i==0) {
  console.log(v.substring(0,v.length-2)+'èt');
}*/
let note, numero_question
// Vocabulaire
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Conjugaison
let tableauVerbes = [
  ["Je", "Tu", "Il", "Elle", "On", "Nous", "Vous", "Ils", "Elles"],
  ["suis", "es", "est", "est", "est", "sommes", "êtes", "sont", "sont"],
  ["ai", "as", "a", "a", "a", "avons", "avez", "ont", "ont"],
    ["e", "es", "e", "e", "e", "ons", "ez", "ent", "ent"],
   // ["préparer", "fêter", "arrêter", "passer", "rester", "ajouter", "porter", "ennuyer", "parler", "danser", "rentrer", "inviter", "jouer", "sembler", "détester", "promener", "aider", "marcher", "montrer", "coucher", "chanter", "rencontrer", "attraper", "prêter", "penser", "rouler", "glisser", "pousser", "gagner", "laisser", "répéter", "tomber", "aimer", "voler", "appuyer", "avancer", "voyager", "essayer", "garder", "bouger", "regarder", "étudier", "placer", "élever", "chercher", "accepter", "exister", "décider", "commencer", "fermer", "ressembler", "entrer", "quitter","acheter","rêver", "tourner", "appeler", "envoyer", "présenter", "frapper", "demander", "continuer", "écouter", "retrouver", "trouver", "nager", "retourner", "emmener", "payer", "compter", "lever", "refuser", "habiter", "occuper", "préférer", "tromper", "crier", "amener", "deviner", "travailler", "téléphoner", "couper", "monter", "sauver", "pleurer", "apporter", "essuyer", "nommer", "jeter", "expliquer", "raconter", "espérer", "donner", "respirer", "manquer", "inquiéter", "manger", "oublier", "coller", "toucher",],
    ["acheter"]
];
let reponse;
//

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
function clique(matiere, niveau, numero_question, note) {
    divTitre.innerHTML=''
    tableau.innerHtml = "";

    titre.textContent = `S'entrainer en ${matiere}`;
    tableau.appendChild(titre);
    tableau.appendChild(consigne);
    tableau.appendChild(boutonCommencer);

    // Ecouter le bouton Commencer
    boutonCommencer.addEventListener("click", () => {
        consigne.remove()
        titre.remove()
        boutonCommencer.remove()

        tableau.appendChild(titre);
        tableau.appendChild(divTitre);
        divTitre.appendChild(titre1);
        divTitre.appendChild(divScore);
        divScore.appendChild(score);

        titre.textContent = `S'entrainer en ${matiere}`;
        titre1.textContent = `Niveau:${niveau}`;
        score.textContent = `Note: ${note} / ${numero_question}`;
        switch (matiere) {
            case "vocabulaire":
                switch (niveau) {
                  case "CP/CE1":
                    vocabulaire1(matiere, niveau, note, numero_question);
                    break;
                  case "CE2/CM1":
                    vocabulaire2(matiere, niveau, note, numero_question);
                    break;
                  case "CM2/6e":
                    vocabulaire3(matiere, niveau, note, numero_question);
                    break;
                  default:
                    break;
                }
                break;
            case "grammaire":
                switch (niveau) {
                  case "CP/CE1":
                    grammaire1(matiere, niveau, note, numero_question);
                    break;
                  case "CE2/CM1":
                    grammaire2(matiere, niveau, note, numero_question);
                    break;
                  case "CM2/6e":
                    grammaire3(matiere, niveau, note, numero_question);
                    break;
                  default:
                    break;
                }
                break;
            
            // Conjugaison
            case "conjugaison":
                switch (niveau) {
                  case "CP/CE1":
                    conjugaison1(matiere, niveau, note, numero_question);
                    break;
                  case "CE2/CM1":
                    conjugaison2(matiere, niveau, note, numero_question);
                    break;
                  case "CM2/6e":
                    conjugaison3(matiere, niveau, note, numero_question);
                    break;
                  default:
                    break;
                }
                break;
            // Orthographe
            case "orthographe":
                switch (niveau) {
                  case "CP/CE1":
                    orthographe1(matiere, niveau, note, numero_question);
                    break;
                  case "CE2/CM1":
                    orthographe2(matiere, niveau, note, numero_question);
                    break;
                  case "CM2/6e":
                   orthographe3(matiere, niveau, note, numero_question);
                    break;
                  default:
                    break;
                }
                break;
            default:
                break;
        }
    })
}

// Fonctions vocabulaire()
// 1- CP/CE1
const vocabulaire1= function(matiere, niveau, numero_question, note) {
    console.log(matiere, niveau);

}
// 2- CE2/CM1
const vocabulaire2 = function(matiere, niveau, numero_question, note) {
  console.log(matiere, niveau);
}
// 3- CM2/6e
const vocabulaire3 = function(matiere, niveau, numero_question, note) {
  console.log(matiere, niveau);
}
// Fin vocabulaire

// Fonctions grammaire()
// 1- CP/CE1
const grammaire1 = function(matiere, niveau, numero_question, note) {
    console.log(matiere, niveau);

}
// 2- CE2/CM1
const grammaire2 = function(matiere, niveau, numero_question, note) {
  console.log(matiere, niveau);
}
// 3- CM2/6e
const grammaire3 = function(matiere, niveau, numero_question, note) {
  console.log(matiere, niveau);
}
// Fin vocabulaire

/// Fonctions conjugaison() ///
    let formulaire = document.createElement("form");
// 1- CP/CE1
const conjugaison1 = function(matiere, niveau, numero_question, note, verbe) {
    let divBoutons = document.createElement("div");
    divBoutons.className = 'divBoutons'
    let btnEtrePresent = document.createElement('button')
    let btnAvoirPresent = document.createElement("button");
    let btnGroupe1Present = document.createElement("button");

    btnEtrePresent.textContent = "Etre"
    btnEtrePresent.className = 'btn btn-success'
    btnAvoirPresent.textContent = "Avoir";
    btnAvoirPresent.className = "btn btn-danger";
    btnGroupe1Present.textContent = "1er groupe"
    btnGroupe1Present.className = "btn btn-primary";

    tableau.appendChild(divBoutons)
    divBoutons.appendChild(btnEtrePresent)
    divBoutons.appendChild(btnAvoirPresent);
    divBoutons.appendChild(btnGroupe1Present);

    // Ecouter les boutons
    btnEtrePresent.addEventListener('click', () => {
        btnEtrePresent.toggleAttribute.disabled
        score.textContent = `Note: ${note} / ${numero_question}`;
        formulaire.innerHTML = ''
        note = 0
        numero_question = 0
        let numeroVerbe = 1
        verbe = 'Etre'
        formulaireConjugaisonFunction(matiere, niveau, numero_question, note, numeroVerbe, verbe);
    })
    btnAvoirPresent.addEventListener("click", () => {
        btnAvoirPresent.toggleAttribute.disabled=true
        score.textContent = `Note: ${note} / ${numero_question}`;
        formulaire.innerHTML = "";
        note = 0;
        numero_question = 0;
        let numeroVerbe = 2;
        verbe = "Avoir";
        formulaireConjugaisonFunction(
          matiere,
          niveau,
          numero_question,
          note,
          numeroVerbe,
          verbe
        );
    
    });
    btnGroupe1Present.addEventListener("click", () => {
        btnGroupe1Present.toggleAttribute.disabled
        score.textContent = `Note: ${note} / ${numero_question}`;
        formulaire.innerHTML = "";
        note = 0;
        numero_question = 0;
        let numeroVerbe = 3;
        formulaireConjugaisonFunction(
          matiere,
          niveau,
          numero_question,
          note,
          numeroVerbe,
          verbe= choixVerbe()
        );
    });
}
const formulaireConjugaisonFunction = function (matiere, niveau,numero_question,note,numeroVerbe, verbe) {
  
    tableau.appendChild(formulaire);
    let consigne = document.createElement('h5')
    consigne.textContent=`Je conjugue le verbe ${verbe} au présent.`
    formulaire.appendChild(consigne)
    
  for (let i = 0; i < tableauVerbes[0].length; i++) {
    let divQuestion = document.createElement("div");
    let labelPronom = document.createElement("label");
    let inputEtrePresent = document.createElement("input");
    inputEtrePresent.setAttribute("required", "true");
    inputEtrePresent.className = "inputEtrePresent";
    formulaire.appendChild(divQuestion);
    divQuestion.appendChild(labelPronom);
    divQuestion.appendChild(inputEtrePresent);
    labelPronom.textContent = tableauVerbes[0][i];
  }
  // Bouton valider
  let divBoutonValider = document.createElement("div");
  formulaire.appendChild(divBoutonValider);

  let boutonValider = document.createElement("button");
  divBoutonValider.appendChild(boutonValider);
  boutonValider.textContent = "Valider";
  boutonValider.className = "valider btn btn-success";

  // Ecouter le bouton Valider
    formulaire.addEventListener("submit", (e) => {
      boutonValider.disabled=true
    let mesInput = document.getElementsByClassName("inputEtrePresent");
      
      if (numeroVerbe < 3) {
          reponse = ''
      } else {
          reponse = verbe.substring(0, verbe.length - 2);
            console.log(reponse);
      }
        
        for (let i = 0; i < tableauVerbes[numeroVerbe].length; i++) {
          mesInput[i].value = mesInput[i].value.toLowerCase();
          // Exception verbes en ger
          if (reponse.charAt(reponse.length - 1) == "g" && i == 5) {
            reponse = reponse + "e";
          }
          // Exception verbes en cer
          if (reponse.charAt(reponse.length - 1) == "c" && i == 5) {
            reponse = reponse.substring(0, reponse.length - 1) + "ç";
          }
          // Exception verbes en yer
            if (reponse.charAt(reponse.length - 1) == "y") {
              switch (i) {
                case 0||1||2||3||4||7||8:
                    reponse.charAt(reponse.length - 1) == "i"
                    break;
                  default:
                      reponse.charAt(reponse.length - 1) == "y"
                    break;
              }
          } 
          // Exception jeter / appeler

          if (reponse == "jet") {
            reponse = "jett";
          }
          if (reponse == "appel") {
            reponse = "appell";
          }

          // Exception en eter
          if (reponse.substring(reponse.length - 2) == "et") {
            if (i < 5 || i > 6) {
              reponse = reponse.substring(0, reponse.length - 2) + "èt";
            }
          }
          if (reponse.substring(reponse.length - 2) == "èt") {
            if (i == 5 || i == 6) {
              reponse = reponse.substring(0, reponse.length - 2) + "et";
            }
          }
          
          // Tester les réponses
          if (mesInput[i].value == reponse + tableauVerbes[numeroVerbe][i]) {
            mesInput[i].style.background = "green";
            note++;
            numero_question++;
            score.textContent = `Note: ${note} / ${numero_question}`;
          } else {
            mesInput[i].style.background = "red";
            numero_question++;
            score.textContent = `Note: ${note} / ${numero_question}`;
            console.log("Mauvaise réponse");
          }
        }
      
    e.preventDefault();
  });
};

// 2- CE2/CM1
const conjugaison2 = function(matiere, niveau, numero_question, note) {
  console.log(matiere, niveau);
}

// 3- CM2/6e
const conjugaison3 = function(matiere, niveau, numero_question, note) {
    console.log(matiere, niveau);
}
// Fin Conjugaison

// Fonction orthographe()
// 1- CP/CE1
const orthographe1 = function(matiere, niveau, numero_question, note) {
    console.log(matiere, niveau);
}
// 2- CE2/CM1
const orthographe2 = function(matiere, niveau, numero_question, note) {
  console.log(matiere, niveau);
}
// 3- CM2/6e
const orthographe3 = function(matiere, niveau, numero_question, note) {
  console.log(matiere, niveau);
}
// Fin orthographe

let verbesGroupe1 = [ "préparer", "passer", "rester", "ajouter", "porter", "parler", "danser", "rentrer", "inviter", "jouer", "sembler", "détester", "aider", "marcher", "montrer", "coucher","chanter", "rencontrer", "attraper", "penser", "rouler", "glisser", "pousser","gagner", "laisser", "tomber","aimer", "voler", "garder", "regarder", "étudier", "chercher", "accepter", "exister", "décider", "fermer", "ressembler", "entrer","quitter", "tourner", "présenter", "frapper","demander", "continuer", "écouter", "retrouver","trouver", "retourner", "emmener","compter", "refuser","habiter", "occuper", "tromper","crier", "amener", "deviner", "travailler","téléphoner", "couper", "monter", "sauver","pleurer", "apporter", "nommer","expliquer", "raconter", "donner", "respirer", "manquer", "oublier", "toucher"]
// Fonction radical

let choixVerbe = function () {
    let choix = Math.floor(Math.random(0, verbesGroupe1.length-1) * verbesGroupe1.length)
    console.log(choix)
    verbe = verbesGroupe1[choix]
    return verbe
}
 






