import React from "react";
import "./SuarBody.css";
import { FiPlay } from "react-icons/fi";
function Surat({ suartData, handlePlayClick }) {
	return (
		<div className="suart-box">
			<div className="surat">
				<div className="surat-info">
					<span>{suartData.id}_</span>
					<h4>{suartData.name}</h4>
				</div>
				<div className="surat-media">
					<span onClick={() => handlePlayClick(suartData.id)} className="icon">
						<FiPlay />
					</span>
				</div>
			</div>
		</div>
	);
}

export default Surat;
