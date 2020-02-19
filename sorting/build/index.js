"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumberCollection_1 = require("./NumberCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var initNums = [0, -1, 2, 1];
console.log("\nbefore: " + initNums);
var numCol = new NumberCollection_1.NumberCollection(initNums);
var sortNum = new Sorter_1.Sorter(numCol);
sortNum.simpleSort();
console.log("after: " + numCol.data + "\n");
var initChar = 'bbasXe2mlvsa';
var charCol = new CharactersCollection_1.CharactersCollection(initChar);
var sortStr = new Sorter_1.Sorter(charCol);
sortStr.simpleSort();
console.log("before: " + initChar + "\nafter: " + charCol.data + "\n");
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(5);
linkedList.add(999);
linkedList.add(2);
linkedList.add(10);
linkedList.add(-10);
console.log("before sort");
linkedList.print();
var sortLinkedList = new Sorter_1.Sorter(linkedList);
sortLinkedList.simpleSort();
console.log("\nafter sort");
linkedList.print();