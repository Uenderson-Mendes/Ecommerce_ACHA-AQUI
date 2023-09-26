import React from 'react';
import './Header.css';
import '../searchBar/searchBar';
import SearchBar from '../searchBar/searchBar';
import CartButon from '../cartButon/cartButon';
import Logo from '../logo/logo';

function Header(){
	return (
		<header className="header">

			<div className="container">
				<Logo/>
				<SearchBar/>
				<CartButon/>
			
			</div>
		</header>
	);
}

export default Header;
