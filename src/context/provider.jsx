import React, { useState } from 'react';
import appContext from './Appcontext';
import propTypes from 'prop-types';


function Provider({ children }){

	const [products, setProducts] = useState([]);
	const [cartitem, setCartitem] = useState([]);
	const [loading, setLoading] = useState([true]);
	const [isCartvisible, setIsCartvisible] = useState([false]);

	const value = {
		products,
		setProducts,
		loading,
		setLoading,
		cartitem,
		setCartitem,
		isCartvisible, 
		setIsCartvisible
		
	};



	return(
		<appContext.Provider value={value}>
			{children}
		</appContext.Provider>
	);
}

export default Provider;

Provider.propTypes = {
	children: propTypes.any,

}.isRequired;
