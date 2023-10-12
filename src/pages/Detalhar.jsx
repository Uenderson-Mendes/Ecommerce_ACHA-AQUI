
import Header from '../components/Header/Header';
import Provider  from '../context/provider';
import React, { useContext } from 'react';
import '../components/ProductsCard/ProductsCard.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import formatCurrency from '../../src/utils/formatCurrency';
import appContext from '../../src/context/Appcontext';


function Detalhar({ data }){
	const { title, thumbnail, price } = data;
	const {	cartitem, setCartitem} = useContext(appContext);
	

	const haddd = () =>{
	
		setCartitem([...cartitem,data]);
	};

	return(
		<Provider>
			<Header />
       
			<section className="products-card">
				<img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="car__image" />
				<div className="card__infos">
					<h2 className="card__prince">{formatCurrency(price, 'BRL')}</h2>
					<h2 className="card__title">{title}</h2>



				</div>
				<button type="button" 
					className="button_card-add"
					onClick={haddd}><BsFillCartPlusFill /></button>
		
			</section>


		</Provider>
	);
}

export default Detalhar;
Detalhar.propTypes = {
	data: propTypes.shape({}),

}.isRequired;
