var fs = require('fs');

var data = fs.readFileSync('numbers.txt').toString().split("\n"); //чтение данных
let array = data[1].split(' ');
for (i in array) { array[i] = Number(array[i]); }
var q = 0;

console.time('Watcher');

const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let i = j = 0;
    while (i < arrFirst.length && j < arrSecond.length) {
        if (arrFirst[i] < arrSecond[j]) {
            arrSort.push(arrFirst[i]);
            i++;
        } else {
            q = q + (arrFirst.length - i);
            arrSort.push(arrSecond[j]);
            j++;
        };
    };
    if (i < arrFirst.length) {
        return arrSort.concat(arrFirst.slice(i))
    } else {
        return arrSort.concat(arrSecond.slice(j))
    }
};

const mergeSort = array => {
    if (array.length <= 1) {return array;}

    const middle = Math.floor(array.length / 2);
    const arrLeft = array.slice(0, middle);
    const arrRight = array.slice(middle);

    return merge(mergeSort(arrLeft), mergeSort(arrRight));
};

array = mergeSort(array);

console.timeEnd('Watcher');

console.log(q);