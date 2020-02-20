"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var assetPath = './asset/football.csv';
var matches = fs.readFileSync(assetPath, {
    encoding: 'UTF-8'
})
    .split('\n')
    .map(function (row) { return row.split(','); });
/**
 * e.g. [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
 * date, home team, away team, , , which won,
 */
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
console.log("Man United wins " + manUnitedWins + " times");
