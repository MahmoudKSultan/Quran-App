import React from "react";
import Surat from "./Surat";

function SuarBody({ reader, handlePlayClick }) {
	let spcificReader = { ...reader } || {};
	console.log(spcificReader.surasData);

	return (
		<div className="suarBody">
			{reader.surasData &&
				reader.surasData.map((obj) => {
					return (
						<Surat
							key={obj.id}
							suartData={obj}
							handlePlayClick={handlePlayClick}
						/>
					);
				})}
		</div>
	);
}

export default SuarBody;
