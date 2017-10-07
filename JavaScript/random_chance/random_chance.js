	function randomChance(numOfQuarters)
		{
			"use strict";
			var quartersRemaining = numOfQuarters;
			for (var i = quartersRemaining; i > 0; i--)
			{
				var getLucky = Math.floor(Math.random() * 100);
				if (getLucky === 7)
				{
					var winnings = Math.floor(Math.random()*50) + 51;
					return winnings + quartersRemaining;
			
				}
			}
			return 0;
		}
	document.write(randomChance(30));	