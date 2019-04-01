let week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

document.write(`<p> ${week[0].italics()} </p>`);
for(let i = 1; i < week.length; i++) {
    (i == week.length-1 || i == week.length-2) ? document.write(`<p> ${week[i].bold()} </p>`) : 
    document.write(`<p> ${week[i]} </p>`);
}