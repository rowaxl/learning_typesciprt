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
var utils_1 = require("./utils");
var CSVReader = /** @class */ (function () {
    function CSVReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CSVReader.prototype.read = function () {
        this.data = fs
            .readFileSync(this.filename, {
            encoding: 'UTF-8'
        })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        }).map(function (row) {
            return [
                utils_1.strToDate(row[0]).toDateString(),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    };
    return CSVReader;
}());
exports.CSVReader = CSVReader;
