import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

class Position extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false,
			myMark: null // x or o once clicked
		};
	}

	// If the tile hasn't been clicked, set the mark with the corresponding mark that
	// was passed from the parent, and update the parent to let it know it's the
	// other player's turn, with the call back function.
	UpdateThisPosition = () => {
		if (!this.state.clicked) {
			this.setState({
				clicked: true,
				myMark: this.props.mark
			});

			// Send the id back to the board to store it in the x or o objects
			this.props.update(this.props.id);
		}
	};

	render() {
		return (
			<div className="col-2 tile" onClick={this.UpdateThisPosition}>
				{this.state.myMark}
			</div>
		);
	}
}

Position.propTypes = {
	mark: PropTypes.string,
	id: PropTypes.string,
	update: PropTypes.func
};

export default Position;
