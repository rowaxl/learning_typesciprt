"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var assetPath = './asset/football.csv';
var csvReader = new MatchReader_1.MatchReader(assetPath);
csvReader.read();
/**
 * e.g. [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
 * date, home team, away team, , , which won,
 */
var teamName = 'Man United';
var manUnitedWins = 0;
for (var _i = 0, _a = csvReader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === teamName && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === teamName && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United wins " + manUnitedWins + " times");
