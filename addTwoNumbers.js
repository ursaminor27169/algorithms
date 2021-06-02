var l1 = [0,2,4,3];
var l2 = [5,6,4];

var addTwoNumbers = function(l1, l2) {
    var sum = [];
    var remains = 0, unit1 = 0, unit2 = 0, i = 0;    
    while ((l1[i] != null) || (l2[i] != null)) {
        unit1 = (l1[i] > -1) ? l1[i] : 0;
        unit2 = (l2[i] > -1) ? l2[i] : 0;
        sum[i] = (unit1 + unit2 + remains) % 10;
        if ((unit1 + unit2 + remains) > 9) {
            remains = 1;
        } else {
            remains = 0;
        }
        i++;
    }
    if (remains == 1) {sum[sum.length] = remains};
    return sum;
}

console.log(addTwoNumbers(l1, l2));