/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/

const listaBici = [
    { nome: "graziella", peso: 8 },
    { nome: "campagnolo record", peso: 5 },
    { nome: "graziella pro", peso: 4 }
]
let biciLeggera= ""
let pesoMinore = listaBici[0].peso

for (let i = 0; i < listaBici.length; i++) {
    let element = listaBici[i];
    let peso = element.peso
    if (peso < pesoMinore) {
        pesoMinore = peso
        biciLeggera = element
    } 
}

const {nome, peso} = biciLeggera



console.log(`la bici più leggera è: ${nome} e pesa : ${peso} kg`)

