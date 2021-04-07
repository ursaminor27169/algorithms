var fs = require('fs');
let current, j;

var data = fs.readFileSync('numbers.txt').toString().split("\n"); //разбираемся с чтением данных
let n = data[0];
let array = data[1].split(' ');
for (i in array) { array[i] = Number(array[i]); }

console.time('Watcher');

for (let i = 1; i < n; i++) {
    current = array[i];
    j = i;
    while (j > 0 && array[j - 1] > current) {
        array[j] = array[j - 1];
        j--;
    }
    array[j] = current;
}

console.timeEnd('Watcher');

let str = array.join(' '); //запись в файл
fs.writeFileSync('numbersInsertion.txt', str);