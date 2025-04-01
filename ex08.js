function ajouterPrefixe(nom) {
    let tableau = []

    for (let i = 0; i < nom.length; i++ ) {
        let phrase = "M./Mme " + nom[i]
        tableau.push(phrase)
    }
    return tableau
}

console.log(ajouterPrefixe(["Alice", "Bob"])); // Résultat attendu : ["M./Mme Alice", "M./Mme Bob"]