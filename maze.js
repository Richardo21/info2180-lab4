
var state;
var boundaries;
var touchWall = true;
var finishGame = true;


function touchMazeWall()
	{
		if (finishGame)
			{
				if (touchWall)
					{
						state.innerText = 'You Lose! Click the "S" to start over.';
						for (var x = 0; x < boundaries.length - 1; x++)
						{
							boundaries[x].className += "youlose";
						}
					}
			}
	}