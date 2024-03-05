// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
const people = [
    {
        firstName: "Mario",
        lastName: "Rossi",
        age: 30
    },
    {
        firstName: "Giulia",
        lastName: "Bianchi",
        age: 9
    },
    {
        firstName: "Luca",
        lastName: "Verdi",
        age: 35
    },
    {
        firstName: "Anna",
        lastName: "Ferrari",
        age: 18
    },
    {
        firstName: "Marco",
        lastName: "Russo",
        age: 28
    },
    {
        firstName: "Sara",
        lastName: "Colombo",
        age: 15
    },
    {
        firstName: "Paolo",
        lastName: "Galli",
        age: 32
    },
    {
        firstName: "Laura",
        lastName: "Conti",
        age: 22
    },
    {
        firstName: "Simone",
        lastName: "Costa",
        age: 10
    },
    {
        firstName: "Alessia",
        lastName: "Mancini",
        age: 11
    }
];
// Crea quindi un nuovo array inserendo,  
// per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

// filter only people who are more than 18
const peopleOfAge = people.filter(person => person.age >= 18);
// for each person of age make an array indicating that they can drive
const peopleDriving = peopleOfAge.map(person => `${person.firstName} ${person.lastName} is old enough to drive.`);

console.log(peopleDriving);