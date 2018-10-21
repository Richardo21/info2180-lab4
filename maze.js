
var state;
var boundaries;
var touchWall = true;
var finishGame = true;
var end;

window.onload = function()
{
	boundaries = document.querySelectorAll(".boundary");
	state = document.getElementbyId("status");


	end.onmouseover = congratsMsg;

	for (var j = 0; j < boundaries.length - 1; j++)
	{
		boundaries[j].onmouseover = touchMazeWall;
	}
}
function touchMazeWall()
	{
		if (finishGame)
			
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

function congratsMsg()
	{
		if (touchWall)
		{
			state.innerText = 'You Win! Click the "S" to reset and play again.';
		}
		
	}

function restartGame()
	{
		finishGame =  false;
		touchWall = false;
		state.innerText = 'Hover the cursor over the "S" to begin.';

		for (var x = 0; var x < boundaries.length - 1; x++)
		{
			boundaries[i].className = "boundary";
		}
	}