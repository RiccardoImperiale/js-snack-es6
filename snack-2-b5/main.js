// Crea 10 oggetti che rappresentano una zucchina.

const zucchine = [
    { varieta: 'Zucca romanesca', peso: 3, lunghezza: 20 },
    { varieta: 'Zucca trombetta', peso: 2, lunghezza: 43 },
    { varieta: 'Zucca costata', peso: 1, lunghezza: 40 },
    { varieta: 'Zucca rampicante', peso: 2, lunghezza: 4 },
    { varieta: 'Zucchina marion', peso: 2.5, lunghezza: 4 },
    { varieta: 'Zucchina giuseppa', peso: 4, lunghezza: 73 },
    { varieta: 'Zucchina rossa', peso: 0, lunghezza: 37 },
    { varieta: 'Zucchina verde', peso: 3, lunghezza: 63 },
    { varieta: 'Zucchina ice', peso: 10, lunghezza: 33 },
    { varieta: 'Zucchina gaerg', peso: 23, lunghezza: 3 },
]

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
const zucchineMenoDi15 = zucchine.filter(zucchina => zucchina.lunghezza <= 15 && zucchine)
const zucchinePiuDi15 = zucchine.filter(zucchina => zucchina.lunghezza > 15 && zucchine)
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
let pesoZucchineMenoDi15 = 0;
let pesoZucchinePiuDi15 = 0;
zucchineMenoDi15.forEach(zucchina => pesoZucchineMenoDi15 += zucchina.peso);
zucchinePiuDi15.forEach(zucchina => pesoZucchinePiuDi15 += zucchina.peso);

console.log(pesoZucchineMenoDi15);
console.log(pesoZucchinePiuDi15);