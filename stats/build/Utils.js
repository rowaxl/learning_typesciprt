"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strToDate = function (dateStr) {
    var dateStrings = dateStr
        .split('/')
        .map(function (value) { return parseInt(value); });
    return new Date(dateStrings[2], dateStrings[1] - 1, dateStrings[0]);
};
