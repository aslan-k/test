let num = 33721,
    multiple = 1,
    exp = 1;
let getNum = (n1) => {return n1.toString().split('');}
let arr = getNum(num);

for(let i = 0; i < arr.length; i++) { multiple = multiple*arr[i]; }
console.log(`Произведение цифр: ${multiple}`);    

for(let i = 0; i < 3; i++) { exp = exp*multiple; }
console.log(`В 3 степени: ${exp}`);

let getTwoNum = (n2) => {return n2.toString().split('', 2);} 
console.log(`Первые 2 цифры: ${getTwoNum(exp)}`);
 



 

