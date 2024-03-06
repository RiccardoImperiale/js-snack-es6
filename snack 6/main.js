// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const footballTeams = [
    { teamName: 'Italy', poinsMade: 0, foulsDrawn: 0 },
    { teamName: 'Spain', poinsMade: 0, foulsDrawn: 0 },
    { teamName: 'France', poinsMade: 0, foulsDrawn: 0 },
    { teamName: 'England', poinsMade: 0, foulsDrawn: 0 },
    { teamName: 'Germany', poinsMade: 0, foulsDrawn: 0 },
    { teamName: 'Argentina', poinsMade: 0, foulsDrawn: 0 },
    { teamName: 'Netherlands', poinsMade: 0, foulsDrawn: 0 },
    { teamName: 'Mexico', poinsMade: 0, foulsDrawn: 0 },
    { teamName: 'Colombia', poinsMade: 0, foulsDrawn: 0 },
    { teamName: 'Japan', poinsMade: 0, foulsDrawn: 0 },
];

/* 
// SOLUTION 1
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
const teams = footballTeams.map(team => {
    const randNumPoints = Math.floor(Math.random() * 50);
    const randNumFouls = Math.floor(Math.random() * 10);
    return {...team, poinsMade: randNumPoints, foulsDrawn: randNumFouls};
});
*/

// SOLUTION 2
footballTeams.forEach(team => {
    const randNumPoints = Math.floor(Math.random() * 50);
    const randNumFouls = Math.floor(Math.random() * 10);
    team.poinsMade = randNumPoints;
    team.foulsDrawn = randNumFouls;
});

// creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// Infine usando la destrutturazione 
const teamsFouls = footballTeams.map(team => {
    const { teamName, foulsDrawn } = team;
    return { teamName, foulsDrawn };
});

console.log(teamsFouls);

// BONUS Stampare in pagina oltre che in console!
teamsFouls.forEach(team => {
    const { teamName, foulsDrawn } = team;
    const liMarkup = `<li>The ${teamName} team suffered ${foulsDrawn} fouls</li>`;
    document.querySelector('ul').insertAdjacentHTML('beforeend', liMarkup);
});