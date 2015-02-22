'use strict';

var _Jenkins = require('jenkins');
var Job = require('./job');
var Build = require('./build');
var Node_ = require('./node');
var Queue = require('./queue');

function Jenkins(opts) {
  var _jenkins = _Jenkins(opts);
  var self = {};

  self.job = new Job(_jenkins);
  self.build = new Build(_jenkins);
  self.node = new Node_(_jenkins);
  self.queue = new Queue(_jenkins);
  return self;
}

module.exports = Jenkins;