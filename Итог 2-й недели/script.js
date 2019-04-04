//---МЕТОДЫ перебора Массивов
// 1) Метод FILTER - фильтрует по каким то критериям
let names = ["Ivan", "Ann", "Voldemart", "Robert"];

//стрел. ф-ция, если только один аргумент то можно без скобок
let shortName = names.filter(name => {
    return name.length < 5;
});
console.log(shortName);

//2) Метод МАР - преобразовывает эл-ты
let answers = ["IvAn", "aNNa", "HeLLO"];

answers = answers.map(item => item.toLowerCase()); //Переводим каждые эл-т масива в нижний регистр
console.log(answers);

// 3) Методы Every and Some - на наличие каких то эл-в в массиве
let arr = [4, "qwe", "aassyy"];
console.log(arr.every(item => typeof(item) === "number")); // false потому что есть эл-т не "number"
console.log(arr.some(item => typeof(item) === "number")); // true потому что хот бы один эл.т "number"

// 4) Метод Reduce - метод сварачивания
let arr1 = [4, 2, 2, 6, 7, 1,];
let res = arr1.reduce((sum, current) => sum + current); // 22, суммирует значения эл-в
console.log(res);