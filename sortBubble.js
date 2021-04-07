var fs = require('fs');
let k;

var data = fs.readFileSync('numbers.txt').toString().split("\n"); //разбираемся с чтением данных
let n = data[0];
let array = data[1].split(' ');
for (i in array) { array[i] = Number(array[i]); }

console.time('Watcher');

for (let i = 0; i < (n - 1); i++) { //сортировка пузырьком
    for (let j = 0; j < (n - 1 - i); j++) {
        if (array[j] > array[j+1]) {
            k = array[j];
            array[j] = array[j+1];
            array[j+1] = k;
        }
    }   
}

console.timeEnd('Watcher');

let str = array.join(' '); //запись в файл
fs.writeFileSync("numbersBubble.txt", str);