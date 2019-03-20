let startBtn = document.getElementById("start"),

    //budgetValue           = document.getElementsByClassName("budget-value"),
    budgetValue           = document.querySelector(".budget-value"),
    //daybudgetValue        = document.getElementsByClassName("daybudget-value"),
    daybudgetValue        = document.querySelector(".daybudget-value"),
    //levelValue            = document.getElementsByClassName("level-value"),
    levelValue            = document.querySelector(".level-value"),
    //expensesValue         = document.getElementsByClassName("expenses-value"),
    expensesValue          = document.querySelector(".expenses-value"),
    //optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
    //incomeValue           = document.getElementsByClassName("income-value"),
    incomeValue           = document.querySelector(".income-value"),
    //monthSavingsValue     = document.getElementsByClassName("monthsavings-value"),
    monthSavingsValue     = document.querySelector(".monthsavings-value"),
    //yearSavingsValue      = document.getElementsByClassName("yearsavings-value"),
    yearSavingsValue      = document.querySelector(".yearsavings-value"),

    expensesItems = document.getElementsByClassName("expenses-item"),

    expensesBtn         = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn            = document.getElementsByTagName("button")[2],

    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),

    income       = document.querySelector("#income"),  
    checkSavings = document.querySelector("#savings"),    
    sumValue     = document.querySelector(".choose-sum"),      
    percentValue = document.querySelector(".choose-percent"),    
    yearValue    = document.querySelector(".year-value"), 
    monthValue   = document.querySelector(".month-value"),
    dayValue     = document.querySelector(".day-value"); 

let money, time, sum = 0;

startBtn.addEventListener("click", function() {
    time  = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");
    
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener("click", function(event) {    
    for(let i = 0; i < expensesItems.length; i++) {

        if(optionalExpensesItem[i].value != undefined && appData.budget != undefined && appData.timeData != undefined){

            let a  = expensesItems[i].value,
                b  = expensesItems[++i].value;
            if( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
               && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
                sum += +b;
                expensesValue.textContent = sum;
            } else {
                i = i - 1;
            }  
        } else {
            event.preventDefault();   //блокировать кнопку "Подтвердить" обязательные расходы
            console.log("Ошибка! Сначала введите нужные данные");
        }    
    }   
});

optionalExpensesBtn.addEventListener("click", function(event) {
    for(let i = 0; i < optionalExpensesItem.length; i++) {
        
        if(optionalExpensesItem[i].value != "" && appData.budget != undefined && appData.timeData != undefined){

            let optExpenses  = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = optExpenses;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";  
        } else {
            event.preventDefault();   //блокировать кнопку "Подтвердить" необязательные расходы
            console.log("Ошибка! Сначала введите нужные данные");
        }        
    }
});

countBtn.addEventListener("click", function(event) {

    if(appData.budget != undefined && appData.timeData != undefined) {

        appData.moneyPerDay = ((appData.budget-sum)/30).toFixed(); //Расчет дневного бюджета
        daybudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if(appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка!";
        }
    } else {
        event.preventDefault();                           //блокировать кнопку "Рассчитать"
        console.log("Ошибка! Сначала определите бюджет");
    }  
});

income.addEventListener("input", function() {
    let items = income.value;                 
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function() {
    if(appData.savings == true) {
        appData.savings == false; 
    } else {
        appData.savings == true;
    }
});

sumValue.addEventListener("input", function() {
    if(appData.savings == true) {
        let sum     = +sumValue.value,
            percent = +percentValue.value;
            
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome  = sum/100*percent;
        
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent  = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener("input", function() {
    if(appData.savings == true) {
        let sum     = +sumValue.value,
            percent = +percentValue.value;
            
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome  = sum/100*percent;
        
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent  = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true //временно на true
};
























