let clique = document.getElementById('clique');
let entrainementDiv = document.getElementById('entrainement')

// Cliquer sur entrainement
clique.addEventListener('click', () => {
    entrainer()
})

// Message

let messageP = document.getElementById('message')

// Fonction du clique entrainement
function entrainer() {
    
    entrainementDiv.classList.toggle("entrainement")
    if (entrainementDiv.className = 'entrainement') {
        clique.textContent = 'Recommencer '
        messageP.textContent = "Pose ton opération puis clique sur SOLUTION pour te corriger."
        let number1 = Math.trunc(Math.random(100, 1000) * 10000)
        let number2 = Math.trunc(Math.random(100, 1000) * 10000);
        entrainementDiv.innerHTML =
          number1 +
          " + " +
          number2 +
          " = " +
          '<span> <button type="button" class="btn btn-dark solution">Solution</button></span>';
        let solution = document.querySelector(".solution");
        solution.addEventListener('click', () => {
        solution.textContent = number1 + number2
        })
    
}
}

