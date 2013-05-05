// pitchtest.js
var _ = require('underscore');
var glicko2 = require('glicko2');
var PitchCollection = require('./pitchcollection');
var Itteration = require('./Itteration');

/*
  Definitions

  PitchTest is the testing entity and constains all variations of pitches
  PitchCollection is all the current variations of a pitch
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

// pitch test class
var PitchTest = function (init) {
  // this.creator = init.user;
  this.ranking = createRanking(); // separate rankings for each pitchTest
  this.pitchCollection = new PitchCollection(init, this.ranking);
  // this.rounds = [];
  this.itterations = [];
};


//
PitchTest.prototype.start = function () {
  this.itterations.push(new Itteration(this.pitchCollection.createCombos(), this.ranking));
};

// start refining pitch
PitchTest.prototype.refine = function () {
  console.log('refining');
};




/*
  matchmaking algo
  pick random pitch
  pick 2nd pitch biasing?
*/

module.exports = PitchTest;