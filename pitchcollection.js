// pitchcollection.js

var _ = require('underscore');
var Pitch = require('./pitch');


// all variations of pitch
var PitchCollection = function (init) {
  // this.ver = settings.ver;
  this.names      = [];
  this.products   = [];
  this.audiences  = [];
  this.solutions  = [];
  this.secrets    = [];

  if (init) {
    var that = this;
    _.each(init, function (val, key) {
      that.add(key, val);
    });
  }
};


PitchCollection.prototype.isFull = function () {
  if (this.names.length && this.products.length && this.audiences.length && this.solutions.length && this.secrets.length) {
    return true;
  } else {
    return false;
  }
};

// type must be 'names','products','audiences', etc
PitchCollection.prototype.add = function (type, val) {
  this[type].push(val);
};

PitchCollection.prototype.addName = function (name) {
  this.add('names', name);
};

PitchCollection.prototype.addProductions = function (product) {
  this.add('products', product);
};

PitchCollection.prototype.addAudience = function (audience) {
  this.add('audiences', audience);
};

PitchCollection.prototype.addSolution = function (solution) {
  this.add('solutions', solution);
};

PitchCollection.prototype.addSecret = function (secret) {
  this.add('secrets', secret);
};


// create all variations from a pitchCollection
PitchCollection.prototype.createVariations = function () {
  var that = this;
  this.variations = [];

  // ugly but it works
  _.each(that.names, function (name) {
    _.each(that.products, function (product) {
      _.each(that.audiences, function (audience) {
        _.each(that.solutions, function (solution) {
          _.each(that.secrets, function (secret) {
            that.variations.push(new Pitch({
              name: name,
              product: product,
              audience: audience,
              solution: solution,
              secret: secret
            }));
          });
        });
      });
    });
  });
};

// var createPitch = function (name, product, audience, solution, secret) {
//   return ;
// };

module.exports = PitchCollection;