var fs = require('fs');
let h = [], half, hs = 0;

var data = fs.readFileSync('numbers.txt').toString().split("\n"); //чтение данных
let array = data[1].split(' ');
for (i in array) { array[i] = Number(array[i]); }

console.time('Watcher');

function swap(array, i, j){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function siftUp(i) { //протаскиваем элемент на нужное место в куче
    half = Math.ceil(i/2) - 1;
    if (h[half]>h[i]) {
       swap(h, half, i);
       siftUp(half); 
    };
};

function add(value) { //добавляем элемент в кучу
    h[hs] = value;
    siftUp(hs);
    hs++;
}

for (var i = 0; i < array.length; i++) { //создание кучи
    add(array[i]);
}

function siftDown (i) {
    t = i;
    if (h[2*i+1] < h[t]) { t=2*i+1 }; 
    if ((h[2*i+2] != undefined) && (h[2*i+1] > h[2*i+2]) && (h[2*i+2] < h[t])) { t = 2*i+2 };
    if (t != i) {
       swap(h, i, t);
       if (h[2*t+1] != undefined) { siftDown(t) };
    };
 };

 function Delete(i) {
    swap(h, i, hs-1);
    h.pop();
    hs--;
    siftDown(i);
 }

 for (var i = 0; i < array.length; i++) { //сама сортировка
    array[i]=h[0];
    Delete(0);
}

console.timeEnd('Watcher');

let str = array.join(' '); //запись в файл
fs.writeFileSync('numbersHeap.txt', str);