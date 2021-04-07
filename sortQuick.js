var fs = require('fs');

var data = fs.readFileSync('numbers.txt').toString().split("\n"); //чтение данных
let array = data[1].split(' ');
for (i in array) { array[i] = Number(array[i]); }

console.time('Watcher');

function replace(array, i, j){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function partition(array, left, right) {
    var pivotI = Math.floor((right + left) / 2),
        pivot = array[pivotI],
        i = left,
        j = right;
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            replace(array, i, j);
            // console.log(array[i], array[j], );
            if (array[i] == pivot) {pivotI = i};
            if (array[j] == pivot) {pivotI = j};
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(array, left, right) {
    var index;
        index = partition(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    return array;
}

array = quickSort(array, 0, array.length - 1);

console.timeEnd('Watcher');

let str = array.join(' '); //запись в файл
fs.writeFileSync('numbersQuick.txt', str);