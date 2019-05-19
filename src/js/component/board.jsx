import React from "react";
import Position from "./position.jsx";
import SelectionPage from "./selection-page.jsx";

class Board extends React.Component {
	constructor() {
		super();

		this.state = {
			player: true, // player_1 = true, player_2 = false
			player_1: null, // x or o
			player_2: null // x or o
		};
	}

	// Set the title of the page
	componentDidMount() {
		document.title = "My TicTac Your Toe";
	}

	/* This is where the tiles will be stored for each player
	 * When any of them reach the length of 3 then someone won
	 *			147 |  24  | 348
	 * 			 15 | 2578 | 35
	 * 			168 |  26  | 367
	 */
	x = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [] };
	o = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [] };

	// Adds the tile clicked to the arrays x or o
	AddTile = id => {
		for (let i = 0; i < id.length; i++) {
			let num = id.substr(i, 1);
			for (let key in this.x) {
				if (num === key) {
					if (this.state.player) this.x[key].push(id);
					else this.o[key].push(id);
				}
			}
		}
	};

	// Checks the x and o array to see if length equals 3, which would mean they won
	// If there's a win, fill the wonDiv to display the win
	wonDiv;
	CheckToWin = () => {
		let won = false;
		for (let key in this.x) if (this.x[key].length === 3) won = true;
		for (let key in this.o) if (this.o[key].length === 3) won = true;
		if (won)
			this.wonDiv = <div className="wonDiv">WE HAVE A WINNER !!</div>;
	};

	// Swaps the players, it is only updated if the tile hasn't been clicked
	// Uses the function to add the tile in the objects x or o
	// reference position.jsx
	UpdateBoard = (id, mark) => {
		this.setState({ player: !this.state.player });
		this.AddTile(id);
		this.CheckToWin();
	};

	// Function passed to SelectionPage to set which player will be which mark
	UpdateMark = mark => {
		this.setState({
			player_1: mark,
			player_2: mark === "x" ? "o" : "x"
		});
	};

	render() {
		// Sets the mark x or o to be played on each turn
		let passMark = this.state.player
			? this.state.player_1
			: this.state.player_2;

		// If player hasn't picked a mark, then display page for picking, otherwise
		// display board
		if (this.state.player_1 === null) {
			return <SelectionPage markSelected={this.UpdateMark} />;
		} else
			return (
				/*
			 *		CREATE BOARD
			 */
				<div className="container-fluid text-center mt-5">
					{this.wonDiv}
					<div className="row">
						<div className="col-3" />
						<Position
							mark={passMark}
							update={this.UpdateBoard}
							id="147"
						/>
						<Position
							mark={passMark}
							update={this.UpdateBoard}
							id="24"
						/>
						<Position
							mark={passMark}
							update={this.UpdateBoard}
							id="348"
						/>
						<div className="col-3" />
					</div>
					<div className="row">
						<div className="col-3" />
						<Position
							mark={passMark}
							update={this.UpdateBoard}
							id="15"
						/>
						<Position
							mark={passMark}
							update={this.UpdateBoard}
							id="2578"
						/>
						<Position
							mark={passMark}
							update={this.UpdateBoard}
							id="35"
						/>
						<div className="col-3" />
					</div>
					<div className="row">
						<div className="col-3" />
						<Position
							mark={passMark}
							update={this.UpdateBoard}
							id="168"
						/>
						<Position
							mark={passMark}
							update={this.UpdateBoard}
							id="26"
						/>
						<Position
							mark={passMark}
							update={this.UpdateBoard}
							id="367"
						/>
						<div className="col-3" />
					</div>
				</div>
			);
	}
}

export default Board;
