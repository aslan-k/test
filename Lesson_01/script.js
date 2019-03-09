"use strict";

let money = prompt("Ваш бюджет на месяц?", ""), time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(money);
console.log(time);

let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", ""),
secondQuestion = prompt("Во сколько обойдется?", "");
let firstQuestion2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
secondQuestion2 = prompt("Во сколько обойдется?", "");
console.log(firstQuestion);
console.log(secondQuestion);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

appData.expenses = {
    firstQuestion : secondQuestion
}

console.log("Бюджет за 1 день:" + appData.budget/30);


    

