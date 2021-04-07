var fs = require('fs');

var data = fs.readFileSync('numbers.txt').toString().split("\n"); //чтение данных
let array = data[1].split(' ');
for (i in array) { array[i] = Number(array[i]); }
var num = process.argv[2], index;

console.time('Watcher');

function replace(array, i, j){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function partition2 (array, left, right) {
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
    return pivotI;
}

function kStatistic(array, left, right) {
        index = partition2(array, left, right);
        if ((left < index) && (num < index)) {
            kStatistic(array, left, index);
        }
        if ((index < right) && (num > index)) {
            kStatistic(array, index+1, right);
        }
    return index;
}

index = kStatistic(array, 0, array.length - 1);

console.timeEnd('Watcher');

console.log(array[index]);