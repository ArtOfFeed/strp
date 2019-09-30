import React from 'react';
import './App.css';
import ListTemplatesContainer from './components/ListTemplates/ListTemplatesContainer';
import { Route, NavLink } from 'react-router-dom';
import TemplateFormContainer from './components/TemplateForm/TemplateFormContainer';

const App = () => {
	return (
		<div className="wrapper_app container_main">
			<h1><NavLink to='/'>Holla</NavLink></h1>
			<Route exact path='/' component={ListTemplatesContainer} />
			<Route exact path='/:id' component={TemplateFormContainer} />
		</div>
	)
}

export default App;
