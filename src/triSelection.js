function SelectionSort () {

}

SelectionSort.prototype.sort = function(array) {
	var sortedArray = array.slice();
	for (var i = 0; i < sortedArray.length-1 ; i++) {
		var min = i;
		for (var j = i+1; j < sortedArray.length; j++) {
			if (sortedArray[j] < sortedArray[min]) {
				min = j;
			}
		}
		if (min != i) {
			var temp;
			temp=sortedArray[i];
			sortedArray[i]=sortedArray[min];
			sortedArray[min]=temp;
		}	
	}
	return sortedArray;
}

module.exports = SelectionSort;


//ici on demande à l'ordinateur de trier le tableau
//var tab = [100,3,2,70,8,12];
//tri_selection(tab, 6);
//console.log(tab);