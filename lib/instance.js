"use strict";

require("core-js/modules/es6.array.some");

require("core-js/modules/es7.array.includes");

var arr = [1, 2, 3, 4];
var result = arr.includes(1);
var flat = arr.flat(Infinity);
arr.some(function (item) {
  return item === 2;
});
Array.prototype.slice.call(arr, 1);