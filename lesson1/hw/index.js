require('colors')
const Colors = {green : 0, yellow: 1, red : 2}

let currentColor = Colors.green;
const first = process.argv[2];
const last = process.argv[3];
let noPrimeNum = true;

if(isNaN(first) || isNaN(last)){
    console.log('Ошибка... Неверные данные'.red);
    return;
}

const isPrimeNum = (num) => {
    if (num <= 1)
       return false;
    for(let i = 2; i < num; i++)
       if(num % i == 0) return false;
    return true;
}

const changeColor = () => {
    currentColor++;
    if (currentColor > Colors.red)
       currentColor = Colors.green;
}

const colorPrint = (num) => {
    if(noPrimeNum) noPrimeNum = false;
    switch (currentColor){
        case Colors.red:
            console.log(`${num}`.red);
            break;
        case Colors.green:
            console.log(`${num}`.green);
            break;
        case Colors.yellow:
            console.log(`${num}`.yellow);
            break;
    }
    changeColor();
}

for (let i = first; i <= last; i++){
    if (isPrimeNum(i)) colorPrint(i);
}
if(noPrimeNum)
    console.log(`Простые числа отсутствуют[${first},${last}]`.red);