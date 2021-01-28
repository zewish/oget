var oget = function (obj, path, defaultValue) {
    var res = path
        .replace(/\[/g, '.')
        .replace(/\]/g, '')
        .replace(/^\./, '')
        .split('.')
        .reduce(function (prev, curr) { return (prev && prev[curr]); }, obj);
    return (res === undefined)
        ? defaultValue
        : res;
};

module.exports = oget;
