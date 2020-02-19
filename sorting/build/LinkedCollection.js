"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedCollection = /** @class */ (function () {
    function LinkedCollection(data) {
        this.data = data;
    }
    Object.defineProperty(LinkedCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    LinkedCollection.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.data.split('');
        var leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    };
    return LinkedCollection;
}());
exports.LinkedCollection = LinkedCollection;
