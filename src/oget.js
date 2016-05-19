'use strict';

export default (obj, path, def) => {
    let res = path
    .replace(/(\[.*\])/g, (str) => {
        return str
        .replace(/\[/g, '.')
        .replace(/\]/g, '');
    })
    .replace(/^\./, '')
    .split('.')
    .reduce((prev, curr) => {
        return prev && prev[curr]
    }, obj);

    return (res === undefined)
      ? def
      : res;
}