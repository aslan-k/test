"use strict";


//переменные, типы данных:
var number = 5;
var string = "hello";
var sym = Symbol(); //редко исользуется 
var boolean = true;
null;//вывод если ссылка на несуществующую вещь
undefined;//вывод переменной с не присвоенным значением

//var obj = {};

let persone = {
    name: "John",
    age: 25,
    isMarried: false
}

console.log(persone.name);// вывод свойства объекта

//другой способ вывода свойства объекта
console.log(persone["name"]);

let arr = ["plum.png", "orange.png", "apple.bmp"];
console.log(arr[2]);

//-----------общение с клиентом................
//alert("я тут") //сообщение в строенном модельном окне
let answer;
//answer = confirm("вам 18?");//да-нет вопрос пользователю
answer = prompt("вам 18?", "");//специальный вопрос пользователю
console.log(answer)

console.log(typeof(arr))
