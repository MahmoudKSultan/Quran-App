import React, { useState } from "react";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";

function Heartbtn({ handleHeartClick, readerData, isFav }) {
	const [fullHeart, setHeart] = useState(false);

	let toggleHeart = (event) => {
		event.stopPropagation();
		event.preventDefault();
		setHeart(!fullHeart);
		handleHeartClick(readerData);
	};
	return (
		<div className="like-btn" onClick={(event) => toggleHeart(event)}>
			{!fullHeart ? (
				<RiHeart3Line className="icon" size="2.5rem" />
			) : (
				<RiHeart3Fill className="icon" size="2.5rem" />
			)}
		</div>
	);
}

export default Heartbtn;
