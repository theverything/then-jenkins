'use strict';

module.exports = function(constructor, method) {
  var name = constructor.name.toLowerCase().replace("_", "");

  constructor.prototype[method] = function(/*arguments*/) {
    var args = Array.prototype.slice.call(arguments);
    var self = this.jenkins[name];

    return new Promise(function(resolve, reject) {
      args.push(function(err, res) {
        if (err) reject(err);
        resolve(res);
      });
      self[method].apply(self, args);
    });
  };
};
