// JavaScript source code

function car_cost(mycar, mypaycheck) {
	window.alert("You have a " + mycar + " and make £" + mypaycheck); 
}

function get_added_text() {
	var textpart1 = "This project ";
	var textpart2 = "is almost fun!";
	var addedtext = textpart1 + textpart2;
	return addedtext;
}
car_cost("Mustang", 1500);
var alerttext = get_added_text();
window.alert(alerttext);