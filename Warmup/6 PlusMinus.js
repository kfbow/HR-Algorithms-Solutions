// You must print the following  lines:
//
// A decimal representing of the fraction of positive numbers in the array.
// A decimal representing of the fraction of negative numbers in the array.
// A decimal representing of the fraction of zeroes in the array.

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    let neg = zero = pos = 0;

    for (i=0; i<arr.length; i++) {
        let c = arr[i];
        switch(true) {
            case c <0:
                neg++;
                break;
            case c ==0:
                zero++;
                break;
            case c > 0:
                pos++;
                break;
        }
    }
    let math = function(number) {
        console.log((Math.round(number /arr.length *1000000)/1000000).toFixed(6));
    }
    math(pos);
    math(neg);
    math(zero);

}
