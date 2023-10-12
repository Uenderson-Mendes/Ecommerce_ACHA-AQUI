import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Rotas from './rotas'; // Import without curly braces

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Rotas />
	</React.StrictMode>
);
