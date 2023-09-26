import React, {useState, useContext} from 'react';
import '../searchBar/searchBar.css';
import '../products/Products';
import {BsSearch} from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';
import appContext from '../../context/Appcontext';

function SearchBar(){

	const [searchValue, setSearchValue] = useState('');

	const {setProducts} = useContext(appContext);


	const hedsearsh = async (event) => {
		event.preventDefault();
		const products = await fetchProducts(searchValue);
		setProducts(products);
		setSearchValue('');
		
	};



	return (

	
		<form className="search-bar" onSubmit={hedsearsh}>
			
			<input 
				type="search"
				placeholder="Buscar Produto" 
				value={searchValue}
				className="search_input" 
				onChange={({target}) => setSearchValue(target.value)}
				required />
			
			<button type="submit" className="buton__search">
				<BsSearch/>
	
			</button>
		

		</form>
	);
  
}


export default SearchBar;
