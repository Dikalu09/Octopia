function verifierQuestion(num, solution, idErreur) {
    let reponse = document.getElementById("reponse" + num).value;
    let symbole = document.getElementById("symbole" + num);

    if (reponse == solution) {
        symbole.innerText = "Bravo";
        symbole.style.color = "green";
    } else {
        // Si c'est faux, on augmente le nombre d'erreurs
        erreurs[idErreur] = erreurs[idErreur] + 1;

        if (erreurs[idErreur] == 1) {
            symbole.innerText = "Réessaie !";
            symbole.style.color = "orange";
        } else {
            symbole.innerText = "Perdu : la réponse était " + solution + ".";
            symbole.style.color = "red";
        }
    }
}
