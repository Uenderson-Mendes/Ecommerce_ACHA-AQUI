import React from 'react';
import {BsCartDashFill} from 'react-icons/bs';

import propTypes from 'prop-types';
import formatCurrency from '../../src/utils/formatCurrency';


function Detalhar({data}) {

	const { title, thumbnail, price ,permalink } = data;




	return (
		<section className="cart-item">
			<img src={thumbnail} alt="imagem produto" className="cart-item-img" />
			<div className="cart-itens-contet">
				<h3 className="cart-item-title">{title}</h3>
				<h3 className="cart-item-price">{formatCurrency(price,'BRL')}</h3>
				<a href={permalink} className="comprar"  target="_blank" rel="noreferrer">Finalizar</a>
		
				<button type="button" className="button__remove-item" 
				>
					<BsCartDashFill/>
				</button>
			</div>
		</section>
	);
}

export default Detalhar;

Detalhar.propTypes = {
	data: propTypes.shape({}),

}.isRequired;

