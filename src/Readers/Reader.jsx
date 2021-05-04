import React from "react";
import AudioMedia from "./AudioMedia";
import SuarBody from "./SuarBody";
import Title from "./Title";
import "./Reader.css";
class Reader extends React.Component {
	state = {
		specificReader: this.props.data.find(
			(obj) => obj.id === this.props.match.params.id
		),
		spcificSourat: {},
	};

	handlePlayClick = (id) => {
		let spcificSourat = this.state.specificReader.surasData.find(
			(soura) => soura.id === id
		);
		this.setState({ spcificSourat });
		console.log(spcificSourat);
	};
	render() {
		const { specificReader, spcificSourat } = this.state;
		return (
			<div className="reader">
				{specificReader && (
					<div className="right-side">
						<Title reader={specificReader} />
						<SuarBody
							reader={specificReader}
							handlePlayClick={this.handlePlayClick}
						/>
					</div>
				)}
				<div className="left-side"></div>
				{spcificSourat && (
					<div className="audio-container">
						<AudioMedia soura={spcificSourat} />
					</div>
				)}
			</div>
		);
	}
}

export default Reader;
