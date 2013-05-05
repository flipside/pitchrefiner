// pitch.js

// var _ = require('underscore');

var tmpl = "NAME is building a PRODUCT to help AUDIENCE SOLUTION SECRET.";

var Pitch = function (settings, pitchRank) {
  // this.ver = settings.ver;
  this.pitchRank = pitchRank;

  this.name = settings.name;
  this.product = settings.product;
  this.audience = settings.audience;
  this.solution = settings.solution;
  this.secret = settings.secret;

};

Pitch.prototype.toSentence = function () {
  return  tmpl.replace('NAME',this.name)
              .replace('PRODUCT',this.product)
              .replace('AUDIENCE',this.audience)
              .replace('SOLUTION',this.solution)
              .replace('SECRET',this.secret);
};

Pitch.prototype.getRating = function () {
  return this.pitchRank.getRating();
};

Pitch.prototype.getRd = function () {
  return this.pitchRank.getRd();
};

Pitch.prototype.getVol = function () {
  return this.pitchRank.getVol();
};

Pitch.prototype.getStats = function (n) {
  console.log(n || 1, this.toSentence());
  console.log("\trating: %d", this.getRating());
  console.log("\trd: %d", this.getRd());
  console.log("\tvol: %d", this.getVol());
};


module.exports = Pitch;