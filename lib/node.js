'use strict';

var send = require('./util/send');
var methods = [
  'config',
  'create',
  'destroy',
  'delete',
  'disable',
  'enable',
  'exists',
  'get',
  'list',
  'toggleOffline',
  'changeOfflineCause'
];

function Node_(jenkins) {
  this.jenkins = jenkins;
}

methods.forEach(function(method) {
  send(Node_, method);
});

module.exports = Node_;
