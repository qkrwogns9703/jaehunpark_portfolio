import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
const App = props => {
	return (
		<BrowserRouter>
			<Nav />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/projects'>
					<Projects />
				</Route>
				<Redirect from='*' to='/' />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
