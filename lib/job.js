'use strict';

var methods = [
  'build',
  'config',
  'copy',
  'create',
  'destroy',
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
  Job.prototype[method] = function() {
    var args = Array.prototype.slice.call(arguments);
    var self = this;
    return new Promise(function(resolve, reject) {
      args.push(function(err, res) {
        if (err) reject(err);
        resolve(res);
      });
      self.jenkins.job[method].apply(self, args);
    });
  };
});

module.exports = Job;