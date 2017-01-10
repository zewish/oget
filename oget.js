'use strict';

var oget = function (obj, path, def) {
    var res = path
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .replace(/^\./, '')
    .split('.')
    .reduce(function (prev, curr) {
        return prev && prev[curr]
    }, obj);

    return (res === undefined)
      ? def
      : res;
};

module.exports = oget;
