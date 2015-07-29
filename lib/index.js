'use strict';

var _Jenkins = require('jenkins');
var Job = require('./job');
var Build = require('./build');
var Node_ = require('./node');
var Queue = require('./queue');
var View = require('./view');

// get info

function Jenkins(opts) {
  if (!(this instanceof Jenkins)) {
    return new Jenkins(opts);
  }

  this.jenkins = new _Jenkins(opts);

  this.job = new Job(this.jenkins);
  this.build = new Build(this.jenkins);
  this.node = new Node_(this.jenkins);
  this.queue = new Queue(this.jenkins);
  this.view = new View(this.jenkins);
}

Jenkins.prototype.info = function () {
  var self = this;
  return new Promise(function(resolve, reject) {
    self.jenkins.info.call(self.jenkins, function(err, res) {
      if (err) reject(err);
      resolve(res);
    });
  });
};

Jenkins.prototype.get = Jenkins.prototype.info;

module.exports = Jenkins;
