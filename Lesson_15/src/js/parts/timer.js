function timer(){
    let deadline = "2019-04-22";

let getTimeRemaining = endtime => {
    let tech = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((tech/1000) % 60),
    minutes = Math.floor((tech/1000/60) % 60),
    hours = Math.floor((tech/(1000*60*60))); 

    if(tech <= 0){
        return {
        "total"  : tech,
        "hours"  : hours = 0,
        "minutes": minutes = 0,
        "seconds": seconds = 0
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
    let timer = document.getElementById(id),
        hours = timer.querySelector(".hours"),
        minutes = timer.querySelector(".minutes"),
        seconds = timer.querySelector(".seconds"),
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
}

export default timer;