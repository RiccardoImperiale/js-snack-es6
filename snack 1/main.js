// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: 
// marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
const automobiles = [
    {
        brand: 'ford',
        model: 'fiesta',
        fuel: 'diesel'
    },
    {
        brand: 'ford',
        model: 'mustang',
        fuel: 'benzina'
    },
    {
        brand: 'ferrari',
        model: '360 Modena',
        fuel: 'diesel'
    },
    {
        brand: 'tesla',
        model: 'serieX',
        fuel: 'elettrico'
    },
    {
        brand: 'renault',
        model: '106',
        fuel: 'elettrico'
    },
    {
        brand: 'toyota',
        model: 'corolla',
        fuel: 'metano'
    },
    {
        brand: 'bugatti',
        model: 'chiron',
        fuel: 'benzina'
    }
];

// Dividi le automobili in 3 array separati: 
// nel primo array solo le auto a benzina, 
const firstArray = automobiles.filter(auto => auto.fuel === 'benzina');
// nel secondo solo le auto a diesel, 
const secondArray = automobiles.filter(auto => auto.fuel === 'diesel');
// nel terzo il resto delle auto.
const thirdArray = automobiles.filter(auto => auto.fuel !== 'benzina' && auto.fuel !== 'diesel');

// Infine stampa separatamente i 3 array.
console.log(firstArray);
console.log(secondArray);
console.log(thirdArray);