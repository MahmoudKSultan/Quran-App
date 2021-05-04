import React from "react";

function Title({ reader }) {
	return (
		<div>
			<h2>{`${reader.name} - ${reader.rewaya}`}</h2>
		</div>
	);
}

export default Title;
