import React from "react";
import Reader from "./Reader";
import "./Sidebar.css";
function Sidebar({ favReaders, handleDeleteClick }) {
	return (
		<div className="sidebar">
			<img src="quran.png" alt="quran" />
			<div className="fav">
				<h2 className="title">القراء المفضلين</h2>
				<div className="favoriteReaders">
					{favReaders.map((reader) => {
						return (
							<Reader
								key={reader.id}
								reader={reader}
								handleDeleteClick={handleDeleteClick}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
