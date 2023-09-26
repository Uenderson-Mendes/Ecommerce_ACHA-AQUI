import React, { useContext } from 'react';
import {BsCartDashFill} from 'react-icons/bs';
import './Cartitem.css';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import appContext from '../../context/Appcontext';


function Cartitem({data}){

	const {id, title, thumbnail, price ,permalink } = data;
	const {cartitem, setCartitem} = useContext(appContext);
	const handremov = ()=>{
		const updateitems = cartitem.filter((item) =>item.id != id);
		setCartitem(updateitems);

	};

	return(
		<section className="cart-item">
			<img src={thumbnail} alt="imagem produto" className="cart-item-img" />
			<div className="cart-itens-contet">
				<h3 className="cart-item-title">{title}</h3>
				<h3 className="cart-item-price">{formatCurrency(price,'BRL')}</h3>
				<a href={permalink} className="comprar"  target="_blank" rel="noreferrer">Finalizar</a>
      
				<button type="button" className="button__remove-item" 
					onClick={handremov}>
					<BsCartDashFill/>
				</button>
			</div>
		</section>
	);
}

export default Cartitem;
Cartitem.propTypes = {
	data: propTypes.shape({}),

}.isRequired;
