import React, { useState, useEffect, useContext } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductsCard/ProductsCard';
import Loading from '../loding/loding';
import appContext from '../../context/Appcontext';

function Products() {
	const { products, setProducts } = useContext(appContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchProducts('Informatica').then((response) => {
			setProducts(response);
			setLoading(false);
		});
	}, []);

	return (
		(loading ? <Loading /> : <section className="products container">
			{products.map((product) => <ProductCard key={product.id} data={product} />)}
		</section>)
	);
}

export default Products;
