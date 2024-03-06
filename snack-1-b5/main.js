// Crea un array di 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
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
// Calcola quanto pesano tutte le zucchine.
let pesoZucchine = 0;
zucchine.forEach(zucchina => pesoZucchine += zucchina.peso);

console.log(pesoZucchine);