import React from "react";
const context = React.createContext();
const ContextConsumer = context.Consumer;

class Provider extends React.Component {
	state = { data: [] };
	componentDidMount = () => {
		fetch(
			"https://qurani-api.herokuapp.com/api/reciters?fbclid=IwAR2aLjS7FiutiUfKhy891HbbOphBJP77scToCW9HPjZe8FIrD8x8SI2iRZM"
		)
			.then((res) => res.json())
			.then((dataParam) => this.setState({ data: dataParam }));
	};
	render() {
		return (
			<context.Provider value={{ ...this.state.data }}>
				{/* {this.state.data && console.log(this.state.data[0])} */}
			</context.Provider>
		);
	}
}

export { Provider, ContextConsumer };
