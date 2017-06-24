$(function () {
	$("#region").narrows("#prefecture");	// continent は country を絞り込む
	$("#prefecture").narrows("#city");			// country は city を絞り込む
});