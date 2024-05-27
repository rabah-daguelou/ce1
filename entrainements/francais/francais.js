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
                vocabulaire(matiere, niveau, numero_question, note);
                break;
            case "grammaire":
                grammaire(matiere, niveau, numero_question, note);
                break;
            case "conjugaison":
                conjugaison(matiere, niveau, numero_question, note);
                break;
            case "orthographe":
                orthographe(matiere, niveau, numero_question, note);
                break;
            default:
                break;
        }
    })
}
/*
// Fonction choix domaine
function choixMatiere(matiere, niveau, numero_question, note) {
  tableau.innerHtml = "";
  titre.textContent = `S'entrainer en ${matiere}`;
    titre1.textContent = `Niveau:${niveau}`;
    divTitre.appendChild(titre1);
  tableau.appendChild(titre);
  tableau.appendChild(consigne);
  tableau.appendChild(boutonCommencer);

  // Ecouter le bouton Commencer
  
*/
// Fonction vocabulaire()
function grammaire(matiere, niveau, numero_question, note) {
    console.log(matiere);
}
// Fin vocabulaire

// Fonction grammaire()
function grammaire(matiere, niveau, numero_question, note) {
   console.log(matiere);
    /* tableau.innerHtml = "";
    tableau.appendChild(titre);
    tableau.appendChild(divTitre);
    divTitre.appendChild(titre1);
    divTitre.appendChild(divScore);
    divScore.appendChild(score);
    
    titre.textContent = `S'entrainer en ${matiere}`;
    titre1.textContent = `Niveau:${niveau}`;
    score.textContent = `Note: ${note} / ${numero_question}`;
*/
}
// Fin grammaire
// Fonction conjugaison()

// Conjugaison
let verbesGroupe1 = [ "préparer", "fêter", "arrêter", "passer","rester", "ajouter", "porter", "ennuyer","parler", "danser", "rentrer", "inviter","jouer", "sembler", "détester", "promener","aider", "marcher", "montrer", "coucher","chanter", "rencontrer", "attraper", "prêter","penser", "rouler", "glisser", "pousser","gagner", "laisser", "répéter", "tomber","aimer", "voler", "appuyer", "avancer","voyager", "essayer", "garder", "bouger","regarder", "étudier", "placer", "élever","chercher", "accepter", "exister", "décider","commencer", "fermer", "ressembler", "entrer","quitter", "acheter", "rêver", "tourner","appeler", "envoyer", "présenter", "frapper","demander", "continuer", "écouter", "retrouver","trouver", "nager", "retourner", "emmener","payer", "compter", "lever", "refuser","habiter", "occuper", "préférer", "tromper","crier", "amener", "deviner", "travailler","téléphoner", "couper", "monter", "sauver","pleurer", "apporter", "essuyer", "nommer","jeter", "expliquer", "raconter", "espérer","donner", "respirer", "manquer", "inquiéter","manger", "oublier", "coller", "toucher"]
let pronomsPersonnels = ["je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles"]

// Fonction radical

let radical = function (choix) {
    choix = Math.floor(Math.random(0, verbesGroupe1.length) * 100)
verbe = verbesGroupe1[choix]
console.log(choix);
    return verbe.substring(0,verbe.length-2)
}
console.log(radical("verbe")); 


function conjugaison(matiere, niveau, numero_question, note) {
 console.log(matiere);
    /* tableau.innerHtml = "";
  titre1.textContent = `S'entrainer en ${matiere}`;
  tableau.appendChild(titre);*/
}
// Fin conjugaison


// Fonction orthographe()
function grammaire(matiere, niveau, numero_question, note) {
console.log(matiere);
}
// Fin orthographe

