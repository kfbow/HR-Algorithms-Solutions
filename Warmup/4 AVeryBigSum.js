// Print a single value equal to the sum of the elements in the array.

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    let total = 0;

    for (i=0;i<arr.length;i++) {
        total += arr[i];
    }
    console.log(total);

}
