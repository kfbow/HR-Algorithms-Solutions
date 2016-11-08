// Convert and print the given time in 24-hour format, where 00 <= hh <= 23.

function main() {
    var time = readLine();

    const hour = Number(time[0] + time[1]);
    const minutesSeconds = time.slice(2,8);
    const noAMPM = time.slice(0,8);

    if (time[8] === 'P') {
        if (hour === 12) {
            return console.log(noAMPM);
        }

        output = hour + 12;

        return console.log(output + minutesSeconds);
    } else {
        if (hour === 12) {
            return console.log('00' + minutesSeconds);
        }

        return console.log(noAMPM);
    }

}
