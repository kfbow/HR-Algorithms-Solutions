function removeCalDup() {
    month = [];
    day = [];
    date = [];

    for (i=1;i<13;i++) {
        month.push(i);

        for (d=1;d<32;d++) {
            day.push(d);

            date.push(
                ('00'+i).substring(i.toString().length)
                + '' + ('00'+d).substring(d.toString().length));

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
