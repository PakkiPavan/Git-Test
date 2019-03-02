import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Registration from './Registration';
import Login from './Login';
import Masterminds from './Masterminds';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MM1 from './MM1';
import MMHome from './MMHome';
import MMReducer from './MMReducer';
import {BrowserRouter,Route} from 'react-router-dom';
import Rules from './Rules';
const store=createStore(MMReducer);

//import * as serviceWorker from './serviceWorker';
/*import {createStore} from 'redux';
import {Provider} from 'react-redux';
import LikeReducer from './LikeReducer';*/

//const store=createStore(LikeReducer);

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Home}/>
			<Route path="/register" component={Registration}/>
			<Route path="/login" component={Login}/>
			<Route path="/like" component={App}/>
			<Route path="/mastermind" component={Masterminds}/>
			<Provider store={store}>
				<Route path="/MMHome" component={MMHome}/>
				<Route path="/rules" component={Rules}/>
				<Route path="/play" component={MM1}/>
			</Provider>
		</div>
	</BrowserRouter>,
	document.getElementById('root'));

/*
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
