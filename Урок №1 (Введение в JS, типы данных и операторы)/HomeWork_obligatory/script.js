"use strict";

var money = prompt("Ваш бюджет на месяц?", "");
console.log(money);

var time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(time);

var firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", "");
console.log(firstQuestion);
var secondQuestion = prompt("Во сколько обойдется?", "");
console.log(secondQuestion);

var appData = {
    budget: money,
    timeData: time,
    expenses: {
        firstQuestion : secondQuestion
        },
    optionalExpenses: {},
    income: [],
    saving: false
};
console.log("Бюджет за один день:" + appData.budget/30);


    

