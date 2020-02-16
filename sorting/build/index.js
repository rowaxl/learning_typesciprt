"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.simpleSort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // If collections is number[]
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                this.log();
            }
        }
    };
    Sorter.prototype.log = function () {
        console.log(this.collection);
    };
    return Sorter;
}());
var sortNum = new Sorter([3, 4, 2, 1]);
sortNum.simpleSort();
sortNum.log();
// const sortStr = new Sorter('bbasXe2mlvsa')
// sortStr.simpleSort()
// sortStr.log()
