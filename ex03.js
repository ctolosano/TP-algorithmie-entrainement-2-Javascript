function isDivisibleBy3And5(a) {
    if ( a % 5 == 0 || a % 3 == 0 ) {
        return true
    }
}

console.log(isDivisibleBy3And5(15)); // Output attendu : true