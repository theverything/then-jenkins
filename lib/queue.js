'use strict';

var send = require('./util/send');
var methods = [
  'list',
  'cancel'
];

function Queue(jenkins) {
  this.jenkins = jenkins;
}

methods.forEach(function(method) {
  send(Queue, method);
});

module.exports = Queue;