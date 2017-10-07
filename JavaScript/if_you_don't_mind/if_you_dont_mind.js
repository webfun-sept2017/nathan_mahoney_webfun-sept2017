var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";
var after = "It's just after";
var almost = "It's almost";

if (MINUTE >= 30 && MINUTE <= 60) {
	if (PERIOD = "AM") {
        console.log(almost, (HOUR + 1), "in the morning");
	}
	else console.log(almost, (HOUR + 1), "in the evening");	
}
else {
    if (PERIOD = "AM") {    
        console.log(after, (HOUR), "in the morning");
	}
	else console.log(after, (HOUR), "in the evening");	
}
