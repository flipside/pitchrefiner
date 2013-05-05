// pitchcollection.js

var _ = require('underscore');
var Pitch = require('./pitch');


// all variations of pitch
var PitchCollection = function (init, ranking) {
  // this.ver = settings.ver;
  this.ranking    = ranking;

  this.names      = [];
  this.products   = [];
  this.audiences  = [];
  this.solutions  = [];
  this.secrets    = [];

  if (init) {
    var that = this;
    if (_.isBoolean(init)) {
      that.addTestData();
    }
    _.each(init, function (val, key) {
      that.add(key, val);
    });
  }
};

PitchCollection.prototype.addTestData = function () {
  // this.ver = settings.ver;
  this.names      = ['PitchRefiner','PitchReactor'];
  this.products   = ['mobile web app','service'];
  this.audiences  = ['entrepreneurs','hackers'];
  this.solutions  = ['refine pitches','improve pitches'];
  this.secrets    = ['with crowdsourced feedback'];
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
  if (_.isArray(this[type])) {
    if (_.isArray(val)) {
      var that = this;
      _.each(val, function (v) {
        that[type].push(v);
      });
    } else {
      this[type].push(val);
    }
  }
};

PitchCollection.prototype.addName = function (name) {
  this.add('names', name);
};

PitchCollection.prototype.addProduct = function (product) {
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

PitchCollection.prototype.numCombos = function () {
  return this.names.length * this.audiences.length * this.products.length * this.solutions.length * this.secrets.length;
};

// create all combos from a pitchCollection
PitchCollection.prototype.createCombos = function () {
  if (!this.isFull()) return;
  var that = this;
  var combos = [];

  // ugly but it works
  _.each(that.names, function (name) {
    _.each(that.products, function (product) {
      _.each(that.audiences, function (audience) {
        _.each(that.solutions, function (solution) {
          _.each(that.secrets, function (secret) {
            combos.push(that.createPitch({
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

  return combos;
};

PitchCollection.prototype.createPitch = function (params, rank) {
  return new Pitch(params, this.ranking.makePlayer(rank));
};

module.exports = PitchCollection;