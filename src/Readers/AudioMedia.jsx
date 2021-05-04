import React from "react";

function AudioMedia({ soura }) {
	return (
		<div className="audio">
			<audio src={soura.url} controls autoPlay></audio>
		</div>
	);
}

export default AudioMedia;
