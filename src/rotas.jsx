import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import React from 'react';

import App from './pages/App';

import Detalhar from './pages/Detalhar';


function Rotas(){
	return(
		<BrowserRouter>
   
			<Routes>

				<Route path="/" element={<App/>}/>
				<Route path="/detalhar/:productId" element={<Detalhar />} />
	
			</Routes>
      
		</BrowserRouter>
	);
}
export default Rotas;
