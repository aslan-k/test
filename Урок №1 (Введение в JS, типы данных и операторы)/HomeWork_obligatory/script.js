
"use strict";

var money = prompt("Ваш бюджет на месяц?", "");
console.log(money)

var time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(time)


var appData = {
    budget: money,
    timeData: time,
    isMarried: false
}

var firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", "");
console.log(firstQuestion);
var secondQuestion = prompt("Во сколько обойдется?", "");
console.log(secondQuestion);

expenses: {
    firstQuestion : secondQuestion
    }


/*
3) Создать объект appData, который будет содержать такие данные:

·      бюджет (передаем сюда переменную из п.2)

·      данные времени - timeData (передаем сюда переменную из п.2)

·      объект с обязательными расходами - expenses (смотри пункт 4)

·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)

·      массив данных с доп. доходом - income (оставляем пока пустым)

·      свойство savings (выставляем его как false)
4) Задать пользователю по 2 раза вопросы:

    “Введите обязательную статью расходов в этом месяце”

    “Во сколько обойдется?”

    Записать ответы в объект expenses в формате: 

    expenses: {

    “ответ на первый вопрос” : “ответ на второй вопрос”

    }
*/