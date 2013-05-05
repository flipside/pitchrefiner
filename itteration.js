
var _ = require('underscore');

var UPDATE_PERIOD = 300; // 5 minute rounds
var VALS = [0, 1, 0.5];


var Itteration = function (combos, ranking) {
  this.combos = combos;
  this.total = combos.length;
  this.matches = [];
  this.scoredMatches = [];
  this.startTime = 0;

  this.ranking = ranking;

  // var that = this;
  // this.updateRatings = function () {
  //   if (that.shouldUpdate()) {
  //     var matches = that.matches;
  //     that.matches = [];

  //     ranking.updateRatings(matches);

  //     that.scoredMatches = that.scoredMatches.concat(matches);
  //   }
  // };
};

Itteration.prototype.updateRatings = function () {
  if (this.shouldUpdate()) {
    var matches = this.matches;

    this.ranking.updateRatings(matches);

    this.scoredMatches = this.scoredMatches.concat(matches);
    this.matches = [];
  }
};

Itteration.prototype.start = function () {
  console.log('start Itteration');
};

Itteration.prototype.end = function () {
  console.log('end Itteration');
};

Itteration.prototype.updateTimer = function () {

};

Itteration.prototype.shouldUpdate = function () {
  if (this.matches.length > 0 && (this.startTime || this.matches.length > 10)) {
    return true;
  } else {
    return false;
  }
};

// add a match to the current round
Itteration.prototype.addMatch = function (a, b, c) {
  this.matches.push([a, b, c]);
};

Itteration.prototype.getStats = function () {
  _.each(this.combos, function (pitch, i) {
    pitch.getStats(i);
  });
};

var randRound = function (n) {
  return Math.floor(Math.random()*n);
};

var randIndex = function (arr) {
  return randRound(arr.length);
};

var pickOne = function (arr) {
  if (arr.length) {
    return arr[randIndex(arr)];
  } else {
    return undefined;
  }
};

Itteration.prototype.randomMatch = function (n) {
  var num = this.total || n;
  var p1 = randRound(num);

  var offset = randRound(num - 1)+1;
  var p2 = (p1 + offset) % num;
  this.addMatch(this.combos[p1], this.combos[p2], VALS[_.random(2)]);

  // console.log(num, p1, p2, offset);
};

Itteration.prototype.randomMatches = function (n) {
  var that = this;
  _.times(n, function () {
    that.randomMatch();
  });
};

Itteration.prototype.addMatch = function (p1, p2, v) {
  this.matches.push([p1.pitchRank, p2.pitchRank, v]);
};

var newMatch = function (a, b, c) {
  return [a, b, c];
};


var sortByRank = function (pitches) {
  _.sortBy();
};

// start a new round
var startNewRound = function () {

};

// remove low ranking pitches
var removeBadPitches = function (p) {

};

var getCurrentRound = function () {
  var round = [];
};

module.exports = Itteration;