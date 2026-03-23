const reponsesMath = ["12", "4", "9", "16", "10", "18", "50", "5", "16", "50"];
const reponsesConju = ["mange", "finis", "parle", "sommes", "avez", "chantent", "joue", "allons", "es", "finissent"];

let fautesM = new Array(10).fill(0);
let fautesC = new Array(10).fill(0);

function verifierMath() {
    for (let i = 0; i < 10; i++) {
        let saisie = document.getElementById("m" + i).value;
        
        tester(saisie, reponsesMath[i], "rsm" + i, i, fautesM);
    }
}

function verifierConju() {
    for (let i = 0; i < 10; i++) {
        let saisie = document.getElementById("c" + i).value.toLowerCas
        tester(saisie, reponsesConju[i], "rsc" + i, i, fautesC);
    }
}

function tester(saisie, bonneRep, idSymbole, index, tabErreurs) {
    let baliseB = document.getElementById(idSymbole);
    
    if (saisie === bonneRep) {
        baliseB.innerText = "V ✅";
        baliseB.style.color = "green";
    } else if (saisie !== "") {
        tabErreurs[index]++;
        
        if (tabErreurs[index] === 1) {
            baliseB.innerText = "Try! 🧐";
            baliseB.style.color = "orange";
        } else {
            baliseB.innerText = "X (" + bonneRep + ") ❌";
            baliseB.style.color = "red";
        }
    }
}
