// Print two space-separated integers denoting the respective comparison scores
// earned by Alice and Bob.

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);

    const aList = [a0, a1, a2];
    const bList = [b0, b1, b2];
    let totals = [0,0];
    let bob = 0;
    let alice = 0;

    for (i = 0; i < aList.length; i++) {
            if (aList[i] < bList[i]) {
                bob += 1;
            } else if (aList[i] > bList[i]) {
                alice +=1
            }
        }

    console.log(alice, bob);
}
