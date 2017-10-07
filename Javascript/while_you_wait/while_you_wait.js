var daysUntilMyBirthday = 60;
var text = "days until my birthday. This sucks.";
var excited = "Ah dang! It's almost here!";
var caps = "AH DANG! IT'S ALMOST HERE!";
var party = "IT'S MOTHER F'IN PARTY TIME!!!!#$^%$^^&*$&$&*";
for (var i = daysUntilMyBirthday; i > 1; i--) 
{
 	console.log(daysUntilMyBirthday,text);
 	daysUntilMyBirthday -= 1;
 	if (daysUntilMyBirthday < 30) 
 	{
 		if (daysUntilMyBirthday < 5) 
		{
			excited = caps;	
		}
	text = excited;	
 	}
}
console.log(party); 
	