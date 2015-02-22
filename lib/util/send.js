'use strict';

var Promise = require('./promise');

module.exports = function(constructor, method) {
  var name = constructor.name.toLowerCase();

  constructor.prototype[method] = function(/*arguments*/) {
    var args = Array.prototype.slice.call(arguments);
    var self = this;
    
    return new Promise(function(resolve, reject) {
      args.push(function(err, res) {
        if (err) reject(err);
        resolve(res);
      });
      self.jenkins[name][method].apply(self, args);
    });
  };
};