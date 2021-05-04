import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Reader from "./Readers/Reader";
function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(
			"https://qurani-api.herokuapp.com/api/reciters?fbclid=IwAR2aLjS7FiutiUfKhy891HbbOphBJP77scToCW9HPjZe8FIrD8x8SI2iRZM"
		)
			.then((res) => res.json())
			.then((data) => setData([...data]));
	}, [setData]);
	return (
		<div className="container">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<Home data={data} />
					</Route>
					<Route
						path="/readers/:id"
						render={(props) => <Reader {...props} data={data} />}
						exact
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
