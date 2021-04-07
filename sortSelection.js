var fs = require('fs');
let minIndex, minItem, k;

var data = fs.readFileSync('numbers.txt').toString().split("\n"); //разбираемся с чтением данных
let n = data[0];
let array = data[1].split(' ');
for (i in array) { array[i] = Number(array[i]); }

console.time('Watcher');

for (let i = 0; i < n; i++) {
    minItem = array[i];
    for (let j = i; j < n; j++) {
        if (minItem >= array[j]) {
            minIndex = j;
            minItem = array[j];
        }
    }
    k = array[i];
    array[i] = array[minIndex];
    array[minIndex] = k;
}

console.timeEnd('Watcher');

let str = array.join(' '); //запись в файл
fs.writeFileSync('numbersSelection.txt', str);