import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { GetAllProductsRequest } from './productSlice';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const Products = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);
	const status = useSelector((state) => state.product.status);

	const handleOnClick = (e) => {
		e.preventDefault();
		dispatch(GetAllProductsRequest());
	};

	const imageBodyTemplate = (rowData) => {
		return (
			<img
				// width='80px'
				// height='80px'
				src={rowData.image}
				alt={rowData.image}
				className="product-image"
			/>
		);
	};

	const header = (
		<div className="table-header">
			<h1>Products</h1>
			<Button
				icon="pi pi-refresh"
				onClick={handleOnClick}
				className="w-25 "
			>
				{' '}
				Load Data
			</Button>
		</div>
	);
	const footer = `In total there are ${products ? products.length : 0} products.`;

	return (
		<div className="datatable-templating-demo m-5">
			<div className="card">
				<DataTable
					value={products}
					header={header}
					footer={footer}
					loading={status === 'loading'}
					responsiveLayout="scroll"
				>
					<Column
						field="id"
						header="ID"
					></Column>
					<Column
						field="title"
						header="Title"
					></Column>
					<Column
						header="Image"
						body={imageBodyTemplate}
					></Column>
					<Column
						field="price"
						header="Price"
					></Column>
					<Column
						field="category"
						header="Category"
					></Column>
					<Column
						field="description"
						header="Description"
					></Column>
				</DataTable>
			</div>
		</div>
	);
};

export default Products;
