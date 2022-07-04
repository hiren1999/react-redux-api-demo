import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { GetAllProductsRequest } from './productSlice';
import Table from 'react-bootstrap/Table';

const Products = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);
	const status = useSelector((state) => state.product.status);

	const handleOnClick = (e) => {
		e.preventDefault();
		dispatch(GetAllProductsRequest());
	};

	if (status === 'loading') {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<button
				type='button'
				className='btn btn-primary my-4 mx-auto'
				onClick={handleOnClick}>
				Load Data
			</button>
			<div>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Id</th>
							<th>Title</th>
							<th>Price</th>
							<th>Description</th>
							<th>Image</th>
						</tr>
					</thead>
					<tbody>
						{products?.map((product) => (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td>{product.title}</td>
								<td>{product.price}</td>
								<td>{product.description}</td>

								<td>
									<img
										width='80px'
										height='80px'
										src={product.image}
										alt=''
									/>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default Products;
