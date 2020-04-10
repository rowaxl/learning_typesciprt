"use strict";
// inheritence pattern
// import { MatchReader } from './inheritence/MatchReader'
Object.defineProperty(exports, "__esModule", { value: true });
// interface composition pattern
var MatchReader_1 = require("./composition/MatchReader");
var Summary_1 = require("./Summary");
var assetPath = './asset/football.csv';
// inheritence pattern
// const matchReader = new MatchReader(assetPath)
// matchReader.read()
// const matches = matchReader.data
// composition pattern
var matchReader = MatchReader_1.MatchReader.fromCSV(assetPath);
matchReader.load();
var matches = matchReader.matches;
/**
 * e.g. [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
 * date, home team, away team, , , which won,
 */
var teamName = 'Man United';
var summary = Summary_1.Summary.summaryWinsWithHTMLReport(teamName);
summary.buildAndPrintReport(matches);
