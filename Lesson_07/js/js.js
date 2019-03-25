
  function clock() {

    let date = new Date(),
        hours = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    } 
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    } 

    document.getElementById("clock").innerHTML = hours + ":" + min + ":" + sec;
    setTimeout("clock()", 1000);
  }
  clock();
