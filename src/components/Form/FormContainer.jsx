import React from "react";
import Form from "./Form";
import "./Form.css";
function FormContainer({ handleChange }) {
	return (
		<div className="formContainer">
			<Form
				placeholder="بحث باسم القارئ"
				name="readerName"
				handleChange={handleChange}
			/>
			<Form placeholder="اختر الرواية / نوع المصحف" name="mus7afType" />
		</div>
	);
}

export default FormContainer;
