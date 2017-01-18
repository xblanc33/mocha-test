var assert = require('assert');

function generateArray(maxSize, maxValue) {
    var size = Math.random() * maxSize;
    var array = [];
    for (var i = 0; i < size; i++) {
        array[i] = Math.random() * maxValue;
    }
    return array;
}

function isSorted(array) {
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}


describe("Random Test of Array sort", function() {

    var BubbleSort = require('../src/triABulle');
    var SelectionSort = require('../src/triSelection');

    var numberOfRandomTestRounds = 100;
    var maxLengthForGeneratedArray = 20;
    var maxLengthForGeneratedArray = 500;

    it("Random Test Selection", function() {
        var bubbleSort = new BubbleSort();
        for (var i = 0; i < numberOfRandomTestRounds; i++) {
            var array = generateArray(maxLengthForGeneratedArray, maxLengthForGeneratedArray);
            assert(isSorted(bubbleSort.sort(array)));
        }
    });

    it("Random Test Buble", function() {
        var selectionSort = new SelectionSort();
        for (var i = 0; i < numberOfRandomTestRounds; i++) {
            var array = generateArray(maxLengthForGeneratedArray, maxLengthForGeneratedArray);
            assert(isSorted(selectionSort.sort(array)));
        }
    });
});
