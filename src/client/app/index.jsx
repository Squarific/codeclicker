import React from 'react';
import {render} from 'react-dom';

App = React.createClass({
	render() {
		return <p>Hello React!</p>;
	}
});

render(
	<App/>,
	document.getElementById('container')
);