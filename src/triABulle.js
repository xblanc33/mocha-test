function BubbleSort() {

}

BubbleSort.prototype.sort = function (array) {
	var sortedArray = array.slice();
	for (var i = sortedArray.length-1 ; i >= 1 ; i--){
		for (var j = 0 ; j <= i-1 ; j++){
			if (sortedArray[j+1] < sortedArray[j]) {
				var temp;
				temp=sortedArray[j];
				sortedArray[j]=sortedArray[j+1];
				sortedArray[j+1]=temp;
			}
		}
	}
	return sortedArray;
}	

module.exports = BubbleSort;
