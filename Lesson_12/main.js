 window.addEventListener("DOMContentLoaded", () => {

    "use strict";
//Tabs
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
let deadline = "2019-04-13";

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
    telNumber: "Некорректный ввод!"
};

let form = document.querySelector(".main-form"),
    inputs = document.getElementsByTagName("input"),
    contactForm = document.querySelector("#form"),
    statusMessage = document.createElement("div");
    statusMessage.classList.add("status");

    document.body.addEventListener('input', (e) => {
        let target = e.target;
        if(target.tagName == "INPUT"){
            target.value = target.value.replace (/[^0-9+]/, '')
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

        function postData() {
            return new Promise(function(resolve,reject) {
                let request = new XMLHttpRequest(),
                    json = JSON.stringify(obj);

                request.open("POST", "server.php");
                request.setRequestHeader("Content-type", "application/json; charset=utf-8");
                
                request.onreadystatechange = function() {
                    if(request.readyState < 4) {
                        resolve()                        
                    } else if(request.readyState === 4 && request.status == 200) {
                        resolve() 
                    } else {
                        reject()
                    }        
                };                             
                request.send(json); 
            });    
        }

        function clearInputs() {
            for(let i = 0; i < inputs.length; i++) { inputs[i].value = ""; }    
        }
        
        postData(formData)
            .then( () => statusMessage.innerHTML = message.loading)
            .then( () => statusMessage.innerHTML = message.success)
            .catch( () => statusMessage.innerHTML = message.failure)
            .then(clearInputs)    
    });
}

sendForm(form);
sendForm(contactForm);




















