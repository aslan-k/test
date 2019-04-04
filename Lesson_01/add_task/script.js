let num = 33721;
let getNum = n1 => { return n1.toString().split(''); }
let arr = getNum(num);

let multipl = arr.reduce((previous, current) => previous * current);
console.log(multipl);    

//for(let i = 0; i < 3; i++) { exp = exp*multiple; }
let exp = multipl ^ 3;
console.log(exp);

let a=2, b=3;
let x = b ^ a;
console.log(x);

let getTwoNum = n2 => { return n2.toString().split('', 2); } 
console.log(`Первые 2 цифры: ${getTwoNum(exp)}`);
 



 

