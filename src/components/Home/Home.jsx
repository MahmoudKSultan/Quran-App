import React, { useState } from "react";
import ReadersBody from "../../Readers/ReadersBody";
import FormContainer from "../Form/FormContainer";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
function Home({ data }) {
	const [favReaders, setfavReaders] = useState([]);
	const [formValue, setFormValue] = useState("");

	let handleChange = (event) => {
		setFormValue(event.target.value);
		console.log(formValue);
	};

	let handleHeartClick = (reader) => {
		let readers = [...favReaders, reader];
		setfavReaders(readers);
	};

	let handleDeleteClick = (id) => {
		let readers = favReaders.filter((reader) => reader.id !== id);
		setfavReaders(readers);
	};

	return (
		<div className="home">
			<div className="right-side">
				<FormContainer handleChange={handleChange} />
				{data && (
					<ReadersBody
						data={data}
						formValue={formValue}
						handleHeartClick={handleHeartClick}
					/>
				)}
			</div>
			<div className="left-side">
				<Sidebar
					favReaders={favReaders}
					handleDeleteClick={handleDeleteClick}
				/>
			</div>
		</div>
	);
}

export default Home;
