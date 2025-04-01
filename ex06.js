function printMultiples(nombre) {
    for ( let i = 0; i < nombre; i++) {
        if ( i % 3 == 0 ) {
            console.log(i)
        }
    }
}
printMultiples(10); // Output attendu : 3, 6, 9
