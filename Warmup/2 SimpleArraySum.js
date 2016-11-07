// Print the sum of the array's elements as a single integer.

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    let total = 0;

    for (i=0; i<arr.length; i++) {
        total += arr[i];
    }

    console.log(total);

}
