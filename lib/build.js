'use strict';

var send = require('./util/send');
var methods = [
  'get',
  'log',
  'stop'
];

function Build(jenkins) {
  this.jenkins = jenkins;
}

methods.forEach(function(method) {
  send(Build, method);
});

module.exports = Build;