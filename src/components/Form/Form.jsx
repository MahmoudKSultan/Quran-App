import React from "react";
import "./Form.css";
function Form({ placeholder, name, handleChange }) {
	return (
		<div className="form">
			<form>
				<input
					type="text"
					placeholder={placeholder}
					name={name}
					onChange={(event) => handleChange(event)}
				/>
			</form>
		</div>
	);
}

export default Form;
