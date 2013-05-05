// pitch.js

var _ = require('underscore');


var Pitch = function (settings) {
  this.ver = settings.ver;
  this.ranking = settings.ranking;
  this.name = settings.name;
  this.product = settings.product;
  this.audience = settings.audience;
  this.solution = settings.solution;
  this.secret = settings.secret;

};

module.exports = Pitch;