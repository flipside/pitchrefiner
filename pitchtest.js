// pitchtest.js
var _ = require('underscore');
var glicko2 = require('glicko2');
var PitchCollection = require('./pitchcollection');


/*
  Definitions

  PitchTest is the testing entity and constains all variations of pitches
  MasterPitch is all the current variations of a pitch
  Pitch is a specific variation
  PitchText is a component of a Pitch

  a PitchTest has Itterations
  Each Itteration starts with many Pitches and ends with a Ranking for each Pitch
  A Suggestion is a new Pitch variation from a user
  A Suggestion can only contain 1-2 different PitchTexts
  An Itteration can have multiple rounds
  A Round is the period between ranking updates
  Each Round can have many Matches
  A Match is a comparison between 2 Pitches

*/

// constants

var ROUND_LENGTH = 300; // 5 minute rounds

var RANK_SETTINGS = {
  tau : 0.5, // "Reasonable choices are between 0.3 and 1.2, though the system should be tested to decide which value results in greatest predictive accuracy."
  rating : 1500, //default rating
  rd : 200, //Default rating deviation (small number = good confidence on the rating accuracy)
  vol : 0.06 //Default volatility (expected fluctation on the player rating)
};

// glicko2 ranking object
var createRanking = function () {
  return new glicko2.Glicko2(RANK_SETTINGS);
};

// var getStats = function (n) {
//   console.log("%d rating: %d", n, players[n].getRating());
//   console.log("%d rd: %d", n, players[n].getRd());
//   console.log("%d vol: %d", n, players[n].getVol());
// };

// pitch test class
var PitchTest = function (config) {
  // this.creator = config.user;
  this.pitchCollection = new PitchCollection(config);
  // this.rounds = [];
  // this.generations = [];
  this.ranking = createRanking(); // separate rankings for each pitchTest
};

//
PitchTest.prototype.startItteration = function () {

};

// start refining pitch
PitchTest.prototype.refine = function () {
  console.log('refining');
};



// round is the length of time or
var Round = function (n) {
  this.num = n;
  this.startTime = 0; // curr time
  this.matches = []; // list of all matches from this round
};

Round.prototype.isOver = function () {
  if (this.matches.length > 0 && (this.startTime || this.matches.length > 10)) {
    return true;
  } else {
    return false;
  }
};

// add a match to the current round
Round.prototype.addMatch = function (a, b, c) {
  this.matches.push([a, b, c]);
};

var newMatch = function (a, b, c) {
  return [a, b, c];
};

var newRanking = function () {
  return ranking.makePlayer();
};

// update the ratings based on current matches
var updateRatings = function (round) {
  if (round.isOver()) {
    ranking.updateRatings(matches);
    // var pitches = ranking.getPlayers();
    // start a new round
  }
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


module.exports = PitchTest;