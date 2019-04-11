window.addEventListener("DOMContentLoaded", () => {

    "use strict";

    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    let hideTabContent = a => {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }    
    hideTabContent(1);
        
    let showTabContent = b => {
        if(tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }

    info.addEventListener("click", e => {
        let target = e.target;
        if(target && target.classList.contains("info-header-tab")) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });       
}); 
//   Timer                           
let deadline = "2019-04-03";

let getTimeRemaining = endtime => {
    let tech = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((tech/1000) % 60),
    minutes = Math.floor((tech/1000/60) % 60),
    hours = Math.floor((tech/(1000*60*60))); 

    if(tech <= 0){
        return {
        "total"  : tech,
        "hours"  : hours = 00,
        "minutes": minutes = 00,
        "seconds": seconds = 00
        }
    } else {
        return {
            "total"  : tech,
            "hours"  : hours,
            "minutes": minutes,
            "seconds": seconds
        }
    }
}

let setClock = (id, endtime) => {
    let timer = document.getElementById(id);
        hours = timer.querySelector(".hours"),
        minutes = timer.querySelector(".minutes"),
        seconds = timer.querySelector(".seconds");
        timeInterval = setInterval(updateClock, 1000);
    
    function updateClock() {   
        let t = getTimeRemaining(endtime);

        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

        t.hours < 10 ? hours.textContent = `0${t.hours}`:"";       
        t.minutes < 10 ? minutes.textContent = `0${t.minutes}`:"";
        t.seconds < 10 ? seconds.textContent = `0${t.seconds}`:"";
        t.total <= 0 ? clearInterval(timeInterval): "";   
    } 
}
setClock("timer", deadline);

//    MODAL
let overlay = document.querySelector(".overlay"),
    bindModal = (btn, overlayStatus, overflowStatus) => {
        overlay.style.display = overlayStatus;
        btn.classList.add("more-splash");
        document.body.style.overflow = overflowStatus;
        setTimeout( () => {
            btn.classList.remove("more-splash");
        }, 1500);
    };
document.body.addEventListener("click", e => {
    let target = e.target;

    (target.classList.contains("more") || target.classList.contains("description-btn") ) ? bindModal(target, "block", "hidden") : "";
         
    (target.classList.contains("popup-close") ) ? bindModal(target, "none", "") : "";
});

//    FORM
let message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с Вами свяжемся.",
    failure: "Что-то пошло не так...",
};

let form = document.querySelector(".main-form"),
    inputs = document.getElementsByTagName("input"),
    contactForm = document.querySelector("#form"),
    statusMessage = document.createElement("div");
    statusMessage.classList.add("status");

    document.body.addEventListener('input', (e) => {
        let target = e.target;
        if(target.tagName == "INPUT"){
            if(target == email) {   
                target.value = target.value.replace (/[^a-z@._]/, '')  
            } else {
                target.value = target.value.replace (/[^0-9+]/, '')
            }    
        } 
    });
     
function sendForm(elem) {
    elem.addEventListener("submit", function(e) { 
        e.preventDefault();
        elem.appendChild(statusMessage);

        let formData = new FormData(elem),
            obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
    
        let request = new XMLHttpRequest(),
            json = JSON.stringify(obj);

        request.open("POST", "server.php");
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    
        request.onreadystatechange = function() {
            if(request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success; 
            } else {
                statusMessage.innerHTML = message.failure;
            }        
        };
        request.send(json);

        for(let i = 0; i < inputs.length; i++) { inputs[i].value = ""; }    
        
    });
}
sendForm(form);
sendForm(contactForm);

//  Slider
let slideIndex = 1,
    slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".dot");

showSlides(slideIndex);

function showSlides(n) {

    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = "none");
    dots.forEach(item => item.classList.remove("dot-active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

prev.addEventListener("click", function() {
    plusSlides(-1);
});
next.addEventListener("click", function() {
    plusSlides(1);
});

dotsWrap.addEventListener("click", function(event) {
    for(let i = 0; i < dots.length + 1; i++){
        if(event.target.classList.contains("dot") && event.target == dots[i-1]) {
            currentSlide(i);
        }
    }
});

//   Calc
let persons  = document.querySelectorAll(".counter-block-input")[0],
    restDays = document.querySelectorAll(".counter-block-input")[1],
    
    place = document.getElementById("select"),
    totalValue = document.getElementById("total"), 
    personsSum = 0,
    daysSum = 0,
    total = 0;

totalValue.innerHTML = 0;    

persons.addEventListener("change", function() {
    personsSum = +this.value;
    total = (daysSum + personsSum)*4000;

    if(restDays.value == "" || persons.value == "" || restDays.value[0] == "0" || persons.value[0] == "0") {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});
restDays.addEventListener("change", function() {
    daysSum = +this.value;
    total = (daysSum + personsSum)*4000;

    if(restDays.value == "" || persons.value == "" || restDays.value[0] == "0" || persons.value[0] == "0") {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});
place.addEventListener("change", function() {
    if(restDays.value == "" || persons.value == ""){
        totalValue.innerHTML = 0;
    } else {
        let a = total;
        totalValue.innerHTML = a*this.options[this.selectedIndex].value;
    }
});














