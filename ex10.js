function genererDescriptions(nom) {
    let tableau = []
    for ( let i = 0; i < nom.length; i++) {
        let phrase = nom[i].nom + " a " + nom[i].age + " ans."
        tableau.push(phrase)
    }
    return tableau
}

console.log(genererDescriptions([{nom: "Alice", age: 25}, {nom: "Bob", age: 30}])); 
// Résultat attendu : ["Alice a 25 ans.", "Bob a 30 ans."]