"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVReader_1 = require("./CSVReader");
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var assetPath = './asset/football.csv';
// inheritence pattern
// const matchReader = new MatchReader(assetPath)
// matchReader.read()
// interface pattern
var matchReader = new MatchReader_1.MatchReader(new CSVReader_1.CSVReader(assetPath));
matchReader.load();
/**
 * e.g. [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
 * date, home team, away team, , , which won,
 */
var teamName = 'Man United';
var manUnitedWins = 0;
// inheritence pattern
// const matches = matchReader.data
// interface pattern
var matches = matchReader.matches;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === teamName && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === teamName && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United wins " + manUnitedWins + " times");
