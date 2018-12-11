import React, { Component } from 'react';
import Router from './router';

class App extends Component {
	render() {
		// return React.createElement('h1', {}, '我就想看看webpack怎么零配置');
		return (
			<div>
				<h1>我就想看看webpack怎么零配置</h1>
				<Router />
			</div>
		);
	}
}

export default App;
