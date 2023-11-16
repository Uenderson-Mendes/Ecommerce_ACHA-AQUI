import React, { useContext } from 'react';
import './ProductsCard.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import PropTypes from 'prop-types'; // Correção: Use 'PropTypes' em vez de 'propTypes'
import formatCurrency from '../../utils/formatCurrency';
import appContext from '../../context/Appcontext';
//import { Link } from 'react-router-dom';

function ProductCard({ data }) {
	const { title, thumbnail, price } = data;
	const { cartitem, setCartitem } = useContext(appContext);

	const haddd = () => {
		setCartitem([...cartitem, data]);
	};

	return (
	
		<section className="products-card">
			<img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="car__image" />
			<div className="card__infos">
				<h2 className="card__prince">{formatCurrency(price, 'BRL')}</h2>
				<h2 className="card__title">{title}</h2>
	
			</div>
			<button type="button" className="button_card-add" onClick={haddd}>
				<BsFillCartPlusFill />
			</button>
		
			<button></button>	
		</section>
	
	);
}

// Correção: Defina a forma da prop 'data' com as propriedades e tipos esperados
ProductCard.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		thumbnail: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		productId: PropTypes.string.isRequired,
	}).isRequired,
};

export default ProductCard;
