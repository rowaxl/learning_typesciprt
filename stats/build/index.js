"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVReader_1 = require("./CSVReader");
var assetPath = './asset/football.csv';
var csvReader = new CSVReader_1.CSVReader(assetPath);
csvReader.read();
var matches = csvReader.data;
/**
 * e.g. [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
 * date, home team, away team, , , which won,
 */
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var teamName = 'Man United';
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === teamName && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === teamName && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United wins " + manUnitedWins + " times");
