'use strict';

var methods = [
  'get',
  'log',
  'stop',
];

function Build(jenkins) {
  this.jenkins = jenkins;
}

methods.forEach(function(method) {
  Build.prototype[method] = function() {
    var args = Array.prototype.slice.call(arguments);
    var self = this;
    return new Promise(function(resolve, reject) {
      args.push(function(err, res) {
        if (err) reject(err);
        resolve(res);
      });
      self.jenkins.build[method].apply(self, args);
    });
  };
});

module.exports = Build;