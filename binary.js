var list = [2, 3, 5, 7, 9, 10, 12, 16, 23, 27, 35];
var value = process.argv[2];

let first = 0,
    last = list.length - 1,
    position = -1,
    found = false,
    middle;

while ((found === false) && (first <= last)) {
    middle = Math.floor((first + last)/2);
    if (list[middle] == value) {
        found = true;
        position = middle;
    } else if (list[middle] > value) {
        last = middle - 1;
    } else {
        first = middle + 1;
    }
}

console.log(position);