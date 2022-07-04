import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import { FetchAllProducts } from '../../api/api';
import { STATUSES } from '../../utils';

const initialState = {
	products: [],
	errors: null,
	status: STATUSES.IDLE,
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setStatus: (state, action) => {
			state.status = action.payload;
		},
		getAllProducts: (state, action) => {
			state.products = action.payload;
			state.status = STATUSES.IDLE;
		},
		errorGetAllProducts: (state, action) => {
			state.errors = action.payload;
			state.status = STATUSES.ERROR;
		},
	},
});

export const { setStatus, getAllProducts, errorGetAllProducts } =
	productSlice.actions;

export default productSlice.reducer;

export const GetAllProductsRequest = () => async (dispatch, getState) => {
	dispatch(setStatus(STATUSES.LOADING));
	try {
		const resposne = await FetchAllProducts();

		if (resposne.status === 200) {
			dispatch(getAllProducts(resposne.data));
		}
		// axios
		// 	.get('https://fakestoreapi.com/products')
		// 	.then((response) => {
		// 		dispatch(getAllProducts(response.data));
		// 	})
		// 	.catch((err) => {
		// 		dispatch(errorGetAllProducts(err));
		// 	});
	} catch (err) {
		dispatch(errorGetAllProducts(err));
	}
};
