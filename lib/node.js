'use strict';

var send = require('./util/send');
var methods = [
  'create',
  'destroy',
  'disable',
  'enable',
  'exists',
  'get',
  'list'
];

function Node_(jenkins) {
  this.jenkins = jenkins;
}

methods.forEach(function(method) {
  send(Node_, method);
});

module.exports = Node_;