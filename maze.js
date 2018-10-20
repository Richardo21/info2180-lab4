
var state;
var boundaries;
var touchWall = true;
var finishGame = true;

window.onload = function()
{
	boundaries = document.querySelectorAll(".boundary");
	state = document.getElementbyId("status");

	for (var j = 0; j < boundaries.length - 1; j++)
	{
		boundaries[j].onmouseover = touchMazeWall;
	}
}
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