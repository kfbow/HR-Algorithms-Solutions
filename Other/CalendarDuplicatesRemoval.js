function removeCalDup() {
    month = [];
    day = [];
    date = [];

    // months of the year
    for (i=1;i<13;i++) {
        month.push(i);

        // days of the month assuming 31 every month
        for (d=1;d<32;d++) {
            day.push(d);

            // combine [mmdd]
            date.push(
                ('00'+i).substring(i.toString().length)
                + ('00'+d).substring(d.toString().length));

            // for fun: remove every duplicate integer from each set of [mmdd]
            for (k=0;k<date.length;k++) {
                set = date[k].split('')
                end = set.filter(function(item, pos, self){
                    return self.indexOf(item) === pos;
                })
            }

            console.log(end);
        }
    }
}

module.exports = removeCalDup;
