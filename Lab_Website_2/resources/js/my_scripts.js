/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
		https://www.w3schools.com/js/js_loop_for.asp
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];


/*
	Registration Page:
		viewStudentStats(id, toggle) method
			parameters:
				id - The css id of the html tag being updated.
				toggle -
					0 - hide the html tag
					1 - make the html tag visible

			purpose: This method will accept the id of an html tag and a toggle value.
					 The method will then set the html tag's css visibility and height.
					 To hide the html tag (toggle - 0), the visibility will be set to hidden and
					 the height will be set to 0.
					 To reveal the html tag (toggle - 1), the visibility will be set to visible and
					 the height will be set to auto.
*/
function viewStudentStats(id, toggle)
{
	if(toggle == 0)
	{
		document.getElementById(id).style.visibility = "hidden";
		document.getElementById(id).style.height = "0px";
	}
	else if(toggle == 1)
	{
		document.getElementById(id).style.visibility = "visible";
		document.getElementById(id).style.height = "auto";
	}
}

/*
	Home Page:
		changeColor(color) method
			parameter:
				color- A css color

			purpose: This method will set the html body's background color to the
					 provided parameter.
*/

function changeColor(color)
{
	document.body.style.backgroundColor = color;
}


/*
	Football Season Stats Page:
		loadStatsPage method:
			parameters: none

			purpose: This method will iterate through the stats table and
					 do the following:
						1. Read through each row of the table & determine which team won
						   the game.

						2. Update the winner column to the name of the winning team.

						3. Keep track of the number of wins/losses for the Buffs.

						4. Update the second table to show the total number of wins/losses for the Buffs.
*/

function loadStatsPage()
{
	var table = document.getElementById("stats_table");//Retrieve our table element
	var row_count;
	var winner; //gets the name of the winner
	var loss = 0 //will update loss number in table
	var win = 0 // will update win number in table
//https://www.w3schools.com/jsref/jsref_parseInt.asp
//console.log("Hello world!");
	for(row_count = 2; row_count < table.rows.length; row_count++) //start at 2 because scores are starting on the second row
	{
			var homeScore = parseInt(table.rows[row_count].cells[2].innerHTML); //grab value at the third column
			var OppScore = parseInt(table.rows[row_count].cells[3].innerHTML); //grab value at the fourth column
//document.getElementById("stats_table").rows[1].cells[0].innerHTML


			if(homeScore > OppScore)
			{
				winner = "CU Boulder"; //we win so add our name and update win
				win++;
			}
			else if(homeScore < OppScore)
			{

				winner = table.rows[row_count].cells[1].innerHTML; //if the opposite team win grab the value at the second column(which is the name of the opposite team)
				loss++; //update our loss
			}
			else {
				winner = "tie"
			}
			table.rows[row_count].cells[4].innerHTML = winner; // will populate the last row with the name of the winner
	}
	document.getElementById("wins").innerHTML = win
	document.getElementById("losses").innerHTML = loss
}

/*
	Football Player Information Page
		loadPlayersPage method:
			parameters: none

			purpose: This method will populate the dropdown menu to allow the
					 user to select which player's information to view.

					 To handle this, you will need to iterate through the players array
					 and do the following for each player:
						1. Create an anchor tag
						2. Set the href to "#", this will make sure the
							anchor tag doesn't change pages
						3. Set the onclick to call switchPlayers method
							(this will need to pass in the index inside the players array)
						4. Set the anchor tag's text to the player's name.

					After setting all of the anchor tags, update the innerHTML of the dropdown menu.
					As a note, the id for the dropdown menu is player_selector.


		switchPlayers(playerNum) method:
			parameters:
				playerNum - The index of the football player in the players array.

			purpose:
				This method will update the the spans on the player's information pageX
				and calculate the average passing, rushing, and receiving yards.

				Span ids:
					p_year     - the player's year in college
					p_major    - the player's major in college
					g_played   - the number of games played for Buffs
					player_img - the player's photo (must set src and alt)
					p_yards    - the number of passing yards
					r_yards    - the number of rushing yards
					rec_yards  - the number of receiving yards

					Calculated values:
					  avg_p_yards   - the average number of passing yards for the player's Buff career
					  avg_r_yards   - the average number of rushing yards for the player's Buff career
					  avg_rec_yards - the average number of receiving yards for the player's Buff career
*/


// function loadPlayersPage()
// {
// 	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// 	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Converting_a_for_loop_to_forEach
// 	var htmlHolder = "";
//
// 	//I tried a for loop and it wasn't working so I tried foreach
// 	players.forEach(function(i)
// 	{
// 		var playerArray = players.indexOf(i);
//
// 		htmlHolder += `<a class='dropdown-item' href='#' onclick='switchPlayers(${playerArray})'> ${i.name} </a>`;
// 	});
//
// 	document.getElementById("player_selector").innerHTML = htmlHolder;
// }

//----
function loadPlayersPage() {
	var a_tag ="";
	for (var i = 0; i < players.length; i++) {
		a_tag += "<a class='dropdown-item' style='display:block;'href='#' onclick='switchPlayers("+i+")'>" + players[i].name+"</a>\n";
	}
	console.log(a_tag);
	document.getElementById('player_selector').innerHTML = a_tag;
}


//----


function switchPlayers(playerArray)
{

	if(playerArray == 0)
	{
		document.getElementById("player_img").src = "../resources/img/player1.jpg";
		//or
		//document.getElementById("player_img").src = players[playerArray].img;
	}
	if(playerArray == 1)
	{
		document.getElementById("player_img").src = "../resources/img/player2.jpg";
	}
	if(playerArray == 2)
	{
		document.getElementById("player_img").src = "../resources/img/player3.jpg";
	}
	if(playerArray == 3)
	{
		document.getElementById("player_img").src = "../resources/img/player4.jpg";
	}

	document.getElementById("p_year").innerHTML = players[playerArray].year;
	document.getElementById("p_major").innerHTML = players[playerArray].major;
	document.getElementById("g_played").innerHTML = players[playerArray].games_played;
	document.getElementById("p_yards").innerHTML = players[playerArray].pass_yards;
	document.getElementById("r_yards").innerHTML = players[playerArray].rushing_yards;
	document.getElementById("rec_yards").innerHTML = players[playerArray].receiving_yards;

	document.getElementById("avg_p_yards").innerHTML = Math.floor(players[playerArray].pass_yards/players[playerArray].games_played);
	document.getElementById("avg_r_yards").innerHTML = Math.floor(players[playerArray].rushing_yards/players[playerArray].games_played);
	document.getElementById("avg_rec_yards").innerHTML = Math.floor(players[playerArray].receiving_yards/players[playerArray].games_played);
}
