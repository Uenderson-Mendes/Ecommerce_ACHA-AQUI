import React, { useContext } from 'react';
import './ProductsCard.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import appContext from '../../context/Appcontext';


function ProductCard({ data }) {
	const { title, thumbnail, price ,permalink } = data;
	const {	cartitem, setCartitem} = useContext(appContext);

	const haddd = () =>{
	
		setCartitem([...cartitem,data]);
	};

	return (

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

	);
}

export default ProductCard;
ProductCard.propTypes = {
	data: propTypes.shape({}),

}.isRequired;
