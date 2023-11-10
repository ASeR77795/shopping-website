import Arrivals from './components/arrivals/Arrivals';
import Banner from './components/banner/Banner';
import Brand from './components/brand/Brand';
import Favourite from './components/favourite/Favourite';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Join from './components/join/Join';
import Sale from './components/sale/Sale';

function App() {
	return (
		<>
			<Header />
			<Banner />
			<Brand />
			<Arrivals />
			<Sale />
			<Favourite />
			<Join />
			<Footer />
		</>
	);
}

export default App;
