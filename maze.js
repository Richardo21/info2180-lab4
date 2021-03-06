//variables declared globally
var state;
var boundaries;
var touchWall = false;
var finishGame = false;
var end;
var start;
var outsideMaze;

window.onload = function()
{
	
//html element being selected for use
	boundaries = document.querySelectorAll(".boundary");
	state = document.getElementById("status");
	end = document.getElementById("end");
	start = document.getElementById("start");
	outsideMaze = document.getElementById("maze");

//assign function to each event
	end.onmouseover = congratsMsg;
	start.onclick = restartGame;
	outsideMaze.onmouseleave = noCheating;

	for (var j = 0; j < boundaries.length - 1; j++)
	{
		boundaries[j].onmouseover = touchMazeWall;
	}
}

//this function checks is the cursor touches the wall
function touchMazeWall()
	{
		if (!finishGame)
			{	
				if (!touchWall) // if the youlose is already applied
					{
						touchWall = true;
						state.innerText = 'You Lose! Click the "S" to start over.';

						for (var x = 0; x < boundaries.length - 1; x++)
						{
							boundaries[x].className += " youlose";
						}
					}
			}
	}


//checks if user lost the game and hit boundaries
function congratsMsg()
	{
		if (!touchWall)
		{
			finishGame = true;
			state.innerText = 'You Win! Click the "S" to reset and play again.';
		}
		
	}

function restartGame()
	{
		finishGame =  false;
		touchWall = false;
		state.innerText = 'Click on the "S" box to begin.';

		for (var x = 0; x < boundaries.length - 1; x++)
		{
			boundaries[x].className = "boundary";
		}
	}



function noCheating()
	{
		if (!finishGame)
		{
			touchMazeWall();
		}
	}