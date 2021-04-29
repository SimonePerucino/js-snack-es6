/*Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/


/*const listaSquadre = [
    { nome: "Juve", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Italia", punti: 0, falliSubiti: 0 },
]
for (let i = 0; i < listaSquadre.length; i++) {
    const element = listaSquadre[i];

    element.punti = risultatoRandom;
    element.falliSubiti = risultatoRandom;

}


let numeroRandom = () => Math.floor(Math.random() * 21);
let risultatoRandom = numeroRandom();

const element = listaSquadre[0]



console.log(element.falliSubiti, element.punti);*/

const listaSquadre = [
    { nome: "Juve", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Italia", punti: 0, falliSubiti: 0 },
]

const nomiFalli = []

for (let i = 0; i < listaSquadre.length; i++) {
    const element = listaSquadre[i];
    const numeroRandom = () => Math.floor(Math.random() * 21);
    const risultatoRandom = numeroRandom();
    element.punti = risultatoRandom;
    element.falliSubiti = risultatoRandom;
    const { nome, falliSubiti } = element;
    nomiFalli.push(nome);
    nomiFalli.push(falliSubiti);

}

console.log(nomiFalli);












