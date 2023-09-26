import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { RouterProvider } from 'react-router-dom';
import App from './App';

// import routes from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		{/* <RouterProvider router={routes} /> */}
	</React.StrictMode>
);


