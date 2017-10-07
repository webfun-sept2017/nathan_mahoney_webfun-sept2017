function printRange(start, end, skip)
{	
	var num = start;
	for (var i = 0; i <= end - start - 1; i += skip) 
	{	
		num = start + i;		
		console.log(num);	
	}

}

printRange(40,100,2);