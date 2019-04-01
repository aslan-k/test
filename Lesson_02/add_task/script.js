let week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

document.write(`<p> ${week[0].italics()} </p>`);
for(let i = 1; i < week.length; i++) {
    (i == week.length-1 || i == week.length-2) ? document.write(`<p> ${week[i].bold()} </p>`) : 
    document.write(`<p> ${week[i]} </p>`);
}

let arr = ["2456", "3451", "9005", "7634", "1234", "3156", "7890"];

for(let i = 0; i < arr.length; i++) {
    (arr[i].charAt(0) == "3" || arr[i].charAt(0) == "7") ? console.log(arr[i]) : "";
}