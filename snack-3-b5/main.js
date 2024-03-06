// Scrivi una funzione che accetti una stringa come argomento 
const reverseString = (word) => {
    // e la ritorni girata (es. Ciao -> oaiC)
    return word.split('').reverse().join('');
}

console.log(reverseString("Ciao")); 