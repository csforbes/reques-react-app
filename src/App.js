import React from 'react';
import {
	Route,
	Link,
} from 'react-router-dom';

function RouteOne() {
	return(
		<h1>1️⃣</h1>
	)
}

function RouteTwo() {
	return(
		<h1>2️⃣</h1>
	)
}

class App extends React.Component {

	render() {
		const { title } = this.props;
		
		return (
			<React.Fragment>
				<h2>
					{title}
				</h2>
				<h3>
					<Link to="/">Nav</Link>
				</h3>
				<ul>
					<li>
						<Link to="/route1">Route 1</Link>
					</li>
					<li>
						<Link to="/route2">Route 2</Link>
					</li>
				</ul>

				<Route path="/route1">
					<RouteOne/>
				</Route>
				<Route path="/route2">
					<RouteTwo/>
				</Route>
			</React.Fragment>
		)
	}
}

export default App;