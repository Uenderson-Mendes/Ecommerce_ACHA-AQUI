import React  from 'react';
import Header from './components/Header/Header';
import Products from './components/products/Products';
import Provider from './context/provider';
import Cart from './components/cart/Cart';
//import Footer from './components/footer/footer';


function App() {
	return (
		<Provider>
			<Header />
			<Products/>
			<Cart />
		</Provider>
		
	);
}

export default App;
