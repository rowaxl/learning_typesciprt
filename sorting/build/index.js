"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumberCollection_1 = require("./NumberCollection");
var numCol = new NumberCollection_1.NumberCollection([0, -1, 2, 1]);
var sortNum = new Sorter_1.Sorter(numCol);
sortNum.simpleSort();
console.log("after sort: " + numCol.data);
// const sortStr = new Sorter('bbasXe2mlvsa')
// sortStr.simpleSort()
// sortStr.log()
