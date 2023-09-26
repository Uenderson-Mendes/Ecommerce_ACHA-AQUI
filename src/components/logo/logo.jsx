import React from 'react';
import './logo.css';

import imgagemEscolhida from '../img/LOGO.png';
function Logo(){
	return (

		<div className="logo">
			<img className="image" src={imgagemEscolhida} alt="" />
		</div>
	);
}
export default Logo;
