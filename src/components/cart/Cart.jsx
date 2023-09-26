import React, { useContext } from 'react';
import './Cart.css';
import Cartitem from '../cartitem/Cartitem';
import appContext from '../../context/Appcontext';
import formatCurrency from '../../utils/formatCurrency';

function Cart(){
	const {cartitem, isCartvisible} = useContext(appContext);
	const totalprice = 	cartitem.reduce((acc, item) =>item.price + acc,0);

	return(
		<section className={`cart ${isCartvisible ? 'cart--active':''}`} >
			<div className="cart-itens">
				{cartitem.map((cartItem)=> <Cartitem key={cartItem} data={cartItem}/>)}
				
			</div>
			<div className="cart-resumo">{formatCurrency(totalprice,'BRL')}</div>
			
		</section>
	);
}

export default Cart;
