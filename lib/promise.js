"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var p = new _promise["default"](function (reslove, reject) {
  resolve('success');
});
p.then(function (data) {
  console.log(data);
});