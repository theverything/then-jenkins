'use-strict';

var send = require('./util/send');
var methods = [
    'config',
    'create',
    'destroy',
    'exists',
    'get',
    'list',
    'add',
    'remove'
];

function View(jenkins) {
    this.jenkins = jenkins;
}

methods.forEach(function(method) {
    send(View, method);
});

module.exports = View;