"use strict";

let money = prompt("Ваш бюджет на месяц?", ""), 
    time  = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(money);
console.log(time);

let firstQuestion1  = prompt("Введите обязательную статью расходов в этом месяце", ""),
    secondQuestion1 = prompt("Во сколько обойдется?", ""),
    firstQuestion2  = prompt("Введите обязательную статью расходов в этом месяце", ""),
    secondQuestion2 = prompt("Во сколько обойдется?", "");
console.log(firstQuestion1);
console.log(secondQuestion1);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

appData.expenses.firstQuestion1 = secondQuestion1;
appData.expenses.firstQuestion2 = secondQuestion2;

console.log("Бюджет за 1 день:" + appData.budget/30);


    

