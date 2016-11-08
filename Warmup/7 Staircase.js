// Print a staircase of size  using # symbols and spaces.

// Note: The last line must have 0 spaces in it.

function main() {
    var n = parseInt(readLine());

    for (i=1;i<(n+1);i++) {

        let output ='';

        for (s=(n-i-1); s>=0; s--) {
            output += output = ' ';
        }

        for (b=0; b<i; b++) {
            output += output = '#';
        }

        console.log(output);
    }
}
