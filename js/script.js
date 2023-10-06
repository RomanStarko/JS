///let number = 5;
//const leftBorderWidth = 1;

//number = 10;
//console.log(number);

//const obj = {
//   a: 50
//};

//obj.a = 10;

//console.log(obj);

//const vehicleBodyWidth = 5000, vehicleBodylength = 4000;

//console.log("Ширина кузову автомбіля: " + vehicleBodyWidth + ', довжина: ' + vehicleBodylength );

//['vdfsdf', 'dfdsdf', 'dfdsfgd'].map(a => )

//snake_case
//UPPER_SNAKE_CASE
//Kebab-case
//PscalCase

//const COLOR_RED = '#F00'

////const userName = "John";
//let userNumber = 25;
//userNumber = 24;

//number
//let number = 4.6;

//console.log(4/0);
///console.log('sring' * 9);

//string
//const persone = "Alex";

"use strict";
/*
const a = 15, b = 3;

console.log(`Alex: ${a + b} years old`);

console.log(something);

let und;
console.log(und);
//Об'єкт
const obj = {
    name: "Jon",
    age: 25,
    isMarried: false
};
//Два варіанти як добратися до властивостей об'єкта - через крапку
console.log(obj.name);
//Через скобки
console.log(obj["name"])

//Масив даних (array),а також як витягнути знього дані
let arr = ["plum.png", "orange.jpg", 6, "apple.bmp"];
console.log(arr[1]);

const arr = [1, 2, 3];

console.log(arr[1]);

//const obj = {a: 1, b: 2};
const obj = {
    Anna: 500,
    Alice: 800
}
//створення нового елемента в об'єкті,посилаючись на ще не створеному елементі (Два варіанти як це зробити)
const arr = ['a', 'b', 'c'];
const arrObj = {
    a: 'a',
    '1': 'b',
    2: 'c'
}
const b = 'b';

//arrObj.b = '1234'
arrObj['b'] - '1234';

console.log(arrObj['b']);
console.log(arrObj.b);


const arr = ['a', 'b', 'c'];
const arrObj = {
    a: 'a',
    '1': 'b',
    2: 'c'
    abc: {
        df: [{}, {}]
        def: {

        }
    }
}
const b = 'b';

//arrObj.b = '1234'
arrObj['b'] - '1234';

console.log(arrObj['b']);
console.log(arrObj.b);
*/

//const result = confirm("Are u here?");
//console.log(result);

//const answer = +prompt("Вам є 18", "18");
//console.log(answer + 5);
/*
const answers = [];

answers[0] = prompt('Яке ваше імя?', '');
answers[1] = prompt('Яке ваше прізвище?', '');
answers[2] = prompt('Скільки вам років?', '');

document.write(answers);
*/
/*
const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = "Ivsnini"

alert(`Wassup, ${user}`)*/

//Оператори
/*console.log('arr' + " - object");
console.log( 4 + " - object"); */
//Чим відрізняється префіксна (++incr) форма від постфіскної форми(incr++)

let incr = 10,//Якщо стоїть один знак = то це присвоєння якогось значення (надання)
    decr = 10;

incr++;  /*Оператор інкрімента,що збільшує на одиничку*/
decr--; /*зменшує на одиницю*/

console.log(incr);
console.log(decr);

console.log(5%2);

console.log(2*4 == 8);// == це знак рівності,тоб то чи 2 помножити на 4 буде дорівнювати 8
console.log(2*4 === '8');// три знаки === це вже строге порівняння
//ЛОігчні оператори && i ||

const isChecked = true,
    isClose = true;

console.log(isChecked && isClose);
//Оператор && (i) повертає значення True тільки якщо обидва значення правильні.

const isChecked = true,
    isClose = false;

console.log(isChecked || isClose);
//Оператор || (або) повертає значення True якщо хочаб одне значення True.


const isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);
//Oператор заперечення (!) Якщо була правда,то він змінює її на брехню і навпаки.

//Порядок виконання операторів
console.log(2 + 2 * 2 === 8);
// !=  знак,що означає "не дорівнює"

console.log(2 + 2 * 2 !== '6');
// !== строге порівння по типу. буде FTrue Тому що 6 що утворюється на початку являється числовим типом,а 6 справ у вигляді строки