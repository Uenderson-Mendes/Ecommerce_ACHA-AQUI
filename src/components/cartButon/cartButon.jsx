import React, { useContext } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './cartButon.css';

import appContext from '../../context/Appcontext';

function CartButon(){

	const {cartitem, isCartvisible, setIsCartvisible} = useContext(appContext);


	return (

		<button type="button" className="Cart__button" onClick={() =>setIsCartvisible(!isCartvisible)}>
			<AiOutlineShoppingCart/>
			{cartitem.length > 0 && <span className="cart-Status">{cartitem.length}</span>}
		</button>
	);



}
export default CartButon;
