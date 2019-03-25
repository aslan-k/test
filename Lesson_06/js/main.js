let startBtn = document.getElementById("start"),

    budgetValue           = document.getElementsByClassName("budget-value")[0],
    daybudgetValue        = document.getElementsByClassName("daybudget-value")[0],
    levelValue            = document.getElementsByClassName("level-value")[0],
    expensesValue         = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue           = document.getElementsByClassName("income-value")[0],
    monthSavingsValue     = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue      = document.getElementsByClassName("yearsavings-value")[0],

    expensesItems = document.getElementsByClassName("expenses-item"),

    buttons = document.querySelectorAll("button"),

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

let money, time;

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

//Блокировка кнопок
for(let i=0; i<buttons.length-1; i++) { 
    buttons[i].disabled = true;
    buttons[i].style.background = "gray";
}

 //Активация кнопок обязательных расходов
startBtn.addEventListener("click", function() {
    for(let i = 0; i < expensesItems.length; i++) {
    if(i == 1 || i == 3){
        expensesItems[i].addEventListener("input", function() {
            if(expensesItems[i-1].value != "" && expensesItems[i].value != "") {
                buttons[0].disabled = false;
                buttons[0].style.background = "#ffbd75";  
            }
        }); 
    }      
}
});    
expensesBtn.addEventListener("click", function() {
    expensesValue.textContent = "";
    let sum = 0;

    for(let i = 0; i < expensesItems.length; i++) {
        let a  = expensesItems[i].value,
            b  = expensesItems[++i].value;

        if((typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;             
        }          
    }
    appData.sumExpenses = sum;  
    expensesValue.textContent = sum;   
});

// кнопка необязательных расходов активируется если хотя бы одно поле заполнено
startBtn.addEventListener("click", function() {
    for(let i = 0; i < optionalExpensesItem.length; i++) {
        optionalExpensesItem[i].addEventListener("input", function() {
            if(optionalExpensesItem[i].value != "") {
                buttons[1].disabled = false;
                buttons[1].style.background = "#ffbd75";  
            }
        });      
    } 
});
optionalExpensesBtn.addEventListener("click", function() {
    optionalExpensesValue.textContent = "";

    for(let i = 0; i < optionalExpensesItem.length; i++) {
            let optExpenses  = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = optExpenses;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";          
    }
});

startBtn.addEventListener("click", function() {
    buttons[2].disabled = false;
    buttons[2].style.background = "#ffbd75"; 
});
countBtn.addEventListener("click", function(event) {
    if(appData.budget != undefined) {
        
        appData.moneyPerDay = ((appData.budget-appData.sumExpenses)/30).toFixed(); //Расчет дневного бюджета
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
    } 
});

income.addEventListener("input", function() {
    let items = income.value;                 
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function() {
    if(appData.savings == true) {
        appData.savings = false; 
    } else {
        appData.savings = true;
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
    savings: false
};
























