const { readFile } = require('fs');

const fs = require('fs').promises;

async function Vopros() {
    const readFile = (await fs.readFile('./question.txt', 'utf-8'))
        .trim()
        .split('\r\n');

    const otveti = readFile.filter((item, index) => index % 4 !== 0);
    const otveti2 = [
        otveti.slice(0, 3),
        otveti.slice(3, 6),
        otveti.slice(6, 9),
        otveti.slice(9, 12),
        otveti.slice(12, 15),
        otveti.slice(15, 18)
    ];
    const voprosi = readFile
        .filter((item, index) => index % 4 === 0)
        .map((item, index) => [
            item,
            {
                name: otveti2[index][0].slice(0, -1),
                value: otveti2[index][0].slice(-1)
            },
            {
                name: otveti2[index][1].slice(0, -1),
                value: otveti2[index][1].slice(-1)
            },
            {
                name: otveti2[index][2].slice(0, -1),
                value: otveti2[index][2].slice(-1)
            }
        ]);
    console.log(voprosi);
}
Vopros();

async function Vopros2() {
    const readFile = (await fs.readFile('./question.txt', 'utf-8'))
        .trim()
        .split('\r\n');

    const otveti = readFile.filter((item, index) => index % 4 !== 0);
    const otveti2 = [
        otveti.slice(0, 3),
        otveti.slice(3, 6),
        otveti.slice(6, 9),
        otveti.slice(9, 12),
        otveti.slice(12, 15),
        otveti.slice(15, 18)
    ];
    console.log(otveti.slice(0, 3));
    const voprosi = readFile
        .filter((item, index) => index % 4 === 0)
        .map((item, index) => [
            item,
            {
                name: otveti2[index][0].slice(0, -1),
                value: otveti2[index][0].slice(-1)
            },
            {
                name: otveti2[index][1].slice(0, -1),
                value: otveti2[index][1].slice(-1)
            },
            {
                name: otveti2[index][2].slice(0, -1),
                value: otveti2[index][2].slice(-1)
            }
        ]);
   console.log(voprosi);
}
Vopros();

// const vopros = []
// const otvet = []

// const vopros = readFile.filter((el)=>el[])
