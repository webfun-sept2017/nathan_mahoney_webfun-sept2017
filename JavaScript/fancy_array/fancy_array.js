var names = [ "James", "Jill", "Jane", "Jack" ];
function fancyArray() 
{
	for (var i = 0; i < names.length; i++) 
	{
		console.log(i + " -> " + names[i]);	
	}
}
fancyArray(names);