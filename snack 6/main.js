// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const racingBicycles = [
    { modelName: 'Specialized Tarmac SL7', weight: 6.7 },
    { modelName: 'Trek Madone SLR', weight: 7.1 },
    { modelName: 'Canyon Ultimate CF SLX', weight: 6.8 },
    { modelName: 'Pinarello Dogma F12', weight: 6.9 },
    { modelName: 'BMC Teammachine SLR01', weight: 6.2 },
    { modelName: 'Giant TCR Advanced Pro', weight: 7 },
    { modelName: 'Cannondale SuperSix EVO', weight: 6.8 },
    { modelName: 'Scott Addict RC', weight: 6.5 },
    { modelName: 'Bianchi Oltre XR4', weight: 7.2 },
    { modelName: 'Merida Reacto Disc Team', weight: 7.1 }
];

/* 
// SOLUTION 1
let lighterBicycleWeight = Infinity;
racingBicycles.forEach(bicycle => bicycle.weight < lighterBicycleWeight ? lighterBicycleWeight = bicycle.weight : lighterBicycleWeight);
const lighterBicycle = racingBicycles.filter(bicycle => bicycle.weight === lighterBicycleWeight && bicycle);
// Stampare in console la bici con peso minore utilizzando destructuring e template literal
let { modelName, weight } = lighterBicycle[0];
console.log(`The lightest racing bicycle is the ${modelName} which weighs just ${weight} kg`);
*/

// SOLUTION 2
let lighterBicycle = { modelName: '', weight: Infinity };
racingBicycles.forEach(bicycle => bicycle.weight < lighterBicycle.weight ? lighterBicycle = bicycle : lighterBicycle);
// Stampare in console la bici con peso minore utilizzando destructuring e template literal
let { model, weight } = lighterBicycle;
console.log(`The lightest racing bicycle is the ${model} which weighs just ${weight} kg`);
