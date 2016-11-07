// Print the absolute difference between the two sums of the matrix's diagonals
// as a single integer.

function main() {
    var n = parseInt(readLine());
    var a = [];

    let diag = 0;
    let revDiag = 0;

    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }

    const length = a[0].length;

    for (i=0;i<length;i++) {
        diag += a[i][i];
        revDiag += a[i][length-1-i];
    }

    console.log(Math.abs(diag-revDiag));



}
