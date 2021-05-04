import React from "react";
import { Link } from "react-router-dom";
import Heartbtn from "./Heartbtn";
import "./ReaderBody.css";
function ReadersBody({ data, handleHeartClick, isFav, formValue }) {
	return (
		<div className="readers-body">
			{data
				.filter((obj) => {
					if (formValue === "") {
						return obj;
					} else if (obj.name.includes(formValue)) {
						return obj;
					}
				})
				.map((obj) => {
					return (
						<div className="wrap" key={obj.id}>
							<Link to={`/readers/${obj.id}`}>
								<div className="data-box">
									<div className="info">
										<div className="reader-name">{obj.name} </div>
										<div className="rewaya">{obj.rewaya}</div>
									</div>
									<Heartbtn
										handleHeartClick={handleHeartClick}
										readerData={obj}
										isFav={isFav}
									/>
								</div>
							</Link>
						</div>
					);
				})}
		</div>
	);
}

export default ReadersBody;
