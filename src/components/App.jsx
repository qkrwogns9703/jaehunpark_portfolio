import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import NavContainer from '../container/nav/NavContainer';
import AboutContainer from '../container/about/AboutContainer';
const App = props => {
	return (
		<BrowserRouter>
			<NavContainer />
			<Switch>
				<Route path='/'>
					<AboutContainer />
				</Route>
				<Redirect from='*' to='/' />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
