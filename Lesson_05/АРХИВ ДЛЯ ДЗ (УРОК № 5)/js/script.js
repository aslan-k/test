let menuItem = document.querySelectorAll(".menu-item"),
    menu     = document.querySelector(".menu"),

    newButton = document.createElement("li"), //создали новый элемент li

    column = document.querySelectorAll(".column"),
    adv    = document.querySelector(".adv"),
    title  = document.querySelector(".title"),

    block    = document.querySelector("#prompt"),
    question = prompt();

    

menu.appendChild(newButton);//добавили новый элемент li
newButton.classList.add("menu-item"); //добавили в новый элемент li класс menu-item
newButton.innerHTML = "Пятый пункт"; //добавить пятый пункт

menu.insertBefore(menuItem[1], menuItem[3]); //Восстановить порядок в меню

document.body.style.background = "url('img/apple_true.jpg')"; //заменить картинку 

title.innerHTML = "Мы продаем только подлинную технику Apple"; //Поменять заголовок

column[1].removeChild(adv); // Удалить рекламу

block.textContent = question;
