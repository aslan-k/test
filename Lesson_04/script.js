"use strict";

let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time  = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();
 
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    сhooseExpenses: function() {
        for(let i = 0; i < 2; i++) {
            let a  = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b  = prompt("Во сколько обойдется?", "");
            
            if( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
               && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка!");
        }
    },
    checkSavings: function() {
        if(appData.saving == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = prompt("Под какой процент?", "");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);    
        }
    },
    chooseOptExpenses: function() {
        for(let i = 1; i < 4; i++) {
            let optExpenses  = prompt("Статья необязательных расходов?", "");
    
            if( (typeof(optExpenses)) === "string" && (typeof(optExpenses)) != null
               && optExpenses != ""){
                console.log("done");
                appData.optionalExpenses[i] = optExpenses;
               } else {
                console.log("Неверный ввод! Поторите.");
                i = i - 1;    
            }
        }
    },
    chooseIncome: function() {
        for(let i = 0; i < 1; i++) {

            let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");

            if( (typeof(items)) === "string" && (typeof(items)) != null && items != "") {  
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то ещё?"));
            appData.income.sort();
            } else {
                console.log("Неверный ввод! Поторите.");
                i = i - 1;    
            }
        }

// ДЗ Lesson_04
        for(let i = 0; i < 1; i++) {

            let addIncome = prompt("Способы доп. заработка: (Перечислите через запятую)", ""),
            arr = [];
     
            if( (typeof(addIncome)) === "string" && (typeof(addIncome)) != null && addIncome != "") {
                arr.push(addIncome);
                arr = addIncome.split(", ");
                arr.sort();   
            } else {
                console.log("Неверный ввод! Поторите.");
                i = i - 1;    
            }
            console.log("Способы доп. заработка:"); 

            arr.forEach(function(item, i) {   
            console.log(i+1 + ": " + item);
            });
        }       
    }
};

for(let key in appData) {
    console.log("Наша программа включает в себя данные: "+ key + appData[key]);
}























