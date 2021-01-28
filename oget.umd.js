(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.oget = factory());
}(this, (function () {
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

  return oget;

})));
