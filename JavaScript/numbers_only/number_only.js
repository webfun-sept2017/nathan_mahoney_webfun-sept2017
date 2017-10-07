function numbersOnly()
{
	var greatArray = [20, "big", 30, "bigger", 100, "biggest"];
	var greaterArray = [];
	for (var i = 0; i < greatArray.length; i++) 
	{
		if (typeof greatArray[i] == "number")
		{
			greaterArray.push(greatArray[i]);
		}
	}
	return greaterArray;
}
document.getElementById('numbers_only').innerHTML = numbersOnly();	

