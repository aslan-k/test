let start = document.getElementById("start"), //кнопкa "Начать расчет"

//все блоки в правой части программы
    budgetValue           = document.getElementsByClassName("budget-value"),
    daybudgetValue        = document.getElementsByClassName("daybudget-value"),
    levelValue            = document.getElementsByClassName("level-value"),
    expensesValue         = document.getElementsByClassName("expenses-value"),
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    incomeValue           = document.getElementsByClassName("income-value"),
    monthSavingsValue     = document.getElementsByClassName("monthsavings-value"),
    yearSavingsValue      = document.getElementsByClassName("yearsavings-value"),

    expensesItems = document.getElementsByClassName("expenses-item"), //поля(input) c обязательными расходами

    buttons = document.getElementsByTagName("button"), //кнопки “Утвердить” и “Рассчитать”

    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"); //поля необязательных расходов

//Оставшиеся поля:
    income     = document.querySelector("#income"),     //статьи возможного дохода
    savings    = document.querySelector("#savings"),    //чекбокс
    sum        = document.querySelector("#sum"),        //сумма
    percent    = document.querySelector("#percent"),    //процент
    yearValue  = document.querySelector(".year-value"), //год
    monthValue = document.querySelector(".month-value"),//месяц
    dayValue   = document.querySelector(".day-value");  //день