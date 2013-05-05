var PitchRefiner = (function () {
  var _ = require('underscore');
  var glicko2 = require('glicko2');
  var PitchTest = require('./pitchtest');

  var Firebase = require('firebase');
  var myRootRef = new Firebase('https://pitchrefiner.firebaseio.com/');

  //pitchrefiner.firebase.io


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

  var createPitchTest = function (config) {
    var pitchTest = new PitchTest(config);

    pitchTest.refine();
  };

  return {
    createPitchTest : createPitchTest
  };
}());

module.exports = PitchRefiner;