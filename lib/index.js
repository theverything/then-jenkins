'use strict';

var _Jenkins = require('jenkins');
var Job = require('./job');
var Build = require('./build');

function Jenkins(opts) {
  var _jenkins = _Jenkins(opts);
  var self = {};

  self.job = new Job(_jenkins);
  self.build = new Build(_jenkins);
  return self;
}

module.exports = Jenkins;