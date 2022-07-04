import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './components/Products/productSlice';

export const store = configureStore({
	reducer: {
		product: productSlice.reducer,
	},
});
