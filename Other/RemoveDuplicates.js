'use strict';
// Remove duplicate integers from a string

function main(str) {
    const out = str.split('');
    const end = out
        .filter(function(item, pos) {
            return out.indexOf(item) == pos;
        });

    console.log(end);
}

module.exports = main;
