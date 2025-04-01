function isPalindrome(mot) {
    if (  mot.split('').reverse('').join('') == mot ) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("radar")); // Output attendu : true