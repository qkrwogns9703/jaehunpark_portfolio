import './App.css';
import Nav from './components/Nav';
import Main from './pages/Main';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Footer from './components/Footer';

const App = props => {
	return (
		<>
			<Nav />
			<Main />
			<About />
			<Skills />
			<Projects />
			<Footer />
		</>
	);
};

export default App;
