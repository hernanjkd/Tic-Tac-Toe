import React, { Component } from "react";
import PropTypes from "prop-types";

class SelectionPage extends Component {
	render() {
		return (
			<div className="pickMainDiv">
				<h1 className="pickH1">Player 1 pick your mark</h1>
				<button
					className="buttonsPick"
					onClick={() => this.props.markSelected("x")}>
					<div className="buttonsDiv">x</div>
				</button>
				<button
					className="buttonsPick"
					onClick={() => this.props.markSelected("o")}>
					<div className="buttonsDiv">o</div>
				</button>
			</div>
		);
	}
}

SelectionPage.propTypes = {
	markSelected: PropTypes.func
};

export default SelectionPage;
