function filtrerElevesGrand(nom) {
    let tableau = []

    for ( let i = 0; i < nom.length; i++) {
        if ( nom[i].age >= 10 ) {
            tableau.push(nom[i])
        }
    }
    return tableau
}

console.log(filtrerElevesGrand([{nom: "Alice", age: 15}, {nom: "Bob", age: 8}, {nom: "Charlie", age: 12}])); 
// Résultat attendu : [{nom: "Alice", age: 15}, {nom: "Charlie", age: 12}]