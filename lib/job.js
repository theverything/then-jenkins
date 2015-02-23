'use strict';

var send = require('./util/send');
var methods = [
  'build',
  'config',
  'copy',
  'create',
  'destroy',
  'delete',
  'disable',
  'enable',
  'exists',
  'get',
  'list'
];

function Job(jenkins) {
  this.jenkins = jenkins;
}

methods.forEach(function(method) {
  send(Job, method);
});

module.exports = Job;
