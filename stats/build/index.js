"use strict";
// inheritence pattern
// import { MatchReader } from './inheritence/MatchReader'
Object.defineProperty(exports, "__esModule", { value: true });
// interface composition pattern
var CSVReader_1 = require("./composition/CSVReader");
var MatchReader_1 = require("./composition/MatchReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var HTMLReport_1 = require("./reportTargets/HTMLReport");
var assetPath = './asset/football.csv';
// inheritence pattern
// const matchReader = new MatchReader(assetPath)
// matchReader.read()
// const matches = matchReader.data
// composition pattern
var matchReader = new MatchReader_1.MatchReader(new CSVReader_1.CSVReader(assetPath));
matchReader.load();
var matches = matchReader.matches;
/**
 * e.g. [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
 * date, home team, away team, , , which won,
 */
var teamName = 'Man United';
var consoleSummary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new ConsoleReport_1.ConsoleReport());
consoleSummary.buildAndPrintReport(matches);
var htmlSummary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new HTMLReport_1.HTMLReport());
htmlSummary.buildAndPrintReport(matches);
