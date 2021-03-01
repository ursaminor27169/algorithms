const fs = require('fs');
var quantity = process.argv[2];
let arr = [];
for (let i = 0; i < quantity; i++) {
    arr[i] = Math.floor(Math.random() * 100);
}
let str = arr.join(' ');
fs.writeFileSync("numbers.txt", quantity + '\n' +str);