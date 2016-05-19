(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.oget = factory());
}(this, function () { 'use strict';

    function oget (obj, path, def) {
        var res = path
        .replace(/(\[.*\])/g, function (str) {
            return str
            .replace(/\[/g, '.')
            .replace(/\]/g, '');
        })
        .replace(/^\./, '')
        .split('.')
        .reduce(function (prev, curr) {
            return prev && prev[curr]
        }, obj);

        return (res === undefined)
          ? def
          : res;
    }

    return oget;

}));