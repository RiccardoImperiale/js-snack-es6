// A partire da un array di stringhe, 
// crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
const strings = ['pipporger', 'PLUTOgrger', 'rraperino'];
const newArray = strings.map(string => string[0].toUpperCase() + string.slice(1).toLowerCase())

console.log(newArray);