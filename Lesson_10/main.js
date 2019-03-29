window.addEventListener("DOMContentLoaded", () => {

    "use strict";

    let tab        = document.querySelectorAll(".info-header-tab"),
        info       = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }
    hideTabContent(1);
        
    function showTabContent(b) {
        if(tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }

    info.addEventListener("click", event => {
        let target = event.target;
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
let deadline = "2019-03-27";

function getTimeRemaining(endtime) {
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

function setClock(id, endtime) {
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

        if(t.hours < 10){
            hours.textContent = `0 ${t.hours}`;
        }
        if(t.minutes < 10){
            minutes.textContent = `0 ${t.minutes}`;
        }
        if(t.seconds < 10){
            seconds.textContent = `0 ${t.seconds}`;
        }

        if(t.total <= 0) {
            clearInterval(timeInterval);
        }
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











