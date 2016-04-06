import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect } from 'react-router';

import Home from './home.component.js';
import Settings from './user-settings/settings.component.js';
import UserSettings from './user-settings/user-settings.component.js';

import Weather from './weather/weather.component.js';

const App = React.createClass({
 <Router>
	 <Route path="/">
		 <Route path="/settings">
			 <Route path="/:userId"/>
		 </Route>
		 <Route path="/weather">
		 </Route>
	 </Route>
 </Router>
});

ReactDOM.render(<App />, document.getElementById("app"));
